import React from 'react'
import s from './PortfolioImage.module.sass'
import { useParams } from 'react-router-dom'
import IndividualPortfolioPage from '../IndividualPortfolioPage/IndividualPortfolioPage'
function PortfolioImage() {

    const { title } = useParams()
    
    

    const projects = [
        {
            title: "инвестиции в строительство",
            img: ["/projects/1.jpg"]
        },
        {
            title: "Редизайн курсов для консалтинговой фирмы",
            img: ["/projects/2_1.jpg", "/projects/2_2.png", "/projects/2_3.png", "/projects/2_5.png", "/projects/2_4.png", "/projects/2_6.png"]
        },
        {
            title: "Редизайн многостраничного сайта консалтинговой компании",
            img: ["/projects/3_1.png", "/projects/3_2.png", "/projects/3_3.png", "/projects/3_4.png", "/projects/3_5.png", "/projects/3_6.png", "/projects/3_7.png", "/projects/3_8.png", "/projects/3_9.png", "/projects/3_10.png", "/projects/3_11.png", "/projects/3_12.png", "/projects/3_13.png", "/projects/3_14.png"]
        },
        {
            title: "Многостраничный сайт для испытательной лаборатории",
            img: ["/projects/4.png"]
        },
        {
            title: "Лендинг для банкетного зала",
            img: ["/projects/5.png"]
        },
        
        {
            title: "сайт для сервиса по ПОДБОРУ стоматологов",
            img: ["/projects/6.png"]
        },
        {
            title: "Многостраничник для студии 3д печати",
            img: ["/projects/7.png", "/projects/7_1.png", "/projects/7_2.png", "/projects/7_3.png", "/projects/7_4.png", "/projects/7_5.png", "/projects/7_6.png", "/projects/7_7.png", "/projects/7_8.png", "/projects/7_9.png", "/projects/7_10.png",  "/projects/7_11.png", "/projects/7_12.png", "/projects/7_13.png"]
        },
        {
            title: "Многостраничник для испытательной лаборатории",
            img: ["/projects/8_1.jpg", "/projects/8_2.png", "/projects/8_3.png", "/projects/8_4.png", "/projects/8_5.png", "/projects/8_6.png", "/projects/8_7.png"]
        },
        
        
    ]

    const project =  projects.find(elem => elem.title.toLowerCase() == title.toLowerCase())
    console.log(project, title);
    


  return (
    <div className={s.container}>
      <h1 className={s.title}>{title}</h1>
      {
        title != 'Многостраничник для испытательной лаборатории' ?
        <div className={s.images}>
            {
                title && 
                project.img.map(elem => 
                    <img src={elem} alt="" />

                )
            }
        </div>
        :
        <IndividualPortfolioPage/>
      }

    </div>
  )
}

export default PortfolioImage
