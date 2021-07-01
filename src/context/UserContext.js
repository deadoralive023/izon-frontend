import react, { createContext, useState, useEffect } from "react";

import localforage from "localforage";

const UserContext = createContext();

const UserContextProvider = (props) =>
{
    const [user, setUser] = useState();

  useEffect(async () => {
    await localforage.getItem("@current_user").then((current_user)=>{
    //   console.log("In UserContext Component, current_user from Local Storage: ", current_user);
      setUser(current_user);
      // console.log("user conetxt : ",user);
    })
  }, []);

    return (
        <UserContext.Provider value={{user, setUser}} >
            {props.children}
        </UserContext.Provider>
    ) 
}

export { UserContext, UserContextProvider };

// export const UserContext = createContext();
// export default createContext()

