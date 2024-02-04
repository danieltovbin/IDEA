import {createBrowserRouter} from 'react-router-dom';
import Format from '../pages/format/Format';
import Dashboard from '../pages/dashboard/Dashboard';
import DescriptionProject from '../pages/edit/DescriptionProject';
import ContentEdit from '../pages/edit/ContentEdit';
import Submissions from '../pages/edit/Submissions';
import DeveloperDetails from '../pages/edit/DeveloperDetails';

export const router = createBrowserRouter([
    {path: "/format", element: <Format/>},
    {path: "/dashboard", element: <Dashboard/>},
    {path: "/descriptionProject", element: <DescriptionProject/>},
    {path: "/contentEdit", element: <ContentEdit/>},
    {path: "/Submissions", element: <Submissions/>},
    {path: "/DeveloperDetails", element: <DeveloperDetails/>},

]);




