import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase";

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
          if (user) {
            const login = createUserDocumentFromAuth(user);
            console.log(login)
          }
          setCurrentUser(user);
        });
    
        return unsubscribe;
      }, []);

      useEffect(() => {
          console.log(currentUser)
      }, [currentUser])

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}