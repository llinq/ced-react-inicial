import { createBrowserRouter } from "react-router-dom";

import Aplicacao from './App';
import { Home } from './pages/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Aplicacao />,
    },
    {
        path: 'home',
        element: <Home />
    }
]);
