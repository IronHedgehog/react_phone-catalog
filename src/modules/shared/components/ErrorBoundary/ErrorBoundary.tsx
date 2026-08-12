import { useRouteError } from 'react-router-dom';

export const ErrorBoundary = () => {
  const error = useRouteError() as Error;

  return (
    <div style={{ padding: '2rem', textAlign: 'center', color: 'red' }}>
      <h1>Oops! Something went wrong.</h1>
      <p>
        We can not load this page. Please check your connection and try again.
      </p>
      <pre>{error.message}</pre>
    </div>
  );
};
