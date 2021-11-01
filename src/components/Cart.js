import {Alert, Table} from "react-bootstrap";
import {connect, useDispatch, useSelector} from "react-redux";

function Cart(props){

    let state = useSelector((state) => state.reducer)
    let dispatch = useDispatch();

    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                </tr>
                </thead>
                <tbody>
                {
                    state.map((a,i) => {
                        return (
                            <tr key={i}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.qty}</td>
                                <td><button onClick={()=>{ dispatch({ type: 'increase'}) }}>+</button></td>
                                <td><button onClick={()=>{ dispatch({ type: 'decrease'}) }}>-</button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>

            {
                props.isOpen
                ?   <Alert className="m-md-5" variant='primary'>
                        <p>This is a primary alert—check it out!</p>
                        <button onClick={()=>{props.dispatch({type:'close'})}}>닫기</button>
                    </Alert>
                :   null
            }

        </div>



    )
}

// function stateToProps(state){
//     return {
//         state : state.reducer,
//         isOpen : state.reducer2
//     }
// }

// export default connect(stateToProps)(Cart)

export default Cart