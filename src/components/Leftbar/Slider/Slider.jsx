import HandleMove from "./HandleMove/HandleMove";
import styles from "./slider.module.css"
import React, { useRef, useEffect, useState } from 'react';

const Slider = ({type, setFilters}) => {

    const sliderRef = useRef(null)
    const [left1, setLeft1] = useState(0)
    const [left2, setLeft2] = useState(100)
    const [fixedMin, setFixedMin] = useState()
    const [fixedMax, setFixedMax] = useState()
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const minRef = useRef(0)
    const maxRef = useRef(0)
    const [toCalculate, setToCalculate] = useState()
    const [meaning, setMeaning] = useState()

    useEffect(() => {
        switch(type) {
            case "radius":
                setToCalculate(46.83)
                setFixedMin(-1)
                setFixedMax(20000)
                setMin(-1)
                setMax(20000)
                setMeaning("mm")
                break
            case "load":
                setToCalculate(17)
                setFixedMin(-1)
                setFixedMax(6500)
                setMin(-1)
                setMax(6500)
                setMeaning("kg")
                break
            case "weight":
                setToCalculate(125)
                setFixedMin(2)
                setFixedMax(12500)
                setMin(2)
                setMax(12500)
                setMeaning("kg")
                break
            case "repeatability":
                setToCalculate(0.020.toFixed(3))
                setFixedMin((-1.000).toFixed(3))
                setFixedMax(1.000.toFixed(3))
                setMin((-1.000).toFixed(3))
                setMax(1.000.toFixed(3))
                setMeaning("mm")
                break
        }
    }, [])

    useEffect(() => {

        if(!fixedMin && !fixedMax) return

        let isModifiedMin
        let isModifiedMax

        const minimum = Math.min(left1, left2)
        const maximum = Math.max(left1, left2)
        
        if(type === "repeatability") {
            isModifiedMin = minimum === 0 ? fixedMin : ((minimum - 50) * toCalculate).toFixed(3)
            isModifiedMax = maximum === 100 ? fixedMax : ((maximum - 50) * toCalculate).toFixed(3)
        } else {
            isModifiedMin = minimum === 0 ? fixedMin : Math.floor(minimum * toCalculate)
            isModifiedMax = maximum === 100 ? fixedMax : Math.floor(maximum * toCalculate)
        }

        setMin(isModifiedMin)
        setMax(isModifiedMax)
        minRef.current = isModifiedMin
        maxRef.current = isModifiedMax

    }, [left1, left2])

    const addFilterParametr = () => {

        switch(type) {
            case "radius":
                setFilters(prev => ({...prev, radius: {min: minRef.current, max: maxRef.current}}))
                break
            case "load":
                setFilters(prev => ({...prev, load: {min: minRef.current, max: maxRef.current}}))
                break
            case "weight":
                setFilters(prev => ({...prev, weight: {min: minRef.current, max: maxRef.current}}))
                break
            case "repeatability":
                setFilters(prev => ({...prev, repeatability: {min: minRef.current, max: maxRef.current}}))
                break
        }
    }
    
    return(
        <div className={styles.container}>
            <div className={styles.meaning}>
                    <div className={styles.min}>
                        {
                            min + '' + meaning
                        }
                    </div>

                    <div className={styles.max}>
                        {
                            max + '' + meaning
                        }
                    </div>
                </div>
            <div className={styles.slider_box}>
                <div ref={sliderRef} className={styles.slider}>
                    <div style={{left: `${Math.min(left1, left2)}%`, width: `${Math.abs(left1-left2)}%`}} className={styles.track} />
                    <div className={styles.rail} />
                    <HandleMove sliderRef={sliderRef} def={0} setLeftTrack={setLeft1} addFilterParametr={addFilterParametr} />
                    <HandleMove sliderRef={sliderRef} def={100} setLeftTrack={setLeft2} addFilterParametr={addFilterParametr} />
                </div>
            </div>
        </div>
    )

}

export default Slider