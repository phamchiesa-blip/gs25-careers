import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import MembershipPage from './pages/membership/MembershipPage'
import PartnersPage from './pages/partners/PartnersPage'
import AboutPage from './pages/infor/AboutPage'
import ContactPage from './pages/infor/ContactPage'
import NewsPage from './pages/infor/NewsPage'
import YouusPage from './pages/brands/YouusPage'
import MoomoossiPage from './pages/brands/MoomoossiPage'

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
      </Route>
    </Routes>
  )
}
