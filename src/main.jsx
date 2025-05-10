import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider,} from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';
import './index.css';


// Pages
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Notes from './pages/Notes';
import ContactUs from './pages/ContactUs';
import PDFReader from './pages/PDFReader';
import CategoriesPage from './data/CategoriesPage';
import filterData from './pages/filterData';
import DuaPage from "./pages/DuaPage";
import AkhlaqPage from './pages/AkhlaqPage';


// ✅ Define your router
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'notes', element: <Notes /> },
      { path: 'contact', element: <ContactUs /> },
      { path: 'read/:fileName', element: <PDFReader /> },
      { path: 'filter', element: <filterData /> },
      {path: 'dua', element: <DuaPage />}, 
    {path: 'akhlaq', element: <AkhlaqPage />}, 
          {path: 'CategoriesPage', element: <CategoriesPage />},
    ],
  },
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }
});

// ✅ Single correct render call
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider>
      <RouterProvider router={router} />
    </SearchProvider>
  </StrictMode>
);
