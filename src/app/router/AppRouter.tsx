import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MyCoupons from "../../shared/ui/MyCoupons";
import Notification from "../../shared/ui/Notification";
import Search from "../../shared/ui/Search";
import Filter from "../../features/Filter";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/discount",
    element: <MyCoupons />,
  },
  {
    path: "/notification",
    element: <Notification />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/filter",
    element: <Filter />,
  },
]);
