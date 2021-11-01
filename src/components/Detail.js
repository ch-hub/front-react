import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router";
import {goBack} from "connected-react-router";
import {Nav} from "react-bootstrap";
import axios from "axios";

function Detail(props) {
    let history = useHistory()
    let {id} = useParams()
    // let findItem = props.item.find(function (item){
    //     return item.id == id
    // });

    const [product, setProduct] = useState(null)
    useEffect(() => {
        const fetchProduct = async () => {
            try{
                setProduct(null)
                const response = await axios.get('/app/products/' + id)
                setProduct(response.data.result[0])
            }catch (e){
                console.error(e)
            }
        }

        fetchProduct()
    },[])

    if(!product) return null

    console.log(product)

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+(parseInt(id))+".jpg"} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{product.name}</h4>
                    <p>가격 : {product.price}</p>
                    <p>설명 : {product.info}</p>
                    <button onClick={()=>{buy()}} className="btn btn-danger">주문하기</button>
                    <button onClick={()=>{history.goBack()}} className="btn btn-danger">뒤로가기</button>
                </div>
            </div>


        </div>
    )
}

function buy(props){

    const installment = 2

    axios.post('/app/deal',{
        buyerId: 'buyer',
        toUserId: 'company',
        installment: installment,
    })
        .then((response) => {
            console.log(response)
        })
        .catch((e) => {
            console.error(e)
        })
}

export default Detail