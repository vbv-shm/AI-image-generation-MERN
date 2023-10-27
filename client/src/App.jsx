import React from 'react'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import {logo} from "./assets";
import { Home,CreatePost } from './pages';
export const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between"></header>
    </BrowserRouter>

  )
}
export default App
