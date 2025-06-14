import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Emotion from '../src/Component/Emotion/emotion.jsx'
import PostList from './Page/Post/PostList.jsx'
import EditPost from './Component/Post/EditPost/EditPost.jsx';
import Login from '../src/Component/Login/Login';
import Inscription from '../src/Component/Inscription/Inscription';
function App() {

  // rajouter id en fonction du post sélectionné
  const Id = 1; // Pour tester
  return (
    <>
      <div className=''>
        <BrowserRouter>
          <Routes>
            <Route path="/post" element={<PostList />} />
            <Route path="/edit" element={<EditPost />} />
            <Route path="/" element={<Login/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Inscription" element={<Inscription/>} />
          </Routes>
        </BrowserRouter> 
      </div>
    </>
  )
}

export default App
