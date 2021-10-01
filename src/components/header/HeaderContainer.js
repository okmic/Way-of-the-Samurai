import React from 'react';
import { connect } from 'react-redux';
import { loginOutThunk} from '../../redux/authReducer';
import Header from './Header';


class HeaderContainer extends React.Component {

    render() { 
        return(
            <Header {...this.props} isAuth={this.props.isAuth} />
    )}
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { loginOutThunk}) (HeaderContainer)