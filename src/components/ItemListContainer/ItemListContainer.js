import ItemCount from "../ItemCount/ItemCount";
import { products } from "../data/products";
import Item from "../Item/Item";    

export default function ItemListContainer ({greeting}) {
     
    const task = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        },3000)
    })
    task.then((result) => {
        console.log(result)
    },err => {
        console.log(err)
    }).catch((err) => {
        console.log(err);
    })

    return(
        <>
        <h2 className="greeting">{greeting}</h2>
        <ItemCount />
        
        <div className="App">
            {products.map((product, index) => (
                <Item product= {product} key={product.id}/>
            )
            )}
        </div>
        </>
    )

  
}