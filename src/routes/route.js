import Dashboard from "../pages/dashboard/Dashboard"
import Invoices from "../pages/invoices/Invoices"
import Messages from "../pages/messages/Messages"
import Wallets from "../pages/wallets/Wallets"
import Activities from "../pages/activities/Activities"
import Analytics from "../pages/analytics/Analytics"
import Help from "../pages/help/Help"
import Settings from "../pages/settings/settings"


import { RouteLinks } from "./route-links"


export const DashboardRoute = [
    {
        component: <Dashboard />,
        path: RouteLinks.dashboard,
        exact:true    
    },
    {
        component: <Invoices />,
        path: RouteLinks.invoices,
        exact:true    
    },
    {
        component: <Messages />,
        path: RouteLinks.messages,
        exact:true    
    },
    {
        component: <Wallets />,
        path: RouteLinks.myWallet,
        exact:true    
    },
    {
        component: <Activities />,
        path: RouteLinks.activities,
        exact:true    
    },
    {
        component: <Analytics />,
        path: RouteLinks.analytics,
        exact:true    
    },
    {
        component: <Help />,
        path: RouteLinks.getHelp,
        exact:true    
    }, 
    {
        component: <Settings />,
        path: RouteLinks.settings,
        exact:true    
    },
]