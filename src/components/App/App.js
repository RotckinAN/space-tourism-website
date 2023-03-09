import { Outlet, Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Destination from '../Destination/Destination';
import Crew from '../Crew/Crew';
import Technology from '../Technology/Technology';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import {
   crewContent,
   mainPageContent,
   notFoundPageContent,
   planets,
   technologyContent,
} from '../../utils/content';
import useCurrentWidth from '../../hooks/useCurrentWidth';

function App() {
   const swiperContainer = document.querySelector('.swiper');
   const actualWindowWidth = useCurrentWidth();
   if (swiperContainer && actualWindowWidth < 1070) {
      swiperContainer.classList.add('sliderCrew-horizontal');
   }

   function BasicLayout() {
      return (
         <>
            <Header />
            <Outlet />
         </>
      );
   }

   return (
      <div className="page">
         <Routes>
            <Route element={<BasicLayout />}>
               <Route
                  path="/"
                  element={<Main mainPageContent={mainPageContent} />}
               />
               <Route
                  path="/destination"
                  element={<Destination planets={planets} />}
               />
               <Route path="/crew" element={<Crew crew={crewContent} />} />
               <Route
                  path="/technology"
                  element={<Technology technology={technologyContent} />}
               />
            </Route>
            <Route
               path="*"
               element={<NotFound notFoundPageContent={notFoundPageContent} />}
            />
         </Routes>
      </div>
   );
}

export default App;
