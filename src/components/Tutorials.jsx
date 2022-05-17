import { Route,Link,useRouteMatch } from "react-router-dom";
import TDetails from "./TDetails";
const Tutorials=()=>{
    const {path,url} = useRouteMatch();
    return(
        <div>
            <ul>
              
                <li><Link to={`${url}/js?price=$100`}>Started Learning JavaScript- JS Book</Link></li>
                <li><Link to={`${url}/ts?price=$80`}>Started Learning Typescript- TS Book</Link></li>
                <li><Link to={`${url}/react?price=$120`}>Started Learning React- React Book</Link></li>
            </ul>
            <Route path={`${path}/:title`}>
                <TDetails/>
            </Route>
        </div>
    )
}
export default Tutorials;