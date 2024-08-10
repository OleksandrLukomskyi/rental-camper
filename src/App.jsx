import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Catalog from './pages/Catalog/Catalog'
import Favorites from './pages/Favorites/Favorites'
import Layout from './components/Layout/Layout'

const  App = () => {
  

  return (
    <>
  <Layout>
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path='/catalog' element={<Catalog/>}/>
<Route path='/favorites' element={<Favorites/>}/>
<Route path='*' element={<Home/>} />
      </Routes>
      </Layout>


    </>
  )
}

export default App
