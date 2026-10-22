import { useState } from "react";
import { estilos } from "../styles/estilos";
import CardSucesso from "../components/CardSucesso";

export default function Home() {
  const [posicaoNao, setPosicaoNao] = useState({ top: "50%", left: "60%" });
  const [aceitou, setAceitou] = useState(false);
  const [foiMover, setFoiMover] = useState(false);

  const moverBotaoNao = () => {
    setFoiMover(true);

    // Sorteia posições mantendo o botão dentro do limite visível da tela
    const novoTop = Math.floor(Math.random() * 70 + 10) + "%";
    const novoLeft = Math.floor(Math.random() * 70 + 10) + "%";

    setPosicaoNao({ top: novoTop, left: novoLeft });
  };

  const reiniciar = () => {
    setAceitou(false);
    setFoiMover(false);
  };

  return (
    <div style={estilos.container}>
      {!aceitou ? (
        <div style={estilos.card}>
          <h1 style={estilos.titulo}>
            Promete que não vai se apaixonar por mim depois de ver essa página?
            😉
          </h1>

          <p style={estilos.subtitulo}>
            {foiMover
              ? "O botão 'Não' está fugindo... acho que é um sinal! 😂"
              : "Pense bem antes de responder..."}
          </p>

          <div style={estilos.botoesContainer}>
            {/* Botão SIM */}
            <button style={estilos.botaoSim} onClick={() => setAceitou(true)}>
              Prometo! 😇
            </button>

            {/* Botão NÃO (Fujão) */}
            <button
              style={{
                ...estilos.botaoNao,
                position: foiMover ? "fixed" : "relative",
                top: foiMover ? posicaoNao.top : "auto",
                left: foiMover ? posicaoNao.left : "auto",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={moverBotaoNao}
              onTouchStart={moverBotaoNao}
              onClick={moverBotaoNao}
            >
              Não prometo 😜
            </button>
          </div>
        </div>
      ) : (
        <CardSucesso onReiniciar={reiniciar} />
      )}
    </div>
  );
}
