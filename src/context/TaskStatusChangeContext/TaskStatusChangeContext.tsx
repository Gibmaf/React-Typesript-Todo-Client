import React,{ createContext, FC, PropsWithChildren, ReactElement, useState } from "react";

export const TaskStatusChangeContext = createContext({
   updated: false,
   // eslint-disable-next-line @typescript-eslint/no-empty-function
   toggle: () => {}
})

export const TaskStatusChangeContextProvider:FC<PropsWithChildren> = (props): ReactElement => {
   const [updated, setUpdated] = useState(false);
   
   function toggleHandler() {
      updated ? setUpdated(false) : setUpdated(true)
   }

   return <TaskStatusChangeContext.Provider value={{ updated: updated , toggle: toggleHandler}}>
      {props.children}
   </TaskStatusChangeContext.Provider>
}