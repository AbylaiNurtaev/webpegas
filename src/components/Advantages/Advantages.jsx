import React from 'react'
import s from './Advantages.module.sass'

function Advantages() {
  return (
    <div className={s.container}>
        <div className={s.bigBlock}>
            <div className={s.title}>Полёт вашего бизнеса начинается здесь!</div>

            <div className={s.par}>Веб-студия "Веб Пегас" создаёт сайты, боты и другие цифровые решения, которые делают вам эффективность.</div>
            <div className={s.buttons}>
                <button>Заказать</button>
                <p>Предварительный<br></br>расчёт за 15 минут</p>
            </div>

        </div>
    </div>
  )
}

export default Advantages
