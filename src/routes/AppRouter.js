import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { authContext } from "../auth/authContext";
import { LoginScreen } from "../components/LOGIN/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";


export const AppRouter = () => {

    const {usuario} = useContext(authContext)
    console.log(usuario);
    return (

        <Router>

                <div>
                <Switch>
                    
                    <PublicRouter 
                    exact 
                    path="/login"
                    component={ LoginScreen } 
                    isAuthenticated={usuario.logged}
                    />

                    {   
                        /*                                  ------Comentarios-------
                            *No poner exact cuando se quiere acceder a mas rutas dentro de otro funcional component
                            Rutas Hijas  
                        */  
                    }

                    <PrivateRouter 
                        path="/"
                        component={ DashBoardRoutes }
                        isAuthenticated={usuario.logged}
                    /> 
                </Switch>
                </div>

        </Router>
    )
}


