import React, { useEffect, useState } from 'react';
import s from './OrderPopup.module.sass';

function OrderPopup({ onClose }) {
    const [isChecked, setIsChecked] = useState(false);  // Состояние для чекбокса
    const [name, setName] = useState('');  // Состояние для имени
    const [phone, setPhone] = useState('');  // Состояние для телефона
    
    const [isSend, setIsSend] = useState(false)

    const dsa = process.env.BACKEND_URL
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
        // Логика отправки формы (например, вызов API или другой обработчик)
        alert('Форма отправлена!');
        // После отправки формы можно очистить поля
        setName('');
        setPhone('');
        setIsChecked(false);
        setIsSend(true)

    };
    
    useEffect(() => {
        console.log(dsa);

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
                            placeholder="Ваш номер телефона"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
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
