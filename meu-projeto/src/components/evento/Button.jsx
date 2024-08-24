function Button(props) {
    // aqui no on click vou ativar o props. que e a prorpiedadr
    return <button onClick={props.event}>{props.text}</button>
}


export default Button