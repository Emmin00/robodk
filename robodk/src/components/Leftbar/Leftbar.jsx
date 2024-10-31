import { useState } from "react"
import { LibData } from "../../Data/LibData"
import styles from "./leftbar.module.css"
import FilterItem from "./FilterItem/FilterItem"
import Slider from "./Slider/Slider"
import LeftBarListItem from "./Slider/LeftBarListItem/LeftBarListItem"
import LeftbarSliderItem from "./Slider/LeftBarSliderItem/LeftBarSliderItem"

const Leftbar = ({filtred_robots, filters, setFilters, fixedFilterParametrs, fixedFilters}) => {

    const [searchText, setText] = useState('')
    const [filtersKey, setFiltersKey] = useState(0)
    const objectToArray = (obj) => {
        return Object.entries(obj).map(([key, value]) => {
            return { key: key, value: value };
        })
    }

    const brands = objectToArray(LibData.ListAllBrands)
    const types = objectToArray(LibData.ListAllTypes)
    const axes = objectToArray(LibData.ListAllAxes)

    return(

        <div className={styles.container}>

            <div className={styles.sticky}>
                <div className={styles.searcher_box}>
                    <input placeholder="Поиск в каталоге" type="text" className={styles.searcher} onChange={e => setText(e.target.value)} value={searchText} />
                    <div className={styles.search_button_box}>
                        <button className={styles.search_button} onClick={() => setFilters(prev => ({...prev, search: searchText}))} />
                    </div>
                </div>

                <div className={styles.buttons}>
                    <button 
                        className={styles.reset} 
                        onClick={() => {setFiltersKey(filtersKey + 1); setFilters(prev => ({...fixedFilterParametrs, search: prev.search}))}}
                    >
                        Сбросить фильтры
                    </button>
                    <button 
                        className={styles.reset} 
                        onClick={() => {setFilters(prev => ({...prev, search: ''})); setText('')}}
                    >
                        Сбросить запрос
                    </button>
                    <button 
                        className={styles.reset} 
                        onClick={() => {setFiltersKey(filtersKey + 1); setText(''); setFilters(fixedFilters)}}
                    >
                        Сбросить все
                    </button>
                </div>

                <div className={styles.filters} key={filtersKey}>

                    <LeftBarListItem type={"brands"} array={brands} filtred_robots={filtred_robots} filters={filters} setFilters={setFilters} />
                    <LeftBarListItem type={"types"} array={types} filtred_robots={filtred_robots} filters={filters} setFilters={setFilters} />
                    <LeftBarListItem type={"axes"} array={axes} filtred_robots={filtred_robots} filters={filters} setFilters={setFilters} />

                    <LeftbarSliderItem type={"radius"} setFilters={setFilters} />
                    <LeftbarSliderItem type={"load"} setFilters={setFilters} />
                    <LeftbarSliderItem type={"weight"} setFilters={setFilters} />
                    <LeftbarSliderItem type={"repeatability"} setFilters={setFilters} />

                </div>
                
            </div>

        </div>
    )
}

export default Leftbar