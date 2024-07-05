import Calendar from 'components/calendar/calendar'
import Footer from 'components/footer/footer'
import Header from 'components/header/header'

const App: React.FC = () => {
  return (
    <div className="main-container">
      <Header />
      <Calendar />
      <Footer />
    </div>
  )
}

export default App
