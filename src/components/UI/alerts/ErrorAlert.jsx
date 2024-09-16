import React from "react";
import classes from './ErrorAlert.module.css';

const ErrorAlert = ({errorText}) => {
    return (
        <div className={classes.error}>
            {errorText}
        </div>
    )
}

export default ErrorAlert;