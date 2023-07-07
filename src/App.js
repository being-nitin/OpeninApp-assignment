import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Error from './components/Error';
import Navbar from './components/Navbar';
import { Routes,Route,Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Signin/>}/>
    <Route path='/register' element={<Signup/>}/>
    <Route path='/navbar' element={<Navbar/>}/>
    <Route path='/*' element={<Error/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </div>
  );
}

export default App;
