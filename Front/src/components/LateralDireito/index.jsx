'use client'
import CardNoticia from "../CardNoticia";
import './style.css'
import truncateWithEllipses from "@/libs/truncateWithEllipse";

export const LateralDireito = ({ noticias }) => {
    console.log('noticias', noticias)
    const noticiaComElipse = () => {
        return noticias.map((noticia, index) => {
            noticia.texto = truncateWithEllipses(noticias.texto, 100)
            return (
                <div style={{ marginBottom: '20px' }} key={index}>
                    <CardNoticia noticia={noticia} />
                </div>
            )
        })
    }
    return (
        <div className="ultimas-noticias">
            <div className="titulo">ÚLTIMAS NOTICIAS</div>
            <div style={{ marginBottom: '20px' }}>
                {noticias.length && noticiaComElipse()}
            </div>
        </div>
    )
}

export default LateralDireito;