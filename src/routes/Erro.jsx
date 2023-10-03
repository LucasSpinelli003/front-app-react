import './Erro.css'
import { Link } from 'react-router-dom';
export default function Erro(){
    return(
        <>
            <h1>Página não encontrada!</h1>
            <p>Volte para o menu <span> <Link to='/'>VOLTAR</Link> </span></p>
        </>
    );
}; 