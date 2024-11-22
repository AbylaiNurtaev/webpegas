import { HelmetProvider, Helmet } from 'react-helmet-async';
import MainPage from "./pages/MainPage/MainPage";
import { Routes, Route } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import PortfolioWrapper from './pages/PortfolioWrapper/PortfolioWrapper';

function App() {
    return (
        <HelmetProvider>
            <div className="App">
                <Helmet>
                <link rel="shortcut icon" href="/path-to-your-favicon/favicon.ico" />
                    <title>WebPegas</title>
                    <meta name="description" content="WebPegas предлагает профессиональные услуги по разработке сайтов, созданию ботов и SEO-продвижению. Наши решения помогают вашему бизнесу расти и развиваться в онлайн-среде. Доверьтесь опыту и экспертизе WebPegas!" />
                    <meta name="keywords" content="создание сайтов, разработка веб-сайтов, создание ботов, оптимизация сайтов, UX/UI дизайн, SEO-оптимизация, веб-дизайн, адаптивный дизайн, создание лендингов, разработка интернет-магазинов, продвижение сайтов, настройка аналитики, поддержка сайтов, веб-разработка, frontend-разработка, backend-разработка, заказ сайта, заказ бота, разработка под ключ" />
                </Helmet>
                <Routes>

                    <Route element={<MainPage/>} path='/' index></Route>
                    <Route element={<PortfolioWrapper/>} path='/portfolio'></Route>
                    <Route element={<PortfolioPage/>} path='/portfolio/:title'></Route>
                
                </Routes>

            </div>
        </HelmetProvider>
    );
}

export default App;
