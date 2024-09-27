
import './App.css'
import Basic from './formik/Basic'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  
return(
 <Router>
  <Routes>
    <Route path='/' element={<Basic/>}/>
  </Routes>
 </Router>
)
}

export default App
