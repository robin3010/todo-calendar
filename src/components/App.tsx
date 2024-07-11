import Calendar from 'components/calendar/calendar'
import Footer from 'components/footer/footer'
import Header from 'components/header/header'
import { CalendarContextProvider } from 'contexts/calendar/calendarContext'
import { UserContextProvider } from 'contexts/user/userContext'
import { FC } from 'react'

const App: FC = () => {
  return (
    <div className="main-container">
      <UserContextProvider>
        <Header />
        <CalendarContextProvider>
          <Calendar />
        </CalendarContextProvider>
      </UserContextProvider>
      <Footer />
    </div>
  )
}

export default App
