import { useState } from 'react'

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(name)
        console.log(password)
        console.log(`usuario ${name} foi cadastrado com ${password}`)
        console.log(`Cadastrou o usuario`)
    }

    // sempre tem o nome do tributo e o que vai resgatar e o set name e o que vai mudar no use Satae e o valor que inicia quandoffor inicializado usando value={name} no input (setado para alterar por exemplo)

    // --duas Variaveis  
    const [name, setName] = useState('Inicializo aqui')
    const [password, setPassword] = useState('123')
    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome" value={name}onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" 
                    value= {password} onChange={(e) => setPassword(e.target.value)}  />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>

    )
}

export default Form