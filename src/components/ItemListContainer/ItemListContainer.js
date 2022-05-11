import ItemCount from "../ItemCount/ItemCount";

export default function ItemListContainer ({greeting}) {
    return(
        <>
        <h2 className="greeting">{greeting}</h2>
        <ItemCount />
        </>
    )
}