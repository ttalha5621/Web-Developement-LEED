import React from "react";
import AuthService from "../../services/auth.service";

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
    state = { isAuth: false };

    constructor() {
        super();
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        const isAuthenticated = AuthService.checkAuth();
        this.state = {
            isAuth: isAuthenticated,
        };
    }

    login() {
        this.setState({ isAuth: true });
    }

    logout() {
        this.setState({ isAuth: false });
        localStorage.removeItem("user");
    }

    render() {
        return (
            <AuthContext.Provider
                value={{
                    isAuth: this.state.isAuth,
                    login: this.login,
                    logout: this.logout,
                    user: { role: 'teacher' } // JSON.parse(localStorage.getItem("user")),
                }}
            >
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
