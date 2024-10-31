import Card from "../../Card/Card"
import styles from "./robotslist.module.css"

const RobotsList = ({data}) => {
    return(
        <div className={styles.main}>
            {data.map((item, index) => <Card el={item} key={index} />)}
        </div>
    )
}

export default RobotsList