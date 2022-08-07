import { FC } from 'react';
type IProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

const ErrorBoundaryFallback: FC<IProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className="bg-dark h-[100vh]">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default ErrorBoundaryFallback;
