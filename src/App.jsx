import './App.css'
import Dashboard from './components/Dashboard'
import LineGraph from './components/LineGraph'

function App() {

  return (
    <div className='flex p-5 gap-4'>
      <div className='max-w-6xl w-full rounded-2xl shadow-2xl p-4'>
        <LineGraph />
      </div>
      <Dashboard />
    </div>
  )
}

export default App
