import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from "./pagination.module.css"
import Card from "../Card/Card"
import { Link } from "react-router-dom"

const Pagination = ({filtred_robots}) => {

    const {page} = useParams()
    const rLen = filtred_robots.length
    const numberOfPages = Math.ceil(rLen / 30)
    const pages = new Array(numberOfPages).fill(null).map((_, index) => index)
    const pageNum = Number(page) || 1
    const [data, setData] = useState()

    useEffect(() => {

        const isPage = pageNum || 1

        const nm = 30 * (isPage - 1)
        const first = nm
        const last = 29 + nm

        setData(filtred_robots.slice(first, last))

    }, [page, filtred_robots])

    useEffect(() => history('/1'), [filtred_robots])

    const isActive = (n) => {
        return n === pageNum - 1 ? styles.active : ''
    }

    return(
        <div className={styles.main}>
            
            <div className={styles.cards}>
                {data?.map((item, index) => <Card el={item} key={index}/>)}
            </div>

            <div className={styles.pagination}>
                {
                    pageNum === 1 || <Link to={`/${pageNum - 1}`} className={styles.button}>{'<'}</Link> 
                }
                {
                    numberOfPages <= 11 ? pages.map((n) => <Link to={`/${n+1}`} key={n} className={styles.button + ' ' + isActive(n)}>{n+1}</Link>)
                    :
                    (pageNum > 5 && pageNum < numberOfPages - 3) ?
                        <>
                            <Link to={`/${1}`} className={styles.button}>1</Link>
                            <Link className={styles.disabled}>...</Link>

                            {pages.slice(pageNum - 4, pageNum + 3).map((n) => <Link to={`/${n+1}`} key={n} className={styles.button + ' ' + isActive(n)}>{n+1}</Link>)}

                            <Link className={styles.disabled}>...</Link>
                            <Link to={`/${numberOfPages}`} className={styles.button}>{numberOfPages}</Link>
                        </>
                        :
                        pageNum <= 5 ?
                            <>
                                {pages.slice(0, 6).map((n) => <Link key={n} to={`/${n+1}`} className={styles.button + ' ' + isActive(n)}>{n+1}</Link>)}

                                <Link className={styles.disabled}>...</Link>

                                <Link to={`/${numberOfPages}`} className={styles.button}>{numberOfPages}</Link>
                            </>
                            :
                            <>
                                <Link to={`/${1}`} className={styles.button}>1</Link>

                                <Link className={styles.disabled}>...</Link>

                                {pages.slice(page - 6, numberOfPages).map((n) => <Link key={n} to={`/${n+1}`} className={styles.button + ' ' + isActive(n)}>{n+1}</Link>)}
                            </>
                }
                {
                    pageNum === numberOfPages || <Link to={`/${pageNum + 1}`} className={styles.button}>{'>'}</Link> 
                }
            </div>
        </div>
    )
}

export default Pagination
