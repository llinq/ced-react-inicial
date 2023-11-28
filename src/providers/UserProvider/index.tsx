import { Children, ReactNode, createContext, useContext, useMemo, useState } from 'react';
import { useUserApi } from '../../hooks/use-user-api';

export type UserContextValues = {
    user: string;
    setUser: (user: string) => void;
};

export type UserProviderProps = {
    children: ReactNode;
}

const UserContext = createContext<UserContextValues | null>(null);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState('');

    const { data } = useUserApi(user);

    console.log(data);

    const values = useMemo(() => {
        return {
            user: user,
            setUser: setUser
        };
    }, [user, setUser]);

    return <UserContext.Provider value={values}>
        {children}
    </UserContext.Provider>
};

export const useUser = () => {
   const context = useContext(UserContext);

   if (!context) {
    throw 'UserProvider não utilizado';
   }

   return context;
};