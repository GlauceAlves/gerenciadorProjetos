// voce pode usar as variaves tornando o codigo mais legivel ao inves de usar os props passando usar o tracker  
function Pessoa({nome,foto,idade,profissao}){
    return(
        <div>
            <h2>Nome: {nome}</h2>
            <img src={foto} alt="{props.nome}" />
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}





// function Pessoa(props){
//     return(
//         <div>
//             <h2>Nome: {props.nome}</h2>
//             <img src={props.foto} alt="{props.nome}" />
//             <p>Idade: {props.idade}</p>
//             <p>Profissao: {props.profissao}</p>
//         </div>
//     )
// }

export default Pessoa