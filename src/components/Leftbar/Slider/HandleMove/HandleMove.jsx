import { useState, useEffect } from "react"
import styles from "../slider.module.css"

const HandleMove = ({sliderRef, def, setLeftTrack, addFilterParametr}) => {
    
    const [left, setLeft] = useState(def)

    const handleMove = (e) => {

        const slider = sliderRef.current
        const rect = slider.getBoundingClientRect()
        const sliderWidth = rect.width

        let newValue = ((e.clientX - rect.left - 7) / sliderWidth) * 100
        newValue = Math.min(100, Math.max(0, newValue))
        setLeft(newValue)
        setLeftTrack(newValue)

    }

    const handleMoveStop = () => {
        addFilterParametr()
        document.removeEventListener("mousemove", handleMove)
        document.removeEventListener("mouseup", handleMoveStop)
    }

    const handleMoveStart = () => {
        document.addEventListener("mousemove", handleMove)
        document.addEventListener("mouseup", handleMoveStop)
    }

    return(
        <div 
            style={{left: `${left}%`}} 
            onMouseDown={() => handleMoveStart()} 
            className={styles.slider_handle} 
        />
    )
}

export default HandleMove