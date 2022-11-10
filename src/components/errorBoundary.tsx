import React from "react";

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}
class MyErrorBoundary extends React.Component<Props> {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error: any) {
    // Update state so next render shows fallback UI.
    return { error: error };
  }

  componentDidCatch(error: any, info: any) {
    // Log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return <p>Something broke</p>;
    }
    return this.props?.children;
  }
}

export default MyErrorBoundary;
