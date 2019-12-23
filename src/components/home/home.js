import React from "react";
import {useAuthUser} from "../auth/AuthUser";
import Toolbar from '../toolbar/toolbar';
export const HomePage = props => {
const { setLogged } = useAuthUser()
  return (
    <div>
      <Toolbar />
      <div style = {{marginTop: '64px'}}>
                This is Home
            </div>
    </div>
  );
};
