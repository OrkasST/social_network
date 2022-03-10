import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        isAuthorised: state.authData.isAuthorised
    }
}

const withAuthRedirect = (Component) => {

    let ContainerComponenet = (props) => {
        return props.isAuthorised ? <Component {...props} /> : <Navigate to='/login' />
    }

    return connect(mapStateToProps)(ContainerComponenet);
}

export default withAuthRedirect;