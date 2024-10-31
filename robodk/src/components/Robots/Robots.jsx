import { useEffect, useState } from "react"
import { LibData } from "../../Data/LibData"
import Leftbar from "../Leftbar/Leftbar"
import Navbar from "../Navbar/Navbar"
import Pagination from "../Pagination/Pagination"

const Robots = () => {

    const robots_data = LibData.DATA_ALL
    const robots_array = Object.entries(robots_data).map(([key, value]) => value)
    const [filtred_robots, setFiltred_robots] = useState(robots_array)

    const fixedFilterParametrs = {
        brands: [],
        types: [],
        axes: [],
        radius: {
            min: -1,
            max: 20000
        },
        load: {
            min: -1,
            max: 6500
        },
        weight: {
            min: 2,
            max: 12500
        },
        repeatability: {
            min: -1.000,
            max: 1.000
        }
    }
    const fixedFilters = {...fixedFilterParametrs, search: ''}

    const [filters, setFilters] = useState(fixedFilters)

    useEffect(() => {

        const data = robots_array

        const rMin = filters.radius.min
        const rMax = filters.radius.max
        const lMin = filters.load.min
        const lMax = filters.load.max
        const wMin = filters.weight.min
        const wMax = filters.weight.max
        const rpMin = filters.repeatability.min
        const rpMax = filters.repeatability.max
        const s = filters.search.toUpperCase() || ''

        const isEmptyArray = (arr) => arr?.length === 0

        JSON.stringify(filters) === JSON.stringify(fixedFilters) ?
            setFiltred_robots(data)
            :
            setFiltred_robots(data.filter((item) => 
                (isEmptyArray(filters.brands) || filters.brands.includes(item.B)) &&
                (isEmptyArray(filters.types) || filters.types.includes(item.T)) &&
                (isEmptyArray(filters.axes) || filters.axes.includes(String(item.A)))  &&
                ((rMin === -1 || item.R > rMin) && (rMax === 20000 || item.R < rMax)) &&
                ((lMin === -1 || item.P > lMin) && (lMax === 6500 || item.P < lMax)) &&
                ((wMin === 2 || item.W > wMin) && (wMax === 12500 || item.W < wMax)) &&
                ((rpMin === -1.000 || item.E > rpMin) && (rpMax === 1.000 || item.E < rpMax)) &&
                (s.length === 0 || item.N.toUpperCase().includes(s))
            ))

    }, [filters])


    return(
        <>
            <Navbar />
            <Leftbar filtred_robots={filtred_robots} filters={filters} setFilters={setFilters} fixedFilterParametrs={fixedFilterParametrs} fixedFilters={fixedFilters} />
            <Pagination filtred_robots={filtred_robots} />
        </>
    )
}
export default Robots