import React from "react";
import {useHistory, useParams} from "react-router";
import {goBack} from "connected-react-router";
import {Nav} from "react-bootstrap";

function Detail(props) {
    let history = useHistory()
    let {id} = useParams()
    let findItem = props.item.find(function (item){
        return item.id == id
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+(parseInt(id)+1)+".jpg"} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{findItem.title}</h4>
                    <p>{findItem.content}</p>
                    <p>{findItem.title}</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button onClick={()=>{history.goBack()}} className="btn btn-danger">뒤로가기</button>
                </div>
            </div>


        </div>
    )
}

export default Detail