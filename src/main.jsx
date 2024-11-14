

    import { StrictMode } from 'react'
    import './App.css'
    import { createRoot } from 'react-dom/client'
    import App from "./App.jsx"
    import "./index.css"
    import {
      createBrowserRouter,
      RouterProvider,
    } from "react-router-dom";
import DeepClean from "./DeepClean/DeepClean.jsx"
import Move from "./Move/Move";
import Checklist from './Checklist/Checklist';
import RegularClean from './RegularClean/RegularClean.jsx';
import QuoteForm from './Quote/Quote.jsx'
import ServiceArea from './ServiceAreas/ServiceArea.jsx'
import TermsAndServices from './TermsAndServices/TermsAndServices.jsx'
import BookOnline from './BookOnline/BookOnline.jsx'
import Login from './SignIn/Sign.jsx'
import ResetPassword from './ResetPassword/ResetPassword.jsx'
import SignUp from './SignUp/SignUp.jsx'
import Package from './Package/Package.jsx'
import Contact from './Contact/Contact.jsx'
import Shine from './Shine/Shine.jsx'
    const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
        children: [
          
    
          {
            path: "/",
            element: <RegularClean/>,
          }, 
          {
            path:"/Deep",
            element:<DeepClean/>
          },
          {
            path:"/Move",
            element:<Move/>
          },
          {
            path:"/Checklist",
            element:<Checklist/>
          },
      {
        path:"/QuoteForm",
        element:<QuoteForm/>
      },
      {
        path:"/ServiceArea",
        element:<ServiceArea/>
      },
      {
        path:"/TermsAndServices",
        element:<TermsAndServices/>
      },
      {
        path:"/BookOnline",
        element:<BookOnline/>
      },
      {
        path:"/Login",
        element:<Login/>
      },
      {
        path:"/ResetPassword",
        element:<ResetPassword/>
      },
      {
        path:"/SignUp",
        element:<SignUp/>
      },

      {
        path:"/Package",
        element:<Package/>
        
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/Shine",
        element:<Shine/>
      },
        ],

      },
    ]);

    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>,
    ) 