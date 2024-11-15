import React, { useState } from 'react'
import s from './Advantages.module.sass'
import Blocks from '../Blocks/Blocks'

import OrderPopup from '../OrderPopup/OrderPopup'

function Advantages() {

  const [showPopup, setShowPopup] = useState(null);

  const handleClosePopup = () => {
    setShowPopup(null);
    document.body.style.overflow = 'scroll';
};

  return (
    <>
      {showPopup !== null && <OrderPopup onClose={handleClosePopup}></OrderPopup>}
      <div className={s.container}>
          <div className={s.bigBlock}>
              <div className={s.title}><p>Полёт вашего бизнеса<br></br>начинается здесь!</p></div>

              <div className={s.par}>Веб-студия "Веб Пегас" создаёт сайты, боты и другие цифровые решения, которые делают вам эффективность.</div>
              <div className={s.buttons}>
                  <button onClick={() => setShowPopup(true)}>Заказать</button>
                  <p>Предварительный расчёт за 15 минут</p>
              </div>

          </div>
          <Blocks></Blocks>
      </div>
    </>
  )
}

export default Advantages
