import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import MembershipPage from './pages/membership/MembershipPage'
import PartnersPage from './pages/partners/PartnersPage'
import AboutPage from './pages/infor/AboutPage'
import ContactPage from './pages/infor/ContactPage'
import NewsPage from './pages/infor/NewsPage'
import YouusPage from './pages/brands/YouusPage'
import MoomoossiPage from './pages/brands/MoomoossiPage'
import FoodPage from './pages/products/FoodPage'
import DrinkPage from './pages/products/DrinkPage'
import DailyPage from './pages/products/DailyPage'
import CafePage from './pages/products/CafePage'

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="*" element={null} />
        <Route path="/thanh-vien" element={<MembershipPage />} />
        <Route path="/doi-tac" element={<PartnersPage />} />
        <Route path="/ve-gs25" element={<AboutPage />} />
        <Route path="/lien-he" element={<ContactPage />} />
        <Route path="/tin-tuc" element={<NewsPage />} />
        <Route path="/hang-doc-quyen/youus" element={<YouusPage />} />
        <Route path="/hang-doc-quyen/moomoossi" element={<MoomoossiPage />} />
        <Route path="/san-pham/do-an" element={<FoodPage />} />
        <Route path="/san-pham/nuoc-uong" element={<DrinkPage />}/>
        <Route path='/san-pham/hang-tieu-dung' element={<DailyPage />}/>
        <Route path='/san-pham/cafe-gs25' element={<CafePage />} />
      </Route>
    </Routes>
  )
}
