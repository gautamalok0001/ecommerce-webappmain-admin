import React from "react";

const ErrorPage = (props: any) =>{
    return (
        <h1>Something went wrong !!! {props.error}</h1>
    );
}

export default ErrorPage;