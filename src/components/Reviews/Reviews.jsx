import React, { useEffect, useState } from 'react';
import s from './Reviews.module.sass';
import Feedback from '../Feedback/Feedback';

function Reviews() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Определяем, является ли устройство мобильным
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleDeviceChange = (e) => setIsMobile(e.matches);

    setIsMobile(mediaQuery.matches); // Начальное состояние
    mediaQuery.addListener(handleDeviceChange);

    return () => mediaQuery.removeListener(handleDeviceChange);
  }, []);

  const peoples = [
    {
      name: "Ирина Смирнова",
      work: `владелец студии красоты "Элегант"`,
      par: 'Спасибо команде за прекрасный сайт! Он выглядит стильно и современно, а главное – работает без сбоев. Теперь клиенты могут легко записываться онлайн, и это значительно облегчает нашу работу. Рекомендую!',
      img: '/peoples/img.svg'
    },
    {
      name: "Иван Касаткин",
      work: `директор туристического агентства "Путешествие"`,
      par: '"Мы искали компанию, которая сможет создать для нас сайт с онлайн-бронированием туров. Предложили отличное решение, которое полностью удовлетворило наши запросы. Сайт работает быстро, удобно и привлекательно. Спасибо за отличную работу!',
      img: '/peoples/img (1).svg'
    },
    {
      name: "Станислав Корниловский",
      work: `предприниматель`,
      par: 'Я обратился за разработкой чат-бота для Telegram. Результат превзошел все мои ожидания! Бот работает быстро, информативно и удобно. Теперь я могу оперативно получать нужную мне информацию, не тратя время на поиск. Спасибо за профессионализм!',
      img: '/peoples/img (2).svg'
    },
    {
      name: "Анна Петрова",
      work: `руководитель цветочного ателье "Розовые мечты"`,
      par: 'Мы очень довольны вашей работой! Наш новый сайт выглядит прекрасно и привлекает внимание клиентов. Спасибо за креативный подход и отличное исполнение. Теперь у нас больше заказов и довольных клиентов.',
      img: '/peoples/img (3).svg'
    },
    {
      name: "Дмитрий Иванов",
      work: `руководитель дизайн-студии "Креатив"`,
      par: 'Ваша команда сделала отличную работу с нашим новым сайтом! Дизайн выглядит современно и стильно, а функционал сайта полностью соответствует нашим ожиданиям. Спасибо за профессионализм и творческий подход!',
      img: '/peoples/img (4).svg'
    },
  ];

  // Логика прокрутки для мобильной и десктопной версии
  const moveToRight = () => {
    let nextIndex;
    if (isMobile) {
      nextIndex = (currentIndex + 1) % peoples.length; // Переход к следующему элементу на мобильных устройствах (бесконечно)
    } else {
      const maxIndex = 2; // Ограничиваем на десктопе прокрутку максимум до 2
      nextIndex = currentIndex + 1 <= maxIndex ? currentIndex + 1 : currentIndex;
    }
    setCurrentIndex(nextIndex);
  };

  const moveToLeft = () => {
    let nextIndex;
    if (isMobile) {
      nextIndex = (currentIndex - 1 + peoples.length) % peoples.length; // Переход к предыдущему элементу на мобильных устройствах (бесконечно)
    } else {
      const minIndex = 0;
      nextIndex = currentIndex - 1 >= minIndex ? currentIndex - 1 : currentIndex;
    }
    setCurrentIndex(nextIndex);
  };


  const [showPopup, setShowPopup] = useState(null);

  const handleClosePopup = () => {
      setShowPopup(null);
  };

  return (
    <>
    {showPopup !== null && <Feedback name={showPopup.name} par={showPopup.par} work={showPopup.work} img={showPopup.img} onClose={handleClosePopup} />}
    <div className={s.container} id='feedbacks'>
      <div className={s.top}>
        <div className={s.title}>О НАС ГОВОРЯТ</div>
        <div className={s.buttons}>
          <img src="/icons/leftArrow.svg" onClick={moveToLeft} alt="Предыдущий" />
          <img src="/icons/rightArrow.svg" onClick={moveToRight} alt="Следующий" />
        </div>
      </div>
      <div className={s.peoplesWrapper}></div>
      <div className={s.light}></div>
      <div className={s.peoples}           onClick={() => {
            console.log('Clicked:');
            
          }}>
        {peoples.map((elem, index) => (
          <div
          onClick={() => {
            console.log('Clicked:', elem.name);
            setShowPopup(elem);
          }}
            key={index}
            className={`${s.block} ${index === currentIndex ? s.active : ''}`}
            style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
          >
            <div className={s.person} onClick={() => {console.log('dsadas')}}>
              <img src={elem.img} alt={elem.name} />
              <div className={s.text}>
                <div className={s.name}>{elem.name}</div>
                <p>{elem.work}</p>
                <img src="/icons/stars.svg" alt="Рейтинг" />
              </div>
            </div>
            <div className={s.par}>{elem.par}</div>
          </div>
        ))}
      </div>
      <div className={s.mobileButtons}>
          <img src="/icons/leftArrow.svg" onClick={moveToLeft} alt="Предыдущий" />
          <img src="/icons/rightArrow.svg" onClick={moveToRight} alt="Следующий" />
        </div>
    </div>
    </>
  );
}

export default Reviews;
