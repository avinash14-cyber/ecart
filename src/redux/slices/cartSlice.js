import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cartItems",
    initialState:[],
    reducers:{
         
        addTocart:(state,actionByComponent)=>{
            const existingProduct=state.find(items=>items.id==actionByComponent.payload.id)
            if(existingProduct){
              
                existingProduct.quantity++
                existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
                const remainingproducts=state.filter(item=>item.id!=existingProduct.id)
                state=[...remainingproducts,existingProduct]
            }
            else{
                state.push({...actionByComponent.payload,quantity:1,totalPrice:actionByComponent.payload.price})
            }
       
        },

        incrementQuantity:(state,actionByCart)=>{
                    const existingProduct=state.find(items=>items.id==actionByCart.payload)
                    existingProduct.quantity++
                    existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
                    const remainingproducts=state.filter(item=>item.id!=existingProduct.id)
                state=[...remainingproducts,existingProduct]


       
            },


            decrementQuantity:(state,actionByCart)=>{
                    const existingProduct=state.find(items=>items.id==actionByCart.payload)
                    existingProduct.quantity--
                    existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
                    const remainingproducts=state.filter(item=>item.id!=existingProduct.id)
                state=[...remainingproducts,existingProduct]
            },

        removecartItem:(state,actionByCart)=>{
            return state.filter(item=>item.id!=actionByCart.payload)
        },
        emptyCart:(state)=>{
            return state=[]
        }
    }
})

export const{addTocart,incrementQuantity,removecartItem,decrementQuantity,emptyCart}=cartSlice.actions
export default cartSlice.reducer