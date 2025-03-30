import { StyledToast } from '.';

interface Props {
  error: string;
}

export const ErrorToast = (err: Props) => {
  console.log('ErrorToast', err);
  return (
    <StyledToast className="error-boundary-fallback">
      <h3>Something went wrong</h3>
      <p style={{ whiteSpace: 'pre-wrap' }}>{err.error}</p>
      <button onClick={() => window.location.reload()} style={{ marginTop: 20, padding: '8px 16px' }}>
        Reload Page
      </button>
    </StyledToast>
  );
};
