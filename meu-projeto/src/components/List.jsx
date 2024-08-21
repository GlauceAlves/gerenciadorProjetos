import Item from "./Item"

function List(){
    return(
        <>
        <h1>Minha lista</h1>
        <ul>
        <Item marca="Fiat" ano_lancamento={1985}/>
        <Item marca="Honda" ano_lancamento={2006}/>
        <Item marca="Corsa" />
        </ul>
        </>
    )
}


export default List