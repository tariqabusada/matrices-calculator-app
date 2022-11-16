import {createBrowserRouter} from 'react-router-dom';

import App from '../App';
import Calculator from '../pages/calculator';
import Landing from '../pages/Landing';
import Error from '../pages/Error';
import NotFound from '../pages/NotFound';

const browserRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true, element: <Landing />
            },
            {
                path: '/calculator',
                element: <Calculator />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />
    },
]);

export default browserRouter;