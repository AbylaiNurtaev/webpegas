import React, { useEffect, useState } from 'react';
import s from './OrderPopup.module.sass';

function OrderPopup({ onClose }) {
  const [isChecked, setIsChecked] = useState(false); // Состояние для чекбокса
  const [name, setName] = useState(''); // Состояние для имени
  const [phone, setPhone] = useState(''); // Состояние для телефона
  const [isSend, setIsSend] = useState(false); // Флаг успешной отправки
  const [errors, setErrors] = useState({}); // Состояние для ошибок валидации

  // Прокрутка наверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Обработчик изменения состояния чекбокса
  const handleCheckboxChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  // Валидация полей
  const validate = () => {
    const newErrors = {};

    // Проверка имени (не менее 2 символов)
    if (!name.trim()) {
      newErrors.name = 'Введите ваше имя';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать не менее 2 символов';
    }

    // Проверка телефона (минимум 4 символа)
    if (!phone.trim()) {
      newErrors.phone = 'Введите номер телефона или Telegram';
    } else if (phone.trim().length < 4) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Если ошибок нет, возвращаем true
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return; // Если валидация не пройдена, форма не отправляется
    }

    if (!isChecked) {
      alert('Вы должны согласиться с условиями передачи данных.');
      return;
    }

    // Отправка данных на сервер
    fetch(`${process.env.REACT_APP_URL}/new_request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, phone }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Ответ от сервера:', data);
        setIsSend(true);
        localStorage.setItem('form', 'true'); // Сохраняем успешный статус
      })
      .catch((error) => {
        console.error('Ошибка при отправке данных:', error);
      });

    // Очистка полей
    setName('');
    setPhone('');
    setIsChecked(false);
  };

  // Проверка статуса формы из localStorage
  useEffect(() => {
    const formStatus = localStorage.getItem('form');
    if (formStatus === 'true') {
      setIsSend(true);
    }
  }, []);

  return (
    <div className={s.container}>
      <div className={s.overlay}></div>
      {!isSend && (
        <div className={s.popup}>
          <img className={s.logo} src="/images/logo.svg" alt="Логотип" />
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
            {errors.name && <div className={s.error}>{errors.name}</div>}

            <input
              type="text"
              placeholder="Номер телефона или Telegram"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <div className={s.error}>{errors.phone}</div>}

            <button type="submit" disabled={!isChecked}>
              Отправить
            </button>
          </form>

          <div className={s.checkbox}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <p>
              Соглашаюсь с <u>условиями передачи данных</u>
            </p>
          </div>
        </div>
      )}

      {isSend && (
        <div className={s.popup}>
          <img className={s.logo} src="/images/logo.svg" alt="Логотип" />
          <img
            className={s.closeBtn}
            src="/icons/Close Square.svg"
            alt="Закрыть"
            onClick={onClose}
          />
          <div className={s.title}>Все прошло успешно</div>
          <div className={s.par}>В ближайшее время мы свяжемся с вами</div>
          <img src="/popup/send.svg" alt="Отправлено" />
          <button
            onClick={() => {
              onClose();
              scrollToTop();
            }}
          >
            На главную
          </button>
        </div>
      )}
    </div>
  );
}

export default OrderPopup;
