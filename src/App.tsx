import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider } from "@mui/joy/styles/CssVarsProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import AppContainer from "./components/AppContainer";
import MovieTable from "./pages/movie-table";
import MovieDetails from "./pages/movie-details";
import NotFound from "./pages/not-found";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <MovieTable />,
  },
  {
    path: "/movie-details/:imdbId",
    element: <MovieDetails />,
  },
]);

function App() {
  return (
    <>
      <CssVarsProvider>
        <CssBaseline />
        <Provider store={store}>
          <AppContainer>
            <RouterProvider router={router} />
          </AppContainer>
        </Provider>
      </CssVarsProvider>
    </>
  );
}

export default App;
