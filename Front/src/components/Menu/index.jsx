'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMugHot, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './style.css';
import { useRouter } from 'next/navigation';


const Menu = () => {
    const [menuLateral, setMenuLateral] = useState(false);
    const route = useRouter()

    return (
        <>
            <nav className='menu'>
                <button onClick={() => setMenuLateral(!menuLateral)} style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faBars} size="2x" color='#333' />
                </button>
                <div className='logo-container'>
                    <FontAwesomeIcon icon={faMugHot} size='2x' />
                    <div className='marca'>Logo</div>
                </div>
                <button className='login' onClick={() => route.push('/login')}>Login</button>
            </nav>

            {menuLateral &&
                <div className="menu_lateral">
                    <div className='fechar' onClick={() => setMenuLateral(!menuLateral)}>
                        <FontAwesomeIcon icon={faXmark} size='2x' color='#fccd07' />
                    </div>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/noticias/produto">Produto</a></li>
                        <li><a href="/noticias/tecnologia">Tecnologia</a></li>
                        <li><a href="/noticias/rh">RH</a></li>
                        <li><a href="/noticias/vendas">Vendas</a></li>
                    </ul>
                </div>}
        </>
    );
}

export default Menu;