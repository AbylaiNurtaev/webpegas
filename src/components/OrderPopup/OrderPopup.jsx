import React, { useEffect, useState } from 'react';
import s from './OrderPopup.module.sass';


function OrderPopup({ onClose }) {
    const [isChecked, setIsChecked] = useState(false);  // Состояние для чекбокса
    const [name, setName] = useState('');  // Состояние для имени
    const [phone, setPhone] = useState('');  // Состояние для телефона
    
    const [isSend, setIsSend] = useState(false)

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Обработчик для изменения состояния чекбокса
    const handleCheckboxChange = () => {
        setIsChecked(prevState => !prevState);
    };

    // Обработчик отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('form', true)

        if (!isChecked) {
            alert('Вы должны согласиться с условиями передачи данных.');
            return;
        }
        
        fetch(`${process.env.REACT_APP_URL}/new_request`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, phone }),
          })
          .then(res => res.json())
          .then(data => {
            console.log('Ответ от сервера:', data);
            // Логика для обработки ответа
          })
          .catch(error => {
            console.error('Ошибка:', error);
            // Логика для обработки ошибок
          });
        // После отправки формы можно очистить поля
        setName('');
        setPhone('');
        setIsChecked(false);
        setIsSend(true)

    };
    
    useEffect(() => {
        const form = localStorage.getItem('form')
        if(form == 'true'){
            setIsSend(true)
        }
    }, [])

    return (
        <div className={s.container}>
            <div className={s.overlay}></div>
            {
                    !isSend &&
                <div className={s.popup}>
                    
                    <img className={s.logo} src="/images/logo.svg" alt="" />
                    <img
                        className={s.closeBtn}
                        src="/icons/Close Square.svg"
                        alt="Закрыть"
                        onClick={onClose}
                    />

                    <div className={s.title}>Заполните форму и мы проконсультируем вас</div>
                    <div className={s.par}>Наш менеджер свяжется с вами в ближайшее время</div>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Ваше имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Номер телефона или Telegram"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        {/* <p className={s.selectSoc}>либо можете оставить свой Telegram</p> */}
                        <button type="submit" disabled={!isChecked}>Отправить</button>
                    </form>

                    <div className={s.checkbox}>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <p>Соглашаюсь с <u>условиями передачи данных</u></p>
                    </div>
                </div>

                }

                {
                    isSend && 
                    <div className={s.popup}>
                        <img className={s.logo} src="/images/logo.svg" alt="" />
                        <img
                            className={s.closeBtn}
                            src="/icons/Close Square.svg"
                            alt="Закрыть"
                            onClick={onClose}
                        />
                        <div className={s.title}>Все прошло успешно</div>
                        <div className={s.par}>В ближайшее время мы свяжемся с вами</div>
                        <img src="/popup/send.svg" alt="" />
                        <button onClick={() => {onClose(); scrollToTop()}}>На главную</button>
                    </div>
                }
        </div>
    );
}

export default OrderPopup;
