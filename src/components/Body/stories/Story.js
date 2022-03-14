export default function Story({ usuario, fotoDePerfil }) {
    return (
      <div class="story">
        <div class="imagem">
          <img src={fotoDePerfil} alt={usuario} />
        </div>
        <div class="usuario">{usuario}</div>
      </div>
    );
  }