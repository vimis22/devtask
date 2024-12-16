import React, {createContext, useState} from 'react';

/**
 * LoginContext is a React Context used to manage and provide login state and authentication actions
 * within the application.
 *
 * This context holds the current login state and exposes methods for logging in and logging out.
 * Components consuming this context can access whether a user is currently logging in and invoke
 * login or logout actions accordingly.
 *
 * The value provided by this context can either be an object containing authentication-related
 * state and methods or null when no context is set.
 */
export const LoginContext = createContext<{
    logging: boolean;
    login: () => void;
    logout: () => void;
} | null>(null);

export const LoginProvider = ({children}: {children: React.ReactNode}) => {
    const [logging, setLoggingIn] = useState(false);

    const login = () => {
        setLoggingIn(true);
    };

    const logout = () => {
        setLoggingIn(false);
    };

    return (
        <LoginContext.Provider value={{logging, login, logout}}>
            {children}
        </LoginContext.Provider>
    );

};
