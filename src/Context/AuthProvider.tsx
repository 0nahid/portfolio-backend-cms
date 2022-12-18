import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({} as any);

export default function AuthProvider({ children }: any) {

    const [loading, setLoading] = useState<boolean>(false);

    const [theme, setTheme] = useState<boolean>(false);
    useEffect(() => {
        setTheme(JSON.parse(window.localStorage.getItem("theme") || "false"));
    }, [theme])

    const handleThemeChange: () => void = () => {
        setTheme(!theme);
        window.localStorage.setItem("theme", JSON.stringify(!theme));
    }
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);


    return (
        <AuthContext.Provider value={
            {
                loading,
                theme,
                handleThemeChange
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}

