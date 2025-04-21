import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Layout } from './components/Layout';
import { MainContent } from './components/MainContent';
import { ErrorFallback } from './components/ErrorFallback';
import { LoadingSpinner } from './components/LoadingSpinner';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <React.Suspense fallback={<LoadingSpinner />}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<MainContent />} />
              {/* Agregar más rutas aquí según sea necesario */}
            </Routes>
          </Layout>
        </Router>
      </React.Suspense>
    </ErrorBoundary>
  );
}

export default App;