import Calendar from 'components/calendar/calendar'
import Footer from 'components/footer/footer'
import Header from 'components/header/header'
import { CalendarContextProvider } from 'contexts/calendar/calendarContext'
import { FC } from 'react'

const App: FC = () => {
  return (
    <div className="main-container">
      <Header />
      <CalendarContextProvider>
        <Calendar />
      </CalendarContextProvider>
      <Footer />
    </div>
  )
}

export default App
