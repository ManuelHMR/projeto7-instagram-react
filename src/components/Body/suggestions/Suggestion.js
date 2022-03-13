export default function Suggestion({
    usuario,
    fotoDePerfil,
    segueVoce,
    novoUsuario
  }) {
    return (
      <div class="sugestao">
        <div class="usuario">
          <img src={fotoDePerfil} alt={usuario} />
          <div class="texto">
            <div class="nome">{usuario}</div>
            <div class="razao">
              {segueVoce ? "Segue você" : novoUsuario ? "Novo no Instagram" : ""}
            </div>
          </div>
        </div>
  
        <div class="seguir">Seguir</div>
      </div>
    );
  }