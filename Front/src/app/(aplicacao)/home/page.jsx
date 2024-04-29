'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import Noticia from "@/components/Noticia";
import LateralEsquerdo from "@/components/LateralEsquerdo";

import './style.css';
import LateralDireito from "@/components/LateralDireito";



const HomePage = () => {
    const [noticias, setNoticias] = useState([]);

    const getNoticias = async () => {
        try {
            const result = await axios.get('http://localhost:8080/noticias')
            setNoticias(result.data);
        } catch (error) {
            alert(error.response.data.message);
        }

    }
    useEffect(() => {
        getNoticias();
    }, []);
    return (
        <div className="grid-home" >
            <LateralEsquerdo />
            <div>
                {noticias.map(noticia =>
                    <Noticia key={noticia.id} noticia={noticia} />)
                }
            </div>
            <LateralDireito />
        </div>
    )
};

export default HomePage;