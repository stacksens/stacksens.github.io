import { NavLink } from 'react-router-dom'

const Navigation = ({ isOpen, setIsOpen }) => {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/industries', label: 'Industries' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  const baseClasses = "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
  const activeClasses = "text-primary-600 bg-primary-50"
  const inactiveClasses = "text-gray-700 hover:text-primary-600 hover:bg-gray-50"

  return (
    <nav className={isOpen ? "block" : "hidden md:block"}>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 md:flex md:space-x-4 md:space-y-0">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Navigation

