import './App.css'
import './Component/Emotion/emotion.jsx'
import './Page/Post/PostList.jsx'

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
