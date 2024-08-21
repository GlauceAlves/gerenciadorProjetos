import Item from "./Item"

function List(){
    return(
        <>
        <h1>Minha lista</h1>
        <ul>
        <Item marca="Fiat"/>
        <Item marca="Honda"/>
        <Item marca="Corsa"/>
        </ul>
        </>
    )
}

export default List