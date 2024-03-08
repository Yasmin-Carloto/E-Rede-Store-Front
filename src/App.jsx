import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PagePattern from './components/PagePattern';
import Home from './pages/Home'
import MyOrders from './pages/MyOrders';
import Categories from './pages/Categories';
import Products from './pages/Products';
import Login from './pages/Login';
import PagePatternLogIn from './components/PagePatternLogIn';
import SingUp from './pages/SingUp';
import ProductInfo from './pages/ProductInfo';

function App() {

  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={ <PagePattern/> }>
          <Route index element={ <Home/> }/>
          <Route path='orders' element={ <MyOrders/> }/>
          <Route path='categories' element={ <Categories/> }/>
          <Route path='products/categories' element={ <Products/> }/>
          <Route path='products/categories/:category' element={ <Products/> }/>
          <Route path='products/:id/*' element={<ProductInfo/>}/>
        </Route>

        <Route path='/' element={ <PagePatternLogIn/> }>
          <Route path='login' element={ <Login/> }/>
          <Route path='signup' element={ <SingUp/> }/>
        </Route>

        <Route path='*' element={<h1>Not Found</h1>}/>

      </Routes>

    </BrowserRouter>
  )
}

export default App
