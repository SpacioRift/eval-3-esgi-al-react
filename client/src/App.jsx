import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Emotion from '../src/Component/Emotion/emotion.jsx'
import PostList from './Page/Post/PostList.jsx'
import EditPost from './Component/Post/EditPost/EditPost.jsx';

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
          </Routes>
        </BrowserRouter> 
      </div>
    </>
  )
}

export default App
