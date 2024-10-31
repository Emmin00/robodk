import { useState, useEffect } from "react"
import styles from "../../leftbar.module.css"
import Slider from "../Slider"

const LeftbarSliderItem = ({type, setFilters}) => {

    const [openSlider, setOpenSlider] = useState(false)
    const [sliderType, setSliderType] = useState()

    useEffect(() => {
        switch (type) {
            case "radius":
                setSliderType("Рабочий радиус")
                break;
            case "load":
                setSliderType("Максимальная нагрузка")
                break;
            case "weight":
                setSliderType("Масса")
                break;
            case "repeatability":
                setSliderType("Повторяемость")
                break
            }
    }, [])

    return(
        <div className={styles.item}>
            <button style={{backgroundColor: openSlider ? "var(#0834544d)" : "#fff"}} onClick={() => setOpenSlider(openSlider ? false : true)} className={styles.open_list}>
                {sliderType}
                <span style={{rotate: openSlider ? "-180deg" : "0deg"}} className={styles.icon} />
            </button>  
            <div style={{height: openSlider ? "70px" : "0"}} className={styles.list}>
                <Slider setFilters={setFilters} type={type} />
            </div>
        </div>
    )
}

export default LeftbarSliderItem