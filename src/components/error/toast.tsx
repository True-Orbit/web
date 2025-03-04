import { StyledToast } from '.';

interface Props {
  error: string;
}

export const Toast = ({ error }: Props) => {
  return (
    <StyledToast className="error-boundary-fallback">
      <h3>Something went wrong</h3>
      <p style={{ whiteSpace: 'pre-wrap' }}>{error}</p>
      <button onClick={() => window.location.reload()} style={{ marginTop: 20, padding: '8px 16px' }}>
        Reload Page
      </button>
    </StyledToast>
  );
};
