import styles from "./card.module.css"

const Card = ({el}) => {

    return(
        <div className={styles.card}>

            {/* links */}
            <div className={styles.links}>
                <button className={styles.link_button}>Подробности</button>
                <button className={styles.link_button}>Трехмерный вид</button>
                <button className={styles.link_button}>Скачать</button>
            </div>


            <div className={styles.title}>
                {el.N}
            </div>
            <div className={styles.img_box}>
                <img src={`https://robodk.com/robot/img/${el.IS}`} alt="" className={styles.img} />
            </div>
            <div className={styles.info}>

                <div style={{backgroundColor: 'var(--light-gray)'}} className={styles.info_item}>
                    <div className={styles.info_title_1 + ' ' + styles.info_title}>
                        Производитель
                    </div>
                    <div className={styles.info_title_2 + ' ' + styles.info_title}>
                        {el.B}
                    </div>
                </div>

                <div className={styles.info_item}>
                    <div className={styles.info_title_1 + ' ' + styles.info_title}>
                        Модель
                    </div>
                    <div className={styles.info_title_2 + ' ' + styles.info_title}>
                        {el.M}
                    </div>
                </div>

                <div style={{backgroundColor: 'var(--light-gray)'}} className={styles.info_item}>
                    <div className={styles.info_title_1 + ' ' + styles.info_title}>
                        Количество осей
                    </div>
                    <div className={styles.info_title_2 + ' ' + styles.info_title}>
                        {el.A}
                    </div>
                </div>

                <div className={styles.info_item}>
                    <div className={styles.info_title_1 + ' ' + styles.info_title}>
                        Рабочий радиус
                    </div>
                    <div className={styles.info_title_2 + ' ' + styles.info_title}>
                        {el.R} mm
                    </div>
                </div>

                <div style={{backgroundColor: 'var(--light-gray)'}} className={styles.info_item}>
                    <div className={styles.info_title_1 + ' ' + styles.info_title}>
                        Максимальная нагрузка
                    </div>
                    <div className={styles.info_title_2 + ' ' + styles.info_title}>
                        {el.P} kg
                    </div>
                </div>

                <div className={styles.info_item}>
                    <div className={styles.info_title_1 + ' ' + styles.info_title}>
                        Масса
                    </div>
                    <div className={styles.info_title_2 + ' ' + styles.info_title}>
                        {el.W} kg
                    </div>
                </div>

                <div style={{backgroundColor: 'var(--light-gray)'}} className={styles.info_item}>
                    <div className={styles.info_title_1 + ' ' + styles.info_title}>
                        Повторяемость
                    </div>
                    <div className={styles.info_title_2 + ' ' + styles.info_title}>
                        {el.E} mm
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card