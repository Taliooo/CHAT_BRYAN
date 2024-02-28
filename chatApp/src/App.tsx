import './App.css'
import SidebarContainer from './components/sidebar'

function App() {
  return (
    <>
    <div className="flex">
      <SidebarContainer />
      <div className="flex-1">
        <h1>Hello</h1>
      </div>
    </div>
    </>
  )
}

export default App
