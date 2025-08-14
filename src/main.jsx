import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes';
import { RouterProvider } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-9/10 mx-auto'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>
)
