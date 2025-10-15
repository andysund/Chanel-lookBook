
import './App.css'
import LookBook from './components/LookBook'
import Background from './components/Background'
import HeaderChanel from './components/HeaderChanel'
import DownFlow from './components/DownFlow'
function App() {


  return (
    <>
      <div className="app">
      <HeaderChanel/>
      <Background/>
      <LookBook/>
      <DownFlow/>
      </div>

    </>
  )
}

export default App
