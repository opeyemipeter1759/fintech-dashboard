import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardRoute } from './route';
import Sidebar from '../components/Sidebar';

export default function AppRoutes() {
  return (
    <Router>
          <Sidebar />
          <main className='content'>
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
          </main>
          
    </Router>
  );
}
