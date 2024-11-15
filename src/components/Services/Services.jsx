import React, { useEffect, useState } from 'react';
import s from './Services.module.sass';
import Popup from '../Popup/Popup';


function Services() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [showPopup, setShowPopup] = useState(null);

    const blocks = [
        {
            title: "Создание ботов",
            img: "/images/service_1.svg",
            hoverImg: "/whiteIcons/1.svg"
        },
        {
            title: "Создание дизайна",
            img: "/images/service_2.svg",
            hoverImg: "/whiteIcons/2.svg"
        },
        {
            title: "Создание сайтов",
            img: "/images/service_3.svg",
            hoverImg: "/whiteIcons/3.svg"
        },
        {
            title: "Оптимизация сайтов",
            img: "/images/service_4.svg",
            hoverImg: "/whiteIcons/4.svg"
        },
    ];

    const handleClosePopup = () => {
        setShowPopup(null);
        document.body.style.overflow = 'scroll';
    };
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Ширина экрана 768px или меньше считается мобильным устройством
        };

        checkIfMobile(); // Проверяем при монтировании компонента
        window.addEventListener('resize', checkIfMobile); // Обновляем при изменении размера окна

        return () => {
            window.removeEventListener('resize', checkIfMobile); // Убираем обработчик при размонтировании
        };
    }, []);

    return (
        <>
            {showPopup !== null && <Popup type={showPopup} onClose={handleClosePopup} />}
            
            <div className={s.container} id='services'>
                <div className={s.titleMob}>Широкий спектр услуг</div>
                <div className={s.parMob}>Мы поможем вам воспользоваться всей силой этих инструментов для достижения ваших целей.</div>
                <div className={s.blocks}>
                    <div className={s.firstBlock}>
                        <div className={s.title}>Широкий спектр услуг</div>
                        <div className={s.par}>Мы поможем вам воспользоваться всей силой этих инструментов для достижения ваших целей.</div>
                    </div>
                    
                    {blocks.map((block, idx) => (
                        <div
                            className={s.block}
                            key={idx}
                            onMouseEnter={!isMobile ? () => setHoveredIndex(idx) : null}
                            onMouseLeave={!isMobile ? () => setHoveredIndex(null) : null}
                            
                            onClick={() => setShowPopup(block.title)}
                        >
                            <img
                                src={hoveredIndex === idx ? block.hoverImg : block.img}
                                alt="service"
                            />
                            <div className={s.title}>{block.title}</div>
                        </div>
                    ))}

                    <div className={s.lastBlock}>
                        <img src="/icons/diagram.svg" alt="Diagram" />
                        <div className={s.text}>
                            <div className={s.titleText}>75%</div>
                            <div className={s.parText}>проектов охватывают различные отрасли бизнеса клиентов.</div>
                        </div>
                        <div className={s.title}>75%</div>
                        <div className={s.par}>проектов охватывают различные отрасли бизнеса клиентов.</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
