import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Membership } from "./pages/Membership";
import { Services } from "./pages/Services";
import { News } from "./pages/News";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "membership", Component: Membership },
      { path: "services", Component: Services },
      { path: "news", Component: News },
      { path: "contact", Component: Contact },
    ],
  },
]);
