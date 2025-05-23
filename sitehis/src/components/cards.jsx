// Importa o componente Link do React Router para navegação
import { Link } from "react-router-dom";
// Importa uma imagem local
import imageG from "../assets/grupo.jpg";
// Importa o arquivo de estilos CSS para os cards
import "../styles/cards.css";

// Componente funcional Cards
function Cards() {
    // Array de objetos contendo informações sobre os conteúdos
    const conteudos = [
        // Cada objeto representa um card com informações como nome, descrição, imagem e link
        { id: 1, nome: "Guerra do Contestado", conteudo: "Foi um conflito armado que ocorreu entre 1912 e 1916, no sul do Brasil, envolvendo camponeses e o governo federal.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJtjng9ySOLytyaGefmjU2i2gwKXNE7amIrg&s", link: "/guerra-do-contestado" },
        { id: 2, nome: "Guerra de Canudos", conteudo: "Foi um conflito armado que ocorreu entre 1896 e 1897, no nordeste do Brasil, envolvendo camponeses e o governo federal.", img: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2020/02/guerra-dos-canudos.jpg", link: "/guerra-de-canudos" },
        { id: 3, nome: "Primeira Guerra Mundial", conteudo: "Foi um conflito global que ocorreu entre 1914 e 1918, envolvendo várias potências mundiais.", img: "https://static.preparaenem.com/2022/01/trincheira-na-primeira-guerra-mundial.jpg", link: "/primeira-guerra-mundial" },
        { id: 4, nome: "Revolução Russa", conteudo: "Foi um conjunto de eventos que levaram à queda do Império Russo e à ascensão do regime comunista.", img: "https://upload.wikimedia.org/wikipedia/commons/7/79/Armed_soldiers_carry_a_banner_reading_%27Communism%27%2C_Nikolskaya_street%2C_Moscow%2C_October_1917.jpg", link: "/revolucao-russa" },
        { id: 5, nome: "Fascismo Italiano", conteudo: "Foi um movimento político autoritário que surgiu na Itália sob a liderança de Benito Mussolini.", img: "https://humanidades.com/wp-content/uploads/2023/03/3-Fascismo-italiano.jpg", link: "/fascismo-italiano" },
        { id: 6, nome: "Crise de 1929", conteudo: "Foi uma crise econômica global que começou com a queda da Bolsa de Valores de Nova York em 1929.", img: "https://investidorsardinha.r7.com/wp-content/uploads/2020/08/crise-de-1929-a-grande-depressao-economica.jpg", link: "/crise-de-1929" },
        { id: 7, nome: "Sobre Nós", conteudo: "Grupo de cinco cabeças (e muitas ideias), cada um com seu jeito único, mas juntos formamos um time que se completa.", img: imageG, link: "/sobre-nos" }
    ];

    // Renderiza os cards com base no array de conteúdos
    return (
        <div className="cards">
            {conteudos.map((item) => (
                // Cada card é um link que leva para a página correspondente
                <Link to={item.link} key={item.id} className="card">
                    {/* Exibe a imagem do card */}
                    <img src={item.img} alt={item.nome} />
                    {/* Exibe o título do card */}
                    <h3>{item.nome}</h3>
                    {/* Exibe a descrição do card */}
                    <p>{item.conteudo}</p>
                </Link>
            ))}
        </div>
    );
}

// Exporta o componente para ser usado em outras partes do projeto
export default Cards;