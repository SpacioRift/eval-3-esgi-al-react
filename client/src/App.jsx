import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Emotion from '../src/Component/Emotion/emotion.jsx'
import PostList from './Page/Post/PostList.jsx'
<<<<<<< HEAD
import EditPost from './Component/Post/EditPost/EditPost.jsx';
=======
import Login from '../src/Component/Login/Login';
import Inscription from '../src/Component/Inscription/Inscription';
>>>>>>> aea442fa55e11e6b812ed051744663ae7d46a287

function App() {

  // rajouter id en fonction du post sélectionné
  const Id = 1; // Pour tester
  return (
    <>
      <div className=''>
        <BrowserRouter>
          <Routes>
            <Route path="/post" element={<PostList />} />
<<<<<<< HEAD
            <Route path="/edit" element={<EditPost />} />
=======
            <Route path="/" element={<Login/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Inscription" element={<Inscription/>} />
>>>>>>> aea442fa55e11e6b812ed051744663ae7d46a287
          </Routes>
        </BrowserRouter> 
      </div>
    </>
  )
}

export default App
