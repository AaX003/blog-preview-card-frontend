import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import BlogPreviewCard from './code/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlogPreviewCard />
  </StrictMode>,
)
