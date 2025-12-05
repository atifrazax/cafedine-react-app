import { lazy, Suspense } from 'react';
const UserRoutes = lazy(() => import('./routes/UserRoutes'));
const AdminRoutes = lazy(() => import('./routes/AdminRoutes'));
const AdminLogin = lazy(() => import('../src/pages/admin/AdminLogin')) ;
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'));
import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css'
import Loader from './components/Loader';

function App() {

  return (
    <main>
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={<UserRoutes />} />
        <Route path="/admin" element={<Suspense fallback={<Loader />}><AdminLogin /></Suspense>} />
        <Route path="/admin/*" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <Suspense fallback={<Loader />}>
              <AdminRoutes />
            </Suspense>
          </ProtectedRoute>} />
      </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
