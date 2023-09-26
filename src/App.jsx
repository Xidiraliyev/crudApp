import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Update from "./pages/Update";


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: '/edit/:id',
          element: <Update/>
        }
      ]
    }
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
