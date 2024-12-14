import React, {createContext, useState} from "react";

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
