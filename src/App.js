import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./Components/ProfessionalDetails/About/About";
import Certificate from "./Components/ProfessionalDetails/Certificate/Certificate";
import Project from "./Components/ProfessionalDetails/Projects/Project";
import Contact from "./Components/ProfessionalDetails/Contact/Contact";
import { Layout } from "./Layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <About />,
        },
        {
          path: "/certificate",
          element: <Certificate />,
        },
        {
          path: "project",
          element: <Project />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
