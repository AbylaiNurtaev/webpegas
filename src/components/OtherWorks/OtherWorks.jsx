import React, { useEffect, useState } from 'react';
import s from './OtherWorks.module.sass'
import { useNavigate } from 'react-router-dom';

function OtherWorks() {

    const Feedback = [
      {
        title: "Многостраничник для студии 3д печати",
        img: "/images/projects/3.png"
    },
    {
        title: "Редизайн многостраничного сайта консалтинговой компании",
        img: "/images/projects/2.png"
    },
    {
        title: "инвестиции в строительство",
        img: "/images/projects/1.png"
    },
    {
        title: "Редизайн курсов для консалтинговой фирмы",
        img: "/images/projects/4.png"
    },
    {
        title: "сайт для сервиса по ПОДБОРУ стоматологов",
        img: "/images/projects/5.png"
    },
    {
        title: "Редизайн страницы курсов для консалтинговой фирмы",
        img: "/images/projects/6.png"
    },
    {
        title: "Лендинг для банкетного зала",
        img: "/images/projects/7.png"
    },
    {
        title: "Многостраничник для испытательной лаборатории",
        img: "/images/projects/8.png"
    },
    ]

    const [isMobile, setIsMobile] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate()
  
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
        name: "инвестиции в строительство",
        work: `владелец студии красоты "Элегант"`,
        par: 'Спасибо команде за прекрасный сайт! Он выглядит стильно и современно, а главное – работает без сбоев. Теперь клиенты могут легко записываться онлайн, и это значительно облегчает нашу работу. Рекомендую!',
        img: '/images/projects/1.png'
      },
      {
        name: "Редизайн курсов для консалтинговой фирмы",
        work: `директор туристического агентства "Путешествие"`,
        par: '"Мы искали компанию, которая сможет создать для нас сайт с онлайн-бронированием туров. Предложили отличное решение, которое полностью удовлетворило наши запросы. Сайт работает быстро, удобно и привлекательно. Спасибо за отличную работу!',
        img: '/images/projects/2.png'
      },
      {
        name: "Многостраничник для студии 3д печати",
        work: `предприниматель`,
        par: 'Я обратился за разработкой чат-бота для Telegram. Результат превзошел все мои ожидания! Бот работает быстро, информативно и удобно. Теперь я могу оперативно получать нужную мне информацию, не тратя время на поиск. Спасибо за профессионализм!',
        img: '/images/projects/3.png'
      },
      {
        name: "сайт для сервиса по ПОДБОРУ стоматологов",
        work: `руководитель цветочного ателье "Розовые мечты"`,
        par: 'Мы очень довольны вашей работой! Наш новый сайт выглядит прекрасно и привлекает внимание клиентов. Спасибо за креативный подход и отличное исполнение. Теперь у нас больше заказов и довольных клиентов.',
        img: '/images/projects/4.png'
      },
      {
        name: "Лендинг для банкетного зала",
        work: `руководитель дизайн-студии "Креатив"`,
        par: 'Ваша команда сделала отличную работу с нашим новым сайтом! Дизайн выглядит современно и стильно, а функционал сайта полностью соответствует нашим ожиданиям. Спасибо за профессионализм и творческий подход!',
        img: '/images/projects/5.png'
      },
      {
        name: "Многостраничник для испытательной лаборатории",
        work: `руководитель дизайн-студии "Креатив"`,
        par: 'Ваша команда сделала отличную работу с нашим новым сайтом! Дизайн выглядит современно и стильно, а функционал сайта полностью соответствует нашим ожиданиям. Спасибо за профессионализм и творческий подход!',
        img: '/images/projects/6.png'
      }
    ];
  
    // Логика прокрутки для мобильной и десктопной версии
    const moveToRight = () => {
      let nextIndex;
      if (isMobile) {
        nextIndex = (currentIndex + 1) % peoples.length; // Переход к следующему элементу на мобильных устройствах (бесконечно)
      } else {
        const maxIndex = 4; // Ограничиваем на десктопе прокрутку максимум до 2
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
          <div className={s.title}>ДРУГИЕ РАБОТЫ</div>
          <div className={s.buttons}>
            <img src="/icons/leftArrow.svg" onClick={moveToLeft} alt="Предыдущий" />
            <img src="/icons/rightArrow.svg" onClick={moveToRight} alt="Следующий" />
          </div>
        </div>
        <div className={s.peoplesWrapper}></div>
        <div className={s.light}></div>
        <div className={s.peoples} onClick={() => {
              console.log('Clicked:');
              
            }}>
          {peoples.map((elem, index) => (
            <div
              onClick={() => {navigate(`/portfolio/${elem.name}`); window.scrollTo(0, 0)}}
              key={index}
              className={`${s.block}`}
              style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
            >
              <div className={s.person} onClick={() => {console.log('dsadas')}}>
                <img src={elem.img} alt={elem.name} />
              </div>
              <div className={s.par}>{elem.name}</div>
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

export default OtherWorks
