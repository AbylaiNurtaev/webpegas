import React from 'react'
import s from './Blocks.module.sass'

function Blocks() {

    const blocksInfo = [
        {
            id: 1,
            title: 'Гибкие Решения', 
            par: `"Создаем и продвигаем сайты, разрабатываем ботов и цифровые инструменты под ваши задачи."`,
        },
        {
            id: 2,
            title: 'Чемпионы<br>адаптации', 
            par: `Доверьтесь опыту и получите цифровые решения, которые помогут вашему бизнесу взлететь.`,
        },
        {
            id: 3,
            title: 'Креативность<br>в бизнесе', 
            par: `Создаём сайты, боты и другие цифровые продукты, которые помогут вам привлечь клиентов и увеличить продажи.`,
        },
        {
            id: 4,
            title: 'Эффективные<br>отношения', 
            par: `Мы строим долгосрочные партнерские отношения с клиентами, основанные на доверии и результате.`,
        },
    ]

  return (
    <div className={s.container}>
        {
            blocksInfo.map((block, idx) => 
            <div className={s.block} key={idx}>
                <div className={s.title} dangerouslySetInnerHTML={ {__html: block.title}}></div>
                <div className={s.par}>{block.par}</div>
            </div>
            )
        }
    </div>
  )
}

export default Blocks
