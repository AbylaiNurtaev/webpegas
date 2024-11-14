import React from 'react'
import s from './Advantages.module.sass'
import Blocks from '../Blocks/Blocks'
function Advantages() {
  return (
    <div className={s.container}>
        <div className={s.bigBlock}>
            <div className={s.title}><p>Полёт вашего бизнеса<br></br>начинается здесь!</p></div>

            <div className={s.par}>Веб-студия "Веб Пегас" создаёт сайты, боты и другие цифровые решения, которые делают вам эффективность.</div>
            <div className={s.buttons}>
                <button>Заказать</button>
                <p>Предварительный расчёт за 15 минут</p>
            </div>

        </div>
        <Blocks></Blocks>
    </div>
  )
}

export default Advantages
