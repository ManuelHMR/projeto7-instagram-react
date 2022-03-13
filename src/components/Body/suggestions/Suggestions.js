import Suggestion from "./Suggestion";

const sugestoes = [
  {
    usuario: "bad.vibes.memes",
    fotoDePerfil: "assets/img/bad.vibes.memes.svg",
    segueVoce: true,
    novoUsuario: false
  },
  {
    usuario: "chibirdart",
    fotoDePerfil: "assets/img/chibirdart.svg",
    segueVoce: true,
    novoUsuario: true
  },
  {
    usuario: "razoesparaacreditar",
    fotoDePerfil: "assets/img/razoesparaacreditar.svg",
    segueVoce: false,
    novoUsuario: true
  },
  {
    usuario: "adorable_animals",
    fotoDePerfil: "assets/img/adorable_animals.svg",
    segueVoce: true,
    novoUsuario: true
  },
  {
    usuario: "smallcutecats",
    fotoDePerfil: "assets/img/smallcutecats.svg",
    segueVoce: true,
    novoUsuario: false
  }
];

export default function Suggestions() {
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestoes.map(({ usuario, fotoDePerfil, segueVoce, novoUsuario }) => (
        <Suggestion
          fotoDePerfil={fotoDePerfil}
          usuario={usuario}
          segueVoce={segueVoce}
          novoUsuario={novoUsuario}
        />
      ))}
    </div>
  );
}