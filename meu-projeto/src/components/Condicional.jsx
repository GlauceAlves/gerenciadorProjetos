import { useState } from 'react'

function Condicional() {
    
function enviarEmail(e){
    e.preventDefault({})
    setUserEmail(email)
    console.log(`Email aqui ${email}`)
}

function limparEmail(){
    setUserEmail()

}

const [ email, setEmail] = useState('xyz@exemploemail.com.br')
const [ useEmail, setUserEmail] = useState('')



    return (
        <div>
            <h1>Cadastre seu e-mail</h1>
            <form>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
                {useEmail && (
                    <div><p>O email do usuario é: {useEmail}</p>
                    <button onClick={limparEmail}> Limpar email </button>
                    </div>
                )}
            </form >
        </div>
    )
}


export default Condicional