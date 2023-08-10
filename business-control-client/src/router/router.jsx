/** @format */

import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import FinantialReport from "../Pages/FinantialReport/FinantialReport";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: '/',
				element: <FinantialReport />
			}
		]
	},
]);


export default router