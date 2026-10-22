import { estilos } from "../styles/estilos";

export default function CardSucesso({ onReiniciar }) {
  return (
    <div style={estilos.cardSucesso}>
      <h1 style={estilos.tituloSucesso}>Promessa é dívida! 🥰🎉</h1>
      <p style={estilos.mensagemSucesso}>
        Sua resposta foi registrada com sucesso! Agora você me deve um café para
        selar esse acordo. ☕❤️
      </p>
      <button style={estilos.botaoReiniciar} onClick={onReiniciar}>
        Testar novamente
      </button>
    </div>
  );
}
