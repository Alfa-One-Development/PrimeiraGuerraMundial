import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import "../styles/page.css";
import imageG from "../assets/grupo.jpg";

function Pagina9() {
  return (
    <div>
      <Header />
      <h1 className="hero">Sobre o Grupo</h1>
      <img src={imageG} className="imageg" />
      <section className="bloco">
        <p>
          Felepe Cagnin - Líder<br />
    Murilo Correia - Vice-Líder<br />
    Vitor Hugo - Membro<br />
    William Magno - Membro<br />
    Murilo Besson - Membro<br />
        </p>
<br/>
        <p>
          Senhoras e senhores, preparem-se para o show de inovação e engenharia de software! A arena está em polvorosa, a energia é palpável e o momento que todos esperavam finalmente chegou! De um lado, temos a promessa de algoritmos que desafiam os limites, a força da arquitetura de sistemas e a inteligência que redefinirá o futuro digital. Eles não vieram para brincadeira, vieram para dominar o código e elevar o desenvolvimento a um novo patamar!
<br/>

Apresentando: ALPHA ONE DEVELOPMENT!
Do berço da excelência em tecnologia e forjado no caldeirão da programação, com um histórico de soluções inovadoras que ressoa por onde passam, apresentamos o time que está pronto para o próximo nível. Este é o Grupo 1, o temido, o respeitado, o imbatível Alpha One Development!
No centro deste furacão de talento, o cérebro por trás de cada linha de código estratégica, o visionário que guia com uma lógica impecável e uma mente tão afiada que, às vezes, até ele se perde nos próprios pensamentos... Cuidado com as piadas, ou talvez tente entendê-las. Ele é o líder inquestionável: FELIPE CAGNIN!
E ao seu lado, o cara que você sempre vê com os fones de ouvido, decifrando o mundo com um olhar prático e uma inteligência que brilha tanto quanto a bola nos pés dele. O vice-líder que nunca se dobra, o pilar de força que sustenta a equipe em cada sprint, sempre com um estilo impecável: MURILO CORREIA!
Mas o Alpha One Development não seria completo sem seus pilares de força e inovação no teclado. Com a agilidade de um programador full-stack e a inteligência de um engenheiro de software, ele é direto ao ponto, sem rodeios. Uma palavra, um código, e o problema está resolvido. Ele é o mago silencioso dos algoritmos: VITOR HUGO!
Em seguida, preparem-se para a sabedoria que emana de um poço sem fundo, a inteligência tão vastamente incompreensível e absurdamente descomunal que transcende o entendimento humano! Ele é a própria personificação da mente que desvenda os segredos do universo e os aplica ao código. O gigante da implementação, o ser de conhecimento ilimitado: WILLIAM MAGNO!
E por fim, mas definitivamente não menos importante, o entusiasta de tudo que tem rodas e motor, que vai te dizer a verdade doa a quem doer, com a sinceridade de uma criança e a praticidade de quem resolve qualquer problema. Para ele, "pequenas coisas se tornam grandes na sua cabeça", mas é exatamente essa atenção aos detalhes que o torna um arquiteto da perfeição em código, sempre pronto para a ação: MURILO BESSON!
<br />


Com uma sinergia que beira a perfeição, uma visão que transcende o código e uma execução que não aceita erros de compilação, o Alpha One Development não está aqui para participar… eles estão aqui para CONQUISTAR o universo da programação! Preparem-se para testemunhar a grandeza em cada linha de código!
        
        </p>
      
      </section>
      <Footer/>
    </div>
  );
}

export default Pagina9;