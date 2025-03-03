import { StyledToast } from '.';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Toast = (error: any, errorInfo?: any) => (
  <StyledToast className="error-boundary-fallback">
    <h3>{error.toString()}</h3>
    <details style={{ whiteSpace: 'pre-wrap' }}>{error.message || errorInfo.componentStack}</details>
    <button onClick={() => window.location.reload()} style={{ marginTop: 20, padding: '8px 16px' }}>
      Reload Page
    </button>
  </StyledToast>
);
