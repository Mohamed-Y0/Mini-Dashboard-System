import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DataProvider } from "./context/Data";
import Data from "./Pages/Data";
import PageNotFound from "./Pages/PageNotFound";
import Error from "./components/ui/Error";
import AppLayout from "./components/layout/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Data /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

function App() {
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  );
}

export default App;
