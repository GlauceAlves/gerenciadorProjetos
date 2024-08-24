

function OutraLista({ itens }) {
    return (
        <>
            <h3> Lista de coisas boas:</h3>
            {/* criando o loop com a funcao map PARA IMPRIMIR 
         */}
            {itens.length > 0 ? (
            itens.map((item, index) => (
                <p key={index}>{item}</p>))
                ) : (<p>Lista vazia</p>)}
        </>
    )
}

export default OutraLista