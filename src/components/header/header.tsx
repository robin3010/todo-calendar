import { FC } from 'react'
import './header.scss'
import HeaderUserSelect from './header-user-select/header-user-select'

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__app-title">CalenToDo</div>
      <HeaderUserSelect />
    </header>
  )
}

export default Header
