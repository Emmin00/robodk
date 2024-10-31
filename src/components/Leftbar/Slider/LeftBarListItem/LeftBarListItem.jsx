import { useEffect, useState } from "react"
import styles from "../../leftbar.module.css"
import FilterItem from "../../FilterItem/FilterItem"

const LeftBarListItem = ({type, array, filtred_robots, filters, setFilters}) => {

    const [openList, setOpenList] = useState()
    const [listType, setListType] = useState()

    useEffect(() => {
        switch (type) {
            case "brands":
                setListType("Производитель")
                break
            case "types":
                setListType("Типы")
                break
            case "axes":
                setListType("Количество осей")
                break
            }
    }, [])

    return(
        <div className={styles.item}>
            <button style={{backgroundColor: openList ? "var(#0834544d)" : "#fff"}} onClick={() => setOpenList(openList ? false : true)} className={styles.open_list}>
                {
                    listType
                }
                <span style={{rotate: openList ? "-180deg" : "0deg"}} className={styles.icon} />
            </button>
            <div style={{height: openList ? "auto" : "0"}} className={styles.list}>
                {array.map((item, index) => 
                    <FilterItem item={item} key={index} filtred_robots={filtred_robots} filters={filters} setFilters={setFilters} type={type}/>
                )}
            </div>
        </div>
    )
}

export default LeftBarListItem