import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import MembershipPage from './pages/membership/MembershipPage'
import PartnersPage from './pages/partners/PartnersPage'

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="*" element={null} />
        <Route path="/thanh-vien" element={<MembershipPage />} />
        <Route path="/doi-tac" element={<PartnersPage />} />
      </Route>
    </Routes>
  )
}
