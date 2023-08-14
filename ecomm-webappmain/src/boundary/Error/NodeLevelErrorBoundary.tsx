import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "../../pages/Error/ErrorPage";

const NodeLevelErrorBoundary = (props: any) => {
  const errorHandler = (error: Error, errorInfo: React.ErrorInfo) => {
    console.log("Error caught!");
    console.error(error);
    console.error(errorInfo);
  };
  const reset = () => {
    console.log("reloading the page...");
  };
  return (
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onError={errorHandler}
      onReset={reset}
    >
      {props.children}
    </ErrorBoundary>
  );
};

export default NodeLevelErrorBoundary;
