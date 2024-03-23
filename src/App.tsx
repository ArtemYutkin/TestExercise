
import './App.css'
import { CardsRow } from './components/CardsRow/CardsRow'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { SearchBar } from './components/SearchBar/SearchBar'

function App() {

  return (
    <>
      <Header />
      <main>
        <h1>Биржа вакансий и резюме</h1>
        <SearchBar />
        <CardsRow />
      </main>
      <Footer />
    </>
  )
}

export default App
