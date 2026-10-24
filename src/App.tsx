import { useState, type FormEvent } from 'react'
import './App.css'

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim() ?? ''
const currentYear = new Date().getFullYear()

const services = [
  {
    number: '01',
    title: 'Сайты и веб-продукты',
    copy: 'Сайты, которые объясняют ценность бизнеса. Веб-приложения, в которых удобно работать.',
    tags: ['React', 'TypeScript', 'FastAPI'],
  },
  {
    number: '02',
    title: 'Автоматизация процессов',
    copy: 'Telegram-боты, интеграции и внутренние инструменты для повторяющихся задач.',
    tags: ['Telegram', 'API', 'Автоматизация'],
  },
  {
    number: '03',
    title: 'ИИ для конкретных задач',
    copy: 'Агенты и помощники, встроенные в понятный сценарий с контролем качества и затрат.',
    tags: ['ИИ-агенты', 'База знаний', 'Контроль'],
  },
]

const process = [
  ['01', 'Разбираемся', 'Уточняем задачу, пользователей и критерии готовности.'],
  ['02', 'Проектируем', 'Описываем сценарии, структуру и технический план.'],
  ['03', 'Собираем', 'Разрабатываем небольшими этапами и показываем результат.'],
  ['04', 'Проверяем', 'Проходим ключевые сценарии, исправляем и готовим к запуску.'],
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
      <path d="M3.5 10h12m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formMessage, setFormMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '').trim()
    const email = String(form.get('email') ?? '').trim()
    const brief = String(form.get('brief') ?? '').trim()

    if (!contactEmail) {
      setFormMessage('Форма не отправлена: адрес студии ещё не настроен. Данные остались в этом браузере.')
      return
    }

    const subject = encodeURIComponent(`Новый проект — ${name}`)
    const body = encodeURIComponent(`Имя: ${name}\nОтветный адрес: ${email}\n\nО задаче:\n${brief}`)
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
    setFormMessage('Открываем почтовую программу с подготовленным письмом.')
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <a className="skip-link" href="#main">К основному содержанию</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Студия — на главную">
          <span className="wordmark-mark" aria-hidden="true">S<span>/</span></span>
          <span className="wordmark-name">СТУДИЯ<br /><small>РАЗРАБОТКИ</small></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? 'ЗАКРЫТЬ' : 'МЕНЮ'}</span>
          <span className={`menu-lines${menuOpen ? ' is-open' : ''}`} aria-hidden="true"><i /><i /></span>
        </button>

        <nav id="primary-navigation" className={`site-nav${menuOpen ? ' is-open' : ''}`} aria-label="Основная навигация">
          <a href="#services" onClick={closeMenu}>Что делаем</a>
          <a href="#work" onClick={closeMenu}>Работы</a>
          <a href="#approach" onClick={closeMenu}>Подход</a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>Обсудить проект <ArrowIcon /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero section-dark" id="top" aria-labelledby="hero-title">
          <div className="hero-topline eyebrow"><span>ЦИФРОВАЯ СТУДИЯ</span><span>ВЕБ / СИСТЕМЫ / ИНТЕГРАЦИИ <i className="status-dot" /></span></div>
          <div className="hero-grid">
            <div className="hero-main">
              <p className="hero-kicker"><span className="index">[ 01—04 ]</span> САЙТЫ / СИСТЕМЫ / АВТОМАТИЗАЦИЯ</p>
              <h1 id="hero-title">ДЕЛАЕМ<br />ЦИФРОВОЕ<br /><span>РАБОЧИМ.</span></h1>
              <div className="hero-bottom">
                <p className="hero-intro">Разрабатываем сайты, веб-приложения, Telegram-боты и ИИ-инструменты под задачи бизнеса.</p>
                <a className="button button-accent" href="#contact">Расскажите о задаче <ArrowIcon /></a>
              </div>
            </div>
            <aside className="hero-aside" aria-label="Этапы создания цифрового продукта">
              <div className="orbit-diagram" aria-hidden="true">
                <div className="orbit-ring orbit-ring-one" />
                <div className="orbit-ring orbit-ring-two" />
                <div className="orbit-core"><span>ИДЕЯ</span><span>→</span><span>ПРОДУКТ</span></div>
                <span className="orbit-node node-one">01 / ЗАДАЧА</span>
                <span className="orbit-node node-two">02 / СЦЕНАРИЙ</span>
                <span className="orbit-node node-three">03 / РЕЗУЛЬТАТ</span>
                <span className="orbit-cross cross-one">+</span>
                <span className="orbit-cross cross-two">+</span>
              </div>
              <p className="hero-aside-note"><span>ПОЛНЫЙ ЦИКЛ</span><br />от первого вопроса<br />до проверенного релиза</p>
            </aside>
          </div>
          <a className="hero-scroll eyebrow" href="#services"><span>ЛИСТАЙТЕ ДАЛЬШЕ</span><span className="scroll-line" aria-hidden="true" /></a>
        </section>

        <section className="services section-light" id="services" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow section-index"><span>02</span> / НАПРАВЛЕНИЯ</p>
            <h2 id="services-title">ОДНА КОМАНДА.<br /><span>РАЗНЫЕ ИНСТРУМЕНТЫ.</span></h2>
            <p className="section-lead">Выбираем решение под процесс — от небольшого сайта до внутренней системы.</p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <ul className="tag-list" aria-label="Технологии и форматы">
                    {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
                <span className="service-arrow" aria-hidden="true"><ArrowIcon /></span>
              </article>
            ))}
          </div>
          <div className="services-footnote"><span className="accent-square" /> ТЕХНОЛОГИИ — СРЕДСТВО. ВАЖНО, ЧТО МЕНЯЕТСЯ В РАБОТЕ.</div>
        </section>

        <section className="portfolio section-dark" id="work" aria-labelledby="work-title">
          <div className="portfolio-heading">
            <p className="eyebrow section-index"><span>03</span> / ИЗБРАННАЯ РАБОТА</p>
            <div className="portfolio-title-row">
              <h2 id="work-title">РАБОТА<br /><span>ГОВОРИТ.</span></h2>
              <p>Показываем то, что действительно сделали. Пока здесь — собственный сайт студии.</p>
            </div>
          </div>
          <article className="project-feature">
            <a className="project-artwork" href="#top" aria-label="Посмотреть сайт-визитку студии">
              <img src="/studio-site-preview.svg" alt="Визуализация первого экрана собственного сайта студии: «Делаем цифровое рабочим»" />
              <span className="project-open"><span>СОБСТВЕННЫЙ ПРОЕКТ</span><ArrowIcon /></span>
            </a>
            <div className="project-caption">
              <div className="project-name">
                <span className="eyebrow project-index">01 / САЙТ СТУДИИ</span>
                <h3>Сайт-визитка студии</h3>
              </div>
              <p>Сайт для презентации услуг, рабочего процесса и способа связаться со студией.</p>
              <ul className="project-tags" aria-label="Технологии проекта">
                <li>React</li><li>TypeScript</li><li>Vite</li>
              </ul>
              <a className="project-link" href="#top">Перейти к сайту <ArrowIcon /></a>
            </div>
          </article>
          <p className="portfolio-note"><span className="accent-square" /> КЛИЕНТСКИЕ ПРОЕКТЫ ДОБАВИМ, КОГДА БУДУТ ПОДТВЕРЖДЁННЫЕ МАТЕРИАЛЫ.</p>
        </section>

        <section className="statement section-dark" aria-label="Принцип работы">
          <p className="eyebrow section-index"><span>04</span> / ПРИНЦИП</p>
          <p className="statement-text">НЕ ПРОСТО<br />СОБИРАЕМ <span>ЭКРАНЫ.</span><br />РЕШАЕМ <span>ЗАДАЧУ.</span></p>
          <div className="statement-bottom"><span className="statement-mark" aria-hidden="true">↳</span><p>Сначала контекст и сценарий.<br />Потом — подходящий инструмент.</p></div>
        </section>

        <section className="approach section-accent" id="approach" aria-labelledby="approach-title">
          <div className="approach-intro">
            <p className="eyebrow section-index"><span>05</span> / ПРОЦЕСС</p>
            <h2 id="approach-title">ЯСНЫЕ<br />ЭТАПЫ.<br /><span>ПОНЯТНЫЙ<br />РЕЗУЛЬТАТ.</span></h2>
            <p>Небольшие итерации, проверяемые договорённости и демонстрация работы на каждом важном шаге.</p>
          </div>
          <ol className="process-list">
            {process.map(([number, title, copy]) => (
              <li className="process-item" key={number}>
                <span className="process-number">{number}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
                <span className="process-plus" aria-hidden="true">↗</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="contact section-light" id="contact" aria-labelledby="contact-title">
          <div className="contact-heading">
            <p className="eyebrow section-index"><span>06</span> / СЛЕДУЮЩИЙ ШАГ</p>
            <h2 id="contact-title">ЕСТЬ<br />ЗАДАЧА<span>?</span></h2>
            <p>Расскажите, что нужно изменить или создать. Разберёмся, с чего лучше начать.</p>
            <div className="contact-note"><span className="accent-square" /> СНАЧАЛА КОНТЕКСТ. ПОТОМ ПЛАН РАБОТ.</div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Как к вам обращаться</label>
            <input id="name" name="name" autoComplete="name" required placeholder="Имя" />
            <label htmlFor="email">Куда ответить</label>
            <input id="email" name="email" type="email" autoComplete="email" required placeholder="name@company.ru" />
            <label htmlFor="brief">Коротко о задаче</label>
            <textarea id="brief" name="brief" rows={3} required placeholder="Что хотите запустить или улучшить?" />
            <button className="button button-dark" type="submit">Подготовить письмо <ArrowIcon /></button>
            <p className="form-caption">Форма не передаёт данные серверу. При настроенном адресе откроется ваша почтовая программа.</p>
            <p className="form-message" role="status" aria-live="polite">{formMessage}</p>
          </form>
        </section>
      </main>

      <footer className="site-footer section-dark">
        <a className="wordmark footer-wordmark" href="#top" aria-label="Студия — наверх">
          <span className="wordmark-mark" aria-hidden="true">S<span>/</span></span>
          <span className="wordmark-name">СТУДИЯ<br /><small>РАЗРАБОТКИ</small></span>
        </a>
        <p className="footer-meta">САЙТ-ВИЗИТКА · <span>{currentYear}</span></p>
        <a className="back-top eyebrow" href="#top">НАВЕРХ ↑</a>
      </footer>
    </>
  )
}

export default App
