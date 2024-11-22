import React from 'react'
import s from './PortfolioWindows.module.sass'
import { useNavigate } from 'react-router-dom'

function PortfolioWindows() {

    const navigate = useNavigate()

    const projects = [
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

  return (
    <div className={s.container}>
        <div className={s.title}>ПОРТФОЛИО</div>

        <div className={s.projects}>
            {
                projects.map((elem, index) => 
                    <div className={s.project} key={index} onClick={() => navigate(`/portfolio/${elem.title}`)}>
                        <img src={elem.img} alt="img" />
                        <h2 className={s.title}>{elem.title}</h2>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default PortfolioWindows
