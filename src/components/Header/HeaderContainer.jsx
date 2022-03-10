import React from "react";
import { connect } from "react-redux";
import { getAuthData } from "../../redux/auth_data";
import { setUserProfile } from "../../redux/profile_reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthData();
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        userName: state.authData.login,
        isAuthorised: state.authData.isAuthorised
    }
}

export default connect(mapStateToProps, { getAuthData, setUserProfile })(HeaderContainer);