import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Management from "./Pages/Management";
import NotFound from "./Pages/NotFound";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import "./Styles/index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Protected from "./Firebase/Protected";

const router = createBrowserRouter([
	{ path: "/", element: <Home />, errorElement: <NotFound /> },
	{ path: "/login", element: <SignIn /> },
	{ path: "/signup", element: <SignUp /> },
	{
		path: "/manage",
		element: <Protected />,
		children: [{ path: "/manage", element: <Management /> }],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
