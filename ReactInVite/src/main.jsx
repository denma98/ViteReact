import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const createElement = React.createElement(
  'a',
  {href: "https://google.com", type: "_blanl"},
  "click me baby"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* createElement */}
    <App/>
  </React.StrictMode>,
)
