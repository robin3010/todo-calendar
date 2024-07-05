import './header.scss'

const Header = () => {
  return (
    <header className="header">
      <h3 className="header__app-title">To-do list calendar</h3>
      <div className="header__user-select">
        <span className="header__user-select-title">User select</span>
        <input className="header__user-select-input" />
        <button className="header__user-select-btn" type="button">
          Select
        </button>
      </div>
    </header>
  )
}

export default Header
