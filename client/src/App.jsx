import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Emotion from "./Component/Emotion/emotion";
import PostList from './Page/Post/PostList';

function App() {

  return (
    <>
      <div className=''>
        <BrowserRouter>
          <Routes>
            <Route path="/emotion" element={<Emotion />} />
            <Route path="/post" element={<PostList />} />
          </Routes>
        </BrowserRouter> 
      </div>
    </>
  )
}

export default App
