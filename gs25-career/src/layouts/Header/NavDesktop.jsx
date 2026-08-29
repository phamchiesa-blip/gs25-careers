import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { NAV_ITEMS, isNavActive } from '../../data/nav'
import MegaMenu from './MegaMenu'

export default function NavDesktop() {
  const { pathname } = useLocation()
  const [openId, setOpenId] = useState(null)

  return (
    <nav className="hidden h-full flex-1 items-center justify-center lg:flex" aria-label="Main">
      <ul className="flex h-full items-center gap-8 xl:gap-12">
        {NAV_ITEMS.map((item) => {
          const hasChildren = Boolean(item.children?.length)
          const isOpen = openId === item.id
          const active = isNavActive(item, pathname)

          const className = [
            'inline-flex h-full items-center text-xl font-bold tracking-tight transition-colors duration-150',
            active ? 'text-[#006FBA]' : 'text-slate-900 hover:text-[#006FBA]',
          ].join(' ')

          return (
            <li
              key={item.id}
              className="relative flex h-full items-center"
              onMouseEnter={() => hasChildren && setOpenId(item.id)}
              onMouseLeave={() => hasChildren && setOpenId(null)}
            >
              {item.path ? (
                <NavLink to={item.path} className={className}>
                  {item.label}
                </NavLink>
              ) : (
                <button
                  type="button"
                  className={className}
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenId((current) => (current === item.id ? null : item.id))
                  }
                >
                  {item.label}
                </button>
              )}

              {hasChildren && isOpen && (
                <MegaMenu items={item.children} onNavigate={() => setOpenId(null)} />
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
