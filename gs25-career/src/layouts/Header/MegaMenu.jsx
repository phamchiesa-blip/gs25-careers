import { NavLink } from 'react-router-dom'

export default function MegaMenu({ items, onNavigate }) {
  if (!items?.length) return null

  return (
    <div className="absolute left-1/2 top-[70%] z-50 min-w-[220px] -translate-x-1/2 pt-1">
      <ul className="overflow-hidden rounded-xl border border-slate-100 bg-white py-2 shadow-lg">
        {items.map((child) => (
          <li key={child.id}>
            <NavLink
              to={child.path}
              onClick={onNavigate}
              className={({ isActive }) =>
                [
                  'block px-5 py-2.5 text-xl font-bold transition-colors duration-150',
                  isActive
                    ? 'bg-slate-50 text-[#006FBA]'
                    : 'text-slate-800 hover:bg-slate-50 hover:text-[#006FBA]',
                ].join(' ')
              }
            >
              {child.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
