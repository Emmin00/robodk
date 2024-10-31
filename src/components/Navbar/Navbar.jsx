import { Link } from "react-router-dom"
import styles from "./navbar.module.css"

const Navbar = () => {

    const buttons = [{N: 'Роботы', H: '', A: true}, {N: 'Проекты', H: '', A: false}, {N: 'Дополнения', H: '', A: false}, {N: 'Постпроцессоры', H: '', A: false}]

    return(
        <nav className={styles.nav}>
            <main className={styles.main_nav}>
                    <div className={styles.logo} />

                    <div className={styles.links}>
                        <div className={styles.link}>
                            Скачать
                        </div>
                        <div className={styles.link}>
                            Стоимость
                        </div>
                        <select className={styles.link}>
                            <option value="">Продукты</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                        </select>
                        <select className={styles.link}>
                            <option value="">Компания</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                        </select>
                        <select className={styles.link}>
                            <option value="">Поддержка</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                        </select>
                        <div className={styles.link}>
                            Контакты
                        </div>
                    </div>

                    <select className={styles.link}>
                        <option value="">Русский</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                    </select>
            </main>
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