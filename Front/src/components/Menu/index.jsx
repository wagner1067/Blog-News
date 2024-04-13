'use client';

import { useState } from 'react';
import './style.css'
import { useRouter } from 'next/navigation'


const Menu = () => {
    const [menuLateral, setMenuLateral] = useState(false);
    const route = useRouter()

    return (
        <>
            <nav className='menu'>
                <button onClick={() => setMenuLateral(!menuLateral)}>Menu</button>
                <div>Logo</div>
                <button onClick={() => route.push('/login')}>Login</button>
            </nav>

            {menuLateral &&
                <div className="menu_lateral">
                    <div className='fechar' onClick={() => setMenuLateral(!menuLateral)}>X</div>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </div>}
        </>
    );
}

export default Menu;