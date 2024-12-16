import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import RootLayout from './components/RootLayout';
import HostelListing from './components/HostelListings';
import HostelworldPromo from "./components/HostelworldPromo"
import SignUpPage from './components/SignUpPage';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,  
          element: <Home />,
        },
        {
          path: "HostelListings",  
          element: <HostelListing />,
        },
        {
          path: "HostelworldPromo", 
          element: < HostelworldPromo />,
        },
        {
          path: "SignUpPage", 
          element: <  SignUpPage />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
