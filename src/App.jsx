import HomePage from "./pages/homepage/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/layout/Layout";
import SinglesPage from "./components/singlespage/SinglesPage";
import ProfilePage from "./pages/profilePage/profilePage";
import Login from "./pages/login/login";
import List from "./pages/listPage/ListPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<List/>
        },
        {
          path:"/:id",
          element:<SinglesPage/>
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        },
        {
          path:"/login",
          element:<Login/>
        }
      ]
    }
  ]);

  return (

    <RouterProvider router={router}/>
  );
}

export default App;