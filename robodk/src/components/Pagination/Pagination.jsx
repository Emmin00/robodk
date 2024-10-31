import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from "./pagination.module.css"
import Card from "../Card/Card"
import { Link } from "react-router-dom"

const Pagination = ({filtred_robots}) => {

    const {page} = useParams()
    const numberOfPages = Math.ceil(filtred_robots.length / 30)
    const pages = new Array(numberOfPages).fill({n: null})
    const [data, setData] = useState()

    useEffect(() => {

        const isPage = page || 1

        const nm = 30 * (isPage - 1)
        const first = nm
        const last = 29 + nm

        setData(filtred_robots.slice(first, last))

    }, [page])

    return(
        <div className={styles.main}>
            
            <div className={styles.cards}>
                {data?.map((item, index) => <Card el={item} key={index}/>)}
            </div>

            <div className={styles.pagination}>
                {
                    pages.map((_, index) => <Link to={`/${index+1}`} className={styles.button}>{index+1}</Link>)
                }
            </div>
        </div>
    )
}

export default Pagination