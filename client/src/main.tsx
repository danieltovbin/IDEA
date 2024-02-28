import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GiftProvider } from './context/GiftContext.tsx'
// import { SubmissionProvider } from './context/SubmissionContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GiftProvider>
      {/* <SubmissionProvider> */}
    <App />
    {/* </SubmissionProvider> */}
    </GiftProvider>
  </React.StrictMode>,
)
