import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import FriendDetail from './Components/FriendDetail/FriendDetail';
import Friends from './Components/Friends/Friends';
import Header from './Components/header/Header';
import Home from './Components/Home/Home';
import NotFount from './Components/NotFount/NotFount';
import PostDetails from './Components/PostDetails/PostDetails';
import Posts from './Components/Posts/Posts';

function App() {
  return (
    <div className="App">
<Header></Header>
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/friends' element={<Friends></Friends>}></Route>
     <Route path='/friend/:friendId' element={<FriendDetail></FriendDetail>}></Route>
  <Route path='/posts' element={<Posts></Posts>}>
<Route path=':postId' element={<PostDetails></PostDetails>}></Route>

  </Route>
  
     <Route path='/about' element={<About></About>}></Route>
     <Route path='*' element={<NotFount></NotFount>}></Route>
   </Routes>
    
    </div>
  );
}

export default App;
