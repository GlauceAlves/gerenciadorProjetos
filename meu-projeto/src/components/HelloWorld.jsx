import Frase from './Frase';


function HelloWorld(){
    return(
        <div>
            <p>Posso importar os componente por outro componente </p>
            <Frase/> 
            <h1>Meu primeiro componente</h1>
        </div>
    )
}

export default HelloWorld