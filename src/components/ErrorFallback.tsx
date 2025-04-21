import React from 'react';
import { Button } from './Button';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
          Algo salió mal
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {error.message}
        </p>
        <Button
          onClick={resetErrorBoundary}
          className="w-full"
        >
          Intentar de nuevo
        </Button>
      </div>
    </div>
  );
}