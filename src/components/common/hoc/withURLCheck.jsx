import React from "react";
import { useMatch } from "react-router-dom";

const withURLCheck = (url) => (Component) => (props) => {
    let match = useMatch(url);
    return <Component {...props} match={match} />
}

export default withURLCheck;