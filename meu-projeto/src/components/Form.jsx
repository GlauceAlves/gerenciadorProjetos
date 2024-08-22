import { useState } from 'react'

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Cadastrou o usuario`)
    }

    // sempre tem o nome do tributo e o que vai resgatar e o set name e o que vai mudar no use Satae e o valor que inicia quandoffor inicializado
      
    const [nome, setName] =useState()
    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" id="nome" name="nome" placeholder="Digite seu nome" />
                </div>
                <div>
                    <label htmlFor="passowrd">Senha: </label>
                    <input type="password" id="senha" name="senha" placeholder="Digite sua senha" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>

    )
}

export default Form