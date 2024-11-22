import React, { useEffect } from 'react'
import s from './IndividualPortfolioPage.module.sass'

function IndividualPortfolioPage() {
    
  return (
    <div className={s.container}>
      <div className={s.topText}>
        <div className={s.block1}>
            <div className={s.title}>О компании</div>
            <div className={s.par}>Учебный центр North Group насчитывает более 700 актуальных программ. Повышение квалификации и переподготовка медицинских работников. Профессиональное обучение по различным профессиям. Имеет лицинзированый учебный центр.</div>
        </div>
        <div className={s.block2}>
            <div className={s.title}>Цели и задачи</div>
            <div className={s.par}>
• Редизайн, новый дизайн должен быть более современным и соответствовать последним тенденциям в дизайне.<br/>
• Улучшение мобильной версии.<br/>
• Повышение удержания и конверсий.</div>
        </div>
      </div>

      <div className={s.images} style={{ marginTop: '40px' }}>
        <img src="/projects/8_1.jpg" alt="" />
      </div>

    <div className={s.title2}>
    Выполнено
    </div>

    <div className={s.par2}>
    • Анализ Я.Метрик - оценка тепловых карт и кликов пользователей, а также статистики посещаемости, удержания на сайте и конверсии. <br/><br/>
• Глубокий анализ рынка - прямых конкурентов и лидеров EdTech сегмента в части продуктов, направлений, сайтов, UX/UI, стоимости и т.д.<br/><br/>
• Создание структуры страницы на основе полученных данных.<br/><br/>
• Разработка wireframe под данную структуру.<br/><br/>
• Найм копирайтера для написания текстов.<br/><br/>
• Разработан детальный прототип.<br/><br/>
• Дизайн макет. Десктопная и мобильные версии.<br/><br/>
• Разработка.<br/><br/>
• Проверка.
    </div>

    <div className={s.title2}>
    Анализ Я.Метрик
    </div>

    <div className={s.metrics}>
        {
            [...Array(7)].map((elem, index) => <img src={`/metrics/${index+1}.png`} />)
        }
    </div>

    <img src="/metrics/8.png" alt="" className={s.metricImage} />

    <div className={s.analyze}>
        <div className={s.title}>Анализ конкурентов</div>
        <p>После глубокого анализа собрали основные патернны.</p>
        <img className={s.image1} src="/metrics/9.png" alt="" />
        <img className={s.image2} src="/metrics/10.png" alt="" />
    </div>

    <div className={s.project}>
        <div className={s.top}>
            <div className={s.title}>Проектирование</div>
            <div className={s.par}>
            На основе полученных данных составили структуру и спроектировали wireframe под данную структуру. После написания текста спроектировали детальный прототип, под написанные текста.
            </div>

            <div className={s.images}>
                <div className={s.block}>
                    <div className={s.text}>Wireframe</div>
                    <img src="/images/Wireframe.png" alt="" />
                </div> 
                <div className={s.block}>
                    <div className={s.text}>Prototype</div>
                    <img src="/images/Prototype.png" alt="" />
                </div>
            </div>
        </div>
    </div>

    <div className={s.design}>
        <div className={s.title}>Дизайн макет</div>
        <img src="/images/image.png" alt="" />
    </div>

    </div>
  )
}

export default IndividualPortfolioPage
