import PropTypes from 'prop-types'

function Item({marca = 'Faltou a marca', ano_lancamento = 0}){
    return(
        <>
         <li>{marca} - {ano_lancamento}</li>       
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

// Será descontunuado , usar defautt na uso do parametro 
// Item.defaultProps ={
//     marca: 'Faltou informar a marcar',
//     ano_lancamento: 0,
// }

export default Item