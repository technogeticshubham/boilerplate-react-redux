import { useLocation } from "react-router";
const NoMatch=()=>{
    const location = useLocation();
    console.log(location);
    return(
        <div>
            <h3>No Match {location.pathname}</h3>
        </div>
    );
}
export default NoMatch;