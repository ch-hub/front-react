import {useHistory} from "react-router";

function Card(props){
    let history = useHistory()

    return (
        <div className="col-md-4" onClick={()=>{ history.push("/detail/"+ (props.i+1)) }}>
            <img src={"https://codingapple1.github.io/shop/shoes"+ (props.i+1) +".jpg"} width="100%" />
            <h4>{props.item.name}</h4>
            <p>{props.item.price} won </p>
        </div>
    )
}

export default Card