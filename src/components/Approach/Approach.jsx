import React from 'react'
import s from './Approach.module.sass'
import { useEffect } from 'react';

function Approach() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
}, []);
  return (
    <div className={s.container} id="aboutus">
        <div className={s.titleMobile}>Преимущества и подход</div>

        <div className={s.parMobile}  id="aboutus">Мы работаем в сфере разработки сайтов и ботов уже более 5 лет. Наша команда состоит из опытных специалистов, которые любят свое дело и стремятся к совершенству.</div>
      <div className={s.columns}>
        <div className={s.leftColumn}>
          <div className={s.titleText}>Преимущества и подход</div>
          <div className={s.parText}>Мы работаем в сфере разработки сайтов и ботов уже более 5 лет. Наша команда состоит из опытных специалистов, которые любят свое дело и стремятся к совершенству.</div>
          <div className={s.block_1}>
            <img src="/icons/approachIcon1.svg" alt="" />
            <div className={s.title}>Персонализированный подход: Ваш успех - наша цель!</div>
            <div className={s.par}>Мы не предлагаем шаблонные решения. Каждый проект уникален, и мы уделяем время для понимания ваших бизнес-целей, целевой аудитории и конкурентной среды. Наша команда экспертов проведет глубокий анализ, чтобы предложить индивидуальные решения, которые помогут вам выделиться и добиться успеха.</div>
          </div>
          <div className={s.block_2}>
            <img src="/icons/approachIcon2.svg" alt="" />
            <div className={s.title}>Технологии будущего: Боты и AI на службе вашего бизнеса!</div>
            <div className={s.par}>Мы используем передовые технологии, включая искусственный интеллект и машинное обучение, чтобы создавать интеллектуальные боты, автоматизировать рутинные задачи и повысить конверсию вашего сайта. Наши решения помогут вам экономить время и ресурсы, а также обеспечат превосходный пользовательский опыт.</div>
          </div>
        </div>
        
        <div className={s.rigthColumn}>
          <div className={s.block_1}>
              <img src="/icons/approachIcon2.svg" alt="" />
              <div className={s.title}>Технологии будущего: Боты и AI на службе вашего бизнеса!</div>
              <div className={s.par}>Мы используем передовые технологии, включая искусственный интеллект и машинное обучение, чтобы создавать интеллектуальные боты, автоматизировать рутинные задачи и повысить конверсию вашего сайта. Наши решения помогут вам экономить время и ресурсы, а также обеспечат превосходный пользовательский опыт.</div>
            </div>
          <div className={s.block_2}>
              <img src="/icons/approachIcon2.svg" alt="" />
              <div className={s.title}>Технологии будущего: Боты и AI на службе вашего бизнеса!</div>
              <div className={s.par}>Мы используем передовые технологии, включая искусственный интеллект и машинное обучение, чтобы создавать интеллектуальные боты, автоматизировать рутинные задачи и повысить конверсию вашего сайта. Наши решения помогут вам экономить время и ресурсы, а также обеспечат превосходный пользовательский опыт.</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Approach
