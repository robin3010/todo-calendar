import { FC } from 'react'
import './start-page.scss'

const StartPage: FC = () => {
  console.log('start page')

  return (
    <main className="start-page">
      <div className="start-page-content">
        <div className="start-page-features">
          <h4 className="start-page-features__heading">
            CalenTodo - календарь со списком задач
          </h4>

          <ul className="start-page-features-list">
            <li className="start-page-features-list__feature">
              <span>Навигация по месяцам вперед (назад),</span>
              <br />
              <span>через выбор года (месяца)</span>
            </li>
            <li className="start-page-features-list__feature">
              Возврат к текущей дате
            </li>
            <li className="start-page-features-list__feature">
              Индикация выходных и праздничных дней, наличия задач по дням
            </li>
            <li className="start-page-features-list__feature">
              Выбор пользователя для сохранения списка задач
            </li>
            <li className="start-page-features-list__feature">
              Локальное сохранение данных выбранного пользователя
            </li>
          </ul>
        </div>
        <div className="start-page-bg">
          <img
            src="./src/shared/assets/start-page-bg.png"
            alt="start-page-bg"
            className="start-page-bg__image"
          />
        </div>
      </div>
      <div className="start-page__set-user">
        Для продолжения укажите пользователя...
      </div>
    </main>
  )
}

export default StartPage
