import { Link } from "react-router-dom"
import styles from "./navbar.module.css"

const Navbar = () => {

    const buttons = [{N: 'Роботы', H: '', A: true}, {N: 'Проекты', H: '', A: false}, {N: 'Дополнения', H: '', A: false}, {N: 'Постпроцессоры', H: '', A: false}]

    return(
        <nav className={styles.nav}>
            <main className={styles.container}>
                <div className={styles.header}>
                    Каталог роботов
                </div>

                <div className={styles.buttons}>
                    {
                        buttons.map((item, index) => 
                            <Link className={styles.button + ' ' + (item.A === true ? styles.active : '')} key={index} to={`/${item.H}`}>
                                {item.N}
                            </Link>
                        )
                    }
                </div>
            </main>
        </nav>
    )
}

export default Navbar