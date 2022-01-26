import { Switch , Route } from "react-router-dom";
import './style.css'
import Menu from './Menu';
import Home from './Home';
import Contact from "./Contact";
import Project from "./Project";
import Skills from "./Skills";

const Error = () =>{
    return (
        <>
            OOPS Page not found...
        </>
    )
}
const Navigation = () => {
    return (
        <>

          <Menu/>
          <Switch>
              <Route exact path = "/" component = {Home}/>
              <Route exact path = "/project" component={Project} />
              <Route exact path = "/skills" component={Skills} />
              <Route exact path = "/contact" component={Contact} />
              <Route component={<Error/>} />

          </Switch>
        
        </>
    )
}

export default Navigation;