import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Suspense, lazy } from 'react';
import LoadingScreen from './components/LoadingScreen';

// Lazy load components for better initial load time
const SignIn = lazy(() => import('./pages/SignIn'));
const VerifyPhone = lazy(() => import('./pages/VerifyPhone'));
const VerifyOTP = lazy(() => import('./pages/VerifyOTP'));
const EntityRegistration = lazy(() => import('./pages/EntityRegistration'));
const Subscription = lazy(() => import('./pages/Subscription'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

export default function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<LoadingScreen />}>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/signin" replace />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/verify-phone" element={<VerifyPhone />} />
            <Route path="/verify-otp" element={<VerifyOTP />} />
            <Route path="/entity-registration" element={<EntityRegistration />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
}