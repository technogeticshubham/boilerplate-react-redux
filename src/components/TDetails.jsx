import {useParams,useHistory,Prompt,useLocation} from "react-router";
const TDetails=()=>{

    function useQuery(){
        return new URLSearchParams(useLocation().search);
    }

    const params = useParams();
    const history = useHistory();
    const query = useQuery();
    // console.log(params);
    //console.log(history);
    const dataEntered = false;
    return(
        <div>
            <Prompt when={!dataEntered} message={(location,action)=>{
                if(location.pathname==="/about"){
                    return false;
                }else{
                    return true;
                }
            }}/>
            <h1>Tutorial Details - {params.title} - {query.get("price")}</h1>
            <button onClick={()=>history.goBack()}>Go Back</button>
            <button onClick={()=>history.push("/tutorials/regex")}>Regex</button>
        </div>
    )
}
export default TDetails;