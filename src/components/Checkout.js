import axios from "axios";


function Checkout(){
    return (
        <div>

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

export default Checkout