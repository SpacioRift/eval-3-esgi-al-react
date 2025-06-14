import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Emotion from '../src/Component/Emotion/emotion.jsx'
import PostList from './Page/Post/PostList.jsx'

function App() {

  // rajouter id en fonction du post sélectionné
  const Id = 1; // Pour tester
  return (
    <>
      <div className=''>
        <BrowserRouter>
          <Routes>
            <Route path="/emotion" element={<Emotion postId={Id}/>} />
            <Route path="/post" element={<PostList />} />
          </Routes>
        </BrowserRouter> 
      </div>
    </>
  )
}

export default App
