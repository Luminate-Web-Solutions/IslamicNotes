import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';
import './index.css';
import { AuthProvider } from './context/AuthContext';

// Pages
import Login from './pages/Login';
import RequireAdmin from './components/RequireAdmin';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Notes from './pages/Notes';
import ContactUs from './pages/ContactUs';
import PDFReader from './pages/PDFReader';
import AdminPanel from "./pages/AdminPanel";


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'notes', element: <Notes /> },
        { path: 'contact', element: <ContactUs /> },
        { path: 'notes', element: <Notes /> },
        { path: 'read/:fileName', element: <PDFReader /> },
        { path: 'login', element: <Login /> },
        { 
          path: 'admin', 
          element: (
            <RequireAdmin>
              <AdminPanel />
            </RequireAdmin>
          )
        },
      ],
    },
  ],
 
  
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
    <SearchProvider>
      <RouterProvider router={router} />
    </SearchProvider>
    </AuthProvider>
  </StrictMode>
);

export default router;
