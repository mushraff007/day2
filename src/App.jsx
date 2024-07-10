
import './App.css'
import View from './componats/View'
import New from './componats/New'
import Add from './componats/Add'


import{Route,Routes} from 'react-router-dom'

function App() {

  return(

    <>
    <div className="app">
      
    
      <h1 id="id1">WELCOME  </h1>
      <View/>
    <Routes>
      <Route path='/'element={<New/>}> </Route>
      <Route path='/add'element={<Add/>}> </Route>
    </Routes>
    </div>
    

      
    </>
    )
}

export default App
