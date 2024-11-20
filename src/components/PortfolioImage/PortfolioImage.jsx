import React from 'react'
import s from './PortfolioImage.module.sass'
import { useParams } from 'react-router-dom'

function PortfolioImage() {

    const { title } = useParams()
    
    

    const projects = [
        {
            title: "инвестиции в строительство",
            img: "/images/projects/1.png"
        },
        {
            title: "Курс по криптовалюте",
            img: "/images/projects/2.png"
        },
        {
            title: "Многостраничник для студии 3д печати",
            img: "/images/projects/3.png"
        },
        {
            title: "Страница курсов",
            img: "/images/projects/4.png"
        },
        {
            title: "Лендинг для сервиса по выбору стоматологов",
            img: "/images/projects/5.png"
        },
        {
            title: "Многостраничник  для испытательной лаборатории",
            img: "/images/projects/6.png"
        },
    ]



  return (
    <div className={s.container}>
      <h1 className={s.title}>{title}</h1>
    </div>
  )
}

export default PortfolioImage
