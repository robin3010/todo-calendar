import Calendar from 'components/calendar/calendar'
import Footer from 'components/footer/footer'
import Header from 'components/header/header'
import { CalendarContextProvider } from 'contexts/calendar/calendarContext'
import useUser from 'contexts/user/useUser'
import { FC } from 'react'
import StartPage from './start-page/start-page'

const App: FC = () => {
  const { user } = useUser()

  return (
    <div className="main-container">
      <Header />
      {!user ? (
        <StartPage />
      ) : (
        <CalendarContextProvider>
          <Calendar />
        </CalendarContextProvider>
      )}
      <Footer />
    </div>
  )
}

export default App
