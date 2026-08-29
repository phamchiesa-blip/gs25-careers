import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Search, X } from 'lucide-react'
import logo from '../../assets/logo.png'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex h-[100px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
            to="/"
            className="flex shrink-0 items-center"
            aria-label="GS25 - Trang chủ"
            onClick={() => setMobileOpen(false)}
          >
          <img src={logo} alt="GS25" className="h-5 w-auto object-contain sm:h-9" />
        </Link>

        <NavDesktop />

        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="hidden items-center rounded-full border border-2 border-blue-600 bg-white w-[130px] px-7 py-2.5 text-[15px] font-bold text-orange-600 transition-colors duration-150 hover:bg-slate-50 lg:inline-flex"
          />
          <div className="hidden lg:block absolute flex item-center justify-center gap-2 left-3 top-1/2 -translate-y-1/2">
          <Search className="h-4 w-4 text-[#F58220] font-extrabold"  />
          </div>
           

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-slate-900 lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && <NavMobile onNavigate={() => setMobileOpen(false)} />}
    </header>
  )
}
