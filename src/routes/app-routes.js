import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardRoute } from './route';
import Sidebar from '../components/sidebar/Sidebar';

export default function AppRoutes() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        {DashboardRoute.map((DashboardRoute, index) => {
          return (
            <Route
              exact={DashboardRoute.exact}
              key={index}
              path={DashboardRoute.path}
              element={DashboardRoute.component}
            />
          );
        })}
      </Routes>
    </Router>
  );
}
