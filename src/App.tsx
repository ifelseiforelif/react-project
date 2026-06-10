import './App.css'
import type {ProductType} from "./types/ProductType.ts";

function App() {
    const products:ProductType[] = [
        {title:"bread",price:40},
        {title:"milk",price:50},
    ]
    const colors:string[] = ["white", "black", "green", "blue"];
    return(
        <>
        {products.map((product:ProductType, index:number)=>{
            return(<p key={index}>Title: {product.title} Price: {product.price}</p>)
            })}
        <ul>{colors.map((color:string, index:number)=>{
            return(<li key={index}>{color}</li>)
        })}</ul>
        </>
    )

}

export default App
