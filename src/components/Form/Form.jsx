import React, { useEffect, useState } from 'react'
import s from "./Form.module.sass"

function Form() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  // Обновляем состояние при изменении ширины экрана
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 480);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={s.container}>
        <div className={s.left}>
            <div className={s.title}>Готовы работать вместе?</div>
            <button>Бесплатная консультация</button>
        </div>
        <div className={s.right}>
            <div className={s.title}>Заполните форму и мы проконсультируем вас</div>
            <div className={s.par}>Наш менеджер свяжется с вами в ближайшее время</div>
            <input 
                type="text" 
                placeholder={isMobile ? 'Имя' : 'Введите ваше Имя'} 
            />
            <input 
                type="text" 
                placeholder={isMobile ? 'Телефон' : 'Введите ваш номер телефона'} 
            />
            <button>Отправить</button>
            <div className={s.checkbox}>
                <input type="checkbox" />
                <p>Соглашаюсь с <u>условиями передачи данных</u></p>
            </div>
        </div>
    </div>
  )
}

export default Form;
