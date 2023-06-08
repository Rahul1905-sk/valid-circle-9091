import { ADD_TO_CART, GET_ADDRESS, POST_ADDRESS } from "./actiontype";
import axios from "axios";

export const AddtoCart = (payload) => {
    return {type:ADD_TO_CART, payload}
} 

export const getCart =(dispatch) => {
    axios
    .get("https://glorious-robe-calf.cyclic.app/cart")
    .then((res)=>{
        dispatch(AddtoCart(res.data))    
    })
    .catch((err)=>console.log(err))
}

export const Delete=(id)=>(dispatch) =>{

    return  axios.delete(`https://glorious-robe-calf.cyclic.app/cart/${id}`) 
    // getCart()
}

export const getAddress = (obj) => (dispatch) => {
    axios
    .get("",obj)
    .then((res)=>{
        return (
            dispatch({type:GET_ADDRESS, payload : res.data})
        )
    .catch((err)=>
        console.log(err)
    )
    })
}

export const postAddress = (obj) => (dispatch) => {
    axios
    .post("",obj)
    .then((res)=>{
        return (
            dispatch({type:POST_ADDRESS, payload:res.data})
        )
    })
    .catch((err)=>console.log(err))
}