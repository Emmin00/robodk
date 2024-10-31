import { useState } from "react"
import styles from "../leftbar.module.css"

const FilterItem = ({item, filtred_robots, filters, setFilters, type}) => {

    const [checked, setChecked] = useState(null)

    const addFilterParametr = (checked, key) => {

        setChecked(checked)

        switch (type) {
            case "brands":
                checked ?
                    setFilters(prev => ({...prev, brands: [...prev.brands, key]}))
                    :
                    setFilters(prev => ({...prev, brands: [...prev.brands.filter(item => item !== key)]}))
                break;
            case "types":
                checked ?
                    setFilters(prev => ({...prev, types: [...prev.types, key]}))
                    :
                    setFilters(prev => ({...prev, types: [...prev.types.filter(item => item !== key)]}))
                break;
            case "axes":
                checked ?
                    setFilters(prev => ({...prev, axes: [...prev.axes, key]}))
                    :
                    setFilters(prev => ({...prev, axes: [...prev.axes.filter(item => item !== key)]}))
                break;
        }
    }

    const quantity = (element) =>  {

        const data = filtred_robots
        let array = null

        switch (type) {
            case "brands":
                array = data.filter(item => item.B === element)
                break;
            case "types":
                array = data.filter(item => item.T === element)
                break;
            case "axes":
                array = data.filter(item => String(item.A) === element)
                break;
        }

        return array.length
    }

    return(
        <div className={styles.list_item}>
            <div className={styles.filter}>
                <label className={styles.checkbox}>
                    <input onChange={e => addFilterParametr(e.target.checked, item.key)} type="checkbox" />
                    <span className={styles.checkbox_label}>&nbsp;{item.key}</span>
                </label>
            </div>
            
                {
                    checked ? 
                        <div className={styles.value}>
                            {quantity(item.key)}
                        </div>
                        :
                        filters.brands[0] || filters.types[0] || filters.axes[0] ?
                            <></>
                            :
                            <div className={styles.value}>
                                {item.value}
                            </div>
                }
            
        </div>
    )
}

export default FilterItem