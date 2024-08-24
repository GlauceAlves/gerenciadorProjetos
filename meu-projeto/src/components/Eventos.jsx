import Button from './evento/Button'
function Evento() {
    function meuEvento() {
        console.log(`Ativando primeiro evento`)
    }

    function meuEvento2() {
        console.log(`Ativando segundo evento`)
    }


    return (
        <div>
            <p>Clique para disparar um evento:</p>
            {/* na propriedade event vou passar meu evento mas passa assim meuEvento e nao meuEvento() pq nao esta executando a funcao o componente vai entender que estou mandando uma funcao para ele executar depois */}
            <Button event ={meuEvento} text="Primeiro evento" />
            <Button event ={meuEvento2} text="Segundo evento" />
            {/* <button onClick={meuEvento}>Ativar!</button> */}
        </div>

    )
}

export default Evento