'use client'
import CardNoticia from "../CardNoticia";
import './style.css'
import truncateWithEllipses from './../../libs/truncateWithEllipse';


export const LateralEsquerdo = () => {
    const noticia = {
        img: 'https://www.camara.leg.br/midias/image/2019/08/img20190807004432622-768x512.jpg',
        titulo: 'Câmara aprova texto-base da reforma da Previdência em 2º turno por 370 votos a 124',
        texto: `A Câmara dos Deputados aprovou em segundo turno na noite desta terça-feira (6), por 370 votos a favor, 124 contra e uma abstenção, o texto-base da proposta de reforma da Previdência. Por se tratar de uma proposta de emenda à Constituição (PEC), eram necessários ao menos 308 votos favoráveis.
A sessão durou cinco horas e meia. O texto-base aprovado nesta terça é igual ao aprovado no primeiro turno, em 10 de julho, quando 379 deputados votaram a favor e 131 contra.
Ponto a ponto: saiba o que o texto prevê Para concluir a votação em segundo turno e encaminhar o texto ao Senado, porém, os deputados ainda precisam analisar os oito destaques apresentados pelos partidos para tentar retirar pontos específicos da proposta.
Para isso, o presidente da Câmara, Rodrigo Maia (DEM-RJ), marcou sessão para as 9h desta quarta-feira (7), com início da ordem do dia às 11h. Em entrevista, disse avaliar que não haverá "surpresas", ou seja, que os destaques deverão ser rejeitados.
Questionado sobre a queda no número de votos a favor da reforma na comparação com a votação em primeiro turno (nove a menos), argumentou que há deputados fora de Brasília.
"Alguns deputados estão chegando [de viagem] amanhã cedo. Dois do PL, um do PP, dois do MDB. Pelo menos mais cinco votos chegando amanhã. Então, a nossa projeção é essa. Eu acho que um ou dois podem ter virado voto. É normal que você, em uma votação dessa, possa ter um ou dois votos de perda", disse.
Ele afirmou ainda que decidiu deixar a análise dos destaques para a sessão desta quarta-feira porque alguns deputados estavam cansados e também para não sobrecarregar os trabalhos nesta terça e atrasar a votação nesta quarta. Ele pretende concluir a votação em segundo turno até as 22h.
Considerada uma das principais apostas da equipe econômica para recuperar as contas públicas, a proposta de reforma da Previdência estabelece, entre outros pontos:
idade mínima para os trabalhadores se aposentarem: 65 anos para homens e 62 anos para mulheres;
regras de transição para quem já está no mercado de trabalho.`,
        createAt: new Date()
    }

    noticia.texto = truncateWithEllipses(noticia.texto, 100)
    return (
        <div className="mais-popular">
            <div className="titulo">MAIS POPULAR</div>
            <CardNoticia noticia={noticia} />
        </div>
    )
}

export default LateralEsquerdo;