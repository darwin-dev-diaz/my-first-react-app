import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Avatar from './Avatar.jsx'
// import Todo from './Todo.jsx'
// import AnimalApp from './AnimalApp.jsx'
// import PackingList from './Condition.jsx'
import RenderLists from './RenderLists.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RenderLists />
  </React.StrictMode>,
)
