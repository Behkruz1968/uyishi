import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
const Acer = React.lazy(() => import("./Pages/Product/Acer.jsx"));
const Asus = React.lazy(() => import("./Pages/Product/Asus.jsx"));
const Profile = React.lazy(() => import("./Pages/Profile/AsosProfile.jsx"));
const AsosProfile = React.lazy(() => import("./Pages/Profile/AsosProfile.jsx"));
const SettingsPage = React.lazy(() => import("./Pages/Profile/Settings.jsx"));
const Overview = React.lazy(() => import("./Pages/Profile/Overview.jsx"));
const Login = React.lazy(() => import("./Pages/Login.jsx"));
const Laylo = React.lazy(() => import("./Pages/LeaderBoard/Layout.jsx"));
const Product = React.lazy(() => import("./Pages/Product/Layout.jsx"));
const Apple = React.lazy(() => import("./Pages/Product/Apple.jsx"));
const Samusung = React.lazy(() => import("./Pages/Product/Samusung.jsx"));
const OverallBoard = React.lazy(() => import("./Pages/LeaderBoard/OverallBoard.jsx"));
const Daily = React.lazy(() => import("./Pages/LeaderBoard/Daily.jsx"));
const Weekly = React.lazy(() => import("./Pages/LeaderBoard/Weekly.jsx"));
const Detail = React.lazy(() => import("./Pages/LeaderBoard/Detail.jsx"));
const Monthly = React.lazy(() => import("./Pages/LeaderBoard/Monthly.jsx"));
const OrderPage = React.lazy(() => import("./Pages/Order/Order.jsx"));
const Archive = React.lazy(() => import("./Pages/Order/Archive.jsx"));
const Home = React.lazy(() => import("./Pages/Home.jsx"));
const About = React.lazy(() => import("./Pages/About.jsx"));
const Layout = React.lazy(() => import("./Pages/Layout.jsx"));
const Auth = React.lazy(() => import("./Pages/Auth.jsx"));
const Dash = React.lazy(() => import("./Pages/Dash.jsx"));
const Settings = React.lazy(() => import("./Pages/Profile/Settings.jsx"));
const ProfilPage = React.lazy(() => import("./Pages/Profile/ProfilPage.jsx"));
const Dashboard = React.lazy(() => import("./Pages/Dashboard.jsx"));
const Order = React.lazy(() => import("./Pages/Order/Layout.jsx"));
const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Auth />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
          children: [{
path: "", element: <Dash />
          },
            {
              path: "dash",
              element: <Dash />,
            },
            {
              path: "profile",
              element: <AsosProfile />,
              children: [
                {
                  path: "",
                  element: <Profile />,
                },{
path: "profil",
                  element: <ProfilPage />,
                },
                {
                  path: "settings",
                  element: <SettingsPage />,
                },
                {
                  path: "overview",
                  element: <Overview />,
                },
              ],
            },
            {
              path: "leaderboard",
              element: <Laylo />,
              children: [
                {
                  path: "",
                  element: <OverallBoard />,
                },
                {
                  path: "overall",
                  element: <OverallBoard />,
                },
                {
                  path: "daily",
                  element: <Daily />,
                },
                {
                  path: "weekly",
                  element: <Weekly />,
                },
                {
                  path: "monthly",
                  element: <Monthly />,
                },
                {
                  path: "detail",
                  element: <Detail />,
                },
              ],
            },
            {
              path:'order',
              element:<Order/>,
              children:[
                {
                  path:'',
                  element:<OrderPage/>
                },
                {
path:'order',
                  element:<OrderPage/>
                },
                {
                  path:'archorder',
                  element:<Archive/>
                },
                {
                  path:'finishedorder',
                  element:<div>Finished Order</div>
                }
              ]
            },
            {
              path: "product",
              element:<Product/>,
              children:[
                {
                  path:'',
                  element:<Apple/>
                },
            {
                  path: 'apple',
                element: <Apple />,
            },
            {
      path: 'samsung',
      element: <Samusung />,
            },
            {
              path: 'acer',
              element:<Acer/>
            },
            {
              path: 'asus',
              element:<Asus/>
            }
              ]
            },
            {
              path:"analytics",
              element:<Product/>,
              children:[
                {
                  path:'',
                  element:<Apple/>
                },
            {
                  path: 'apple',
                element: <Apple />,
            },
            {
      path: 'samsung',
      element: <Samusung />,
            },
            {
              path: 'acer',
              element:<Acer/>
            },
            {
              path: 'asus',
              element:<Asus/>
            }
              ]
            },
            {
              path:"messages",
              element:<Product/>,
              children:[
                {
                  path:'',
                  element:<Apple/>
                },
            {
                  path: 'apple',
                element: <Apple />,
            },
            {
      path: 'samsung',
      element: <Samusung />,
            },
            {
              path: 'acer',
              element:<Acer/>
            },
            {
              path: 'asus',
              element:<Asus/>
            }
              ]
            },
            {
              path:"settings",
              element:<Product/>,
              children:[
                {
                  path:'',
                  element:<Apple/>
                },
            {
                  path: 'apple',
                element: <Apple />,
            },
            {
      path: 'samsung',
      element: <Samusung />,
            },
            {
              path: 'acer',
              element:<Acer/>
            },
            {
              path: 'asus',
              element:<Asus/>
            }
              ]
            },
            {
              path:"favorite",
              element:<Product/>,
              children:[
                {
                  path:'',
                  element:<Apple/>
                },
            {
                  path: 'apple',
                element: <Apple />,
            },
            {
      path: 'samsung',
      element: <Samusung />,
            },
            {
              path: 'acer',
              element:<Acer/>
            },
            {
              path: 'asus',
              element:<Asus/>
            }
              ]
            },
            {
              path:"history",
              element:<Product/>,
              children:[
                {
                  path:'',
                  element:<Apple/>
                },
            {
                  path: 'apple',
                element: <Apple />,
            },
            {
      path: 'samsung',
      element: <Samusung />,
            },
            {
              path: 'acer',
              element:<Acer/>
            },
            {
              path: 'asus',
              element:<Asus/>
            }
              ]
            }
          ],
        },
      ],
    },
  ]);

  return <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>;
};

export default React.memo(App);
