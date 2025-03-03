import { Component } from 'react';
import { Toast } from '.';

interface Props {
  children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class ErrorBoundary extends Component<any, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  // This lifecycle method is called when an error is thrown in a child component
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static getDerivedStateFromError(error: any) {
    // This method specifically updates the state with the returned value
    return { error };
  }

  // This lifecycle method allows you to log the error
  // errorInfo is specific to componentDidCatch and passed in by react
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  componentDidCatch(error: any, errorInfo: any) {
    if (['local', 'development'].includes(process.env.NODE_ENV)) {
      console.error('Error caught by ErrorBoundary:', error);
      console.error('Component stack:', errorInfo.componentStack);
    } else {
      // Send error to a logging service
    }

    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    return this.state.error ? Toast(this.state.error, this.state.errorInfo) : this.props.children;
  }
}
