import { User, authSubscribe } from "@junobuild/core";
import { useEffect, useState, createContext } from "react";
import { Login } from "./Login";
import { Logout } from "./Logout";

export const AuthContext = createContext<{ user: null | User }>({ user: null });


export const Auth = ({ children }: any) => {

    const [user, setUser] = useState<User | null | undefined>(undefined);


    useEffect(() => {
        const sub = authSubscribe((user) => setUser(user));

        return () => sub();
    }, []);

    return (
        <AuthContext.Provider value={{ user: user || null }}>
            {
                user !== undefined && user !== null
                    ? <div>
                        {children}
                        <Logout />

                    </div>
                    : <Login />
            }
        </AuthContext.Provider>
    )
}
