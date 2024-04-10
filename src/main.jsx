import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="126875154076-r16qps9c90sk9s4o8grhnagt42k3k0gs.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>;
  </React.StrictMode>,
)
