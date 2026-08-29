import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { NAV_ITEMS, isNavActive } from '../../data/nav'

export default function NavMobile({ onNavigate }) {
  const { pathname } = useLocation()
  const [openId, setOpenId] = useState(null)

  return (
    <nav className="border-t border-slate-100 bg-white lg:hidden" aria-label="Mobile">
      <ul className="flex flex-col px-4 py-3">
        {NAV_ITEMS.map((item) => {
          const hasChildren = Boolean(item.children?.length)
          const isOpen = openId === item.id
          const active = isNavActive(item, pathname)
          const itemClass = [
            'flex flex-1 items-center py-3 text-base font-bold transition-colors duration-150',
            active ? 'text-[#006FBA]' : 'text-slate-900',
          ].join(' ')

          return (
            <li key={item.id} className="border-b border-slate-100 last:border-b-0">
              <div className="flex items-center">
                {item.path ? (
                  <NavLink to={item.path} className={itemClass} onClick={onNavigate}>
                    {item.label}
                  </NavLink>
                ) : (
                  <button
                    type="button"
                    className={`${itemClass} text-left`}
                    onClick={() =>
                      setOpenId((current) => (current === item.id ? null : item.id))
                    }
                  >
                    {item.label}
                  </button>
                )}

                {hasChildren && (
                  <button
                    type="button"
                    className="p-3 text-slate-500"
                    aria-expanded={isOpen}
                    aria-label={isOpen ? `Thu gọn ${item.label}` : `Mở ${item.label}`}
                    onClick={() =>
                      setOpenId((current) => (current === item.id ? null : item.id))
                    }
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                )}
              </div>

              {hasChildren && (
                <ul
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? 'max-h-80 pb-2' : 'max-h-0'
                  }`}
                >
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <NavLink
                        to={child.path}
                        onClick={onNavigate}
                        className={({ isActive }) =>
                          [
                            'block py-2 pl-4 text-sm font-medium transition-colors duration-150',
                            isActive
                              ? 'text-[#006FBA]'
                              : 'text-slate-600 hover:text-[#006FBA]',
                          ].join(' ')
                        }
                      >
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
