import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Friends from './Components/Friends/Friends';
import Header from './Components/header/Header';
import Home from './Components/Home/Home';
import NotFount from './Components/NotFount/NotFount';

function App() {
  return (
    <div className="App">
<Header></Header>
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/friends' element={<Friends></Friends>}></Route>
     <Route path='/about' element={<About></About>}></Route>
     <Route path='*' element={<NotFount></NotFount>}></Route>
   </Routes>
    
    </div>
  );
}

export default App;
