import React, { useEffect, useState } from 'react';
import s from "./Form.module.sass";

function Form() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);
  const [isChecked, setIsChecked] = useState(false); // Состояние для чекбокса

  const [name, setName] = useState('');  // Состояние для имени
  const [phone, setPhone] = useState('');  // Состояние для телефона
  const [errors, setErrors] = useState({ name: '', phone: '' }); // Ошибки для валидации

  // Обновляем состояние при изменении ширины экрана
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 480);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Обработчик изменения состояния чекбокса
  const handleCheckboxChange = () => {
    setIsChecked(prevState => !prevState);
  };

  // Проверка полей формы
  const validate = () => {
    const newErrors = {};

    // Проверка имени (не менее 2 символов)
    if (!name.trim()) {
      newErrors.name = 'Введите ваше имя';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать не менее 2 символов';
    }

    // Проверка телефона (допустим, минимум 10 символов)
    if (!phone.trim()) {
      newErrors.phone = 'Введите номер телефона или Telegram';
    } else if (phone.trim().length < 4) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isChecked) {
      alert('Вы должны согласиться с условиями передачи данных.');
      return;
    }

    if (!validate()) {
      return;
    }

    localStorage.setItem('form', true);

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
    setErrors({}); // Сбрасываем ошибки
  };

  return (
    <div className={s.container}>
      <div className={s.left}>
        <div className={s.title}>Готовы работать вместе?</div>
        <button>Бесплатная консультация</button>
      </div>
      <div className={s.right}>
        <div className={s.title}>Заполните форму и мы проконсультируем вас</div>
        <div className={s.par}>Наш менеджер свяжется с вами в ближайшее время</div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={isMobile ? 'Имя' : 'Введите ваше Имя'}
            value={name}
            onChange={(e) => {setName(e.target.value); validate()}}
          />
          {errors.name && <div className={s.error}>{errors.name}</div>}

          <input
            type="text"
            placeholder={isMobile ? 'Телефон или Telegram' : 'Ваш номер телефона или Telegram'}
            value={phone}
            onChange={(e) => {setPhone(e.target.value); validate()}}
          />
          {errors.phone && <div className={s.error} >{errors.phone}</div>}

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
          <p>Соглашаюсь с <u>условиями передачи данных</u></p>
        </div>
      </div>
    </div>
  );
}

export default Form;
