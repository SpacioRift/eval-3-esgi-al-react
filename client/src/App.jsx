import './App.css'
import './Component/emotion.jsx'
import './Page/PostList.jsx'

function App() {

  return (
    <>
      <div className=''>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Emotion />} />
            <Route path="/emotion" element={<Emotion />} />
            <Route path="/post" element={<PostList />} />
          </Routes>
        </BrowserRouter> 
      </div>
    </>
  )
}

export default App
