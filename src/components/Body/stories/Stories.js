import Story from "./Story.js";

const stories = [
  {
    usuario: "9gag",
    fotoDePerfil: "assets/img/9gag.svg"
  },
  {
    usuario: "meowed",
    fotoDePerfil: "assets/img/meowed.svg"
  },
  {
    usuario: "barked",
    fotoDePerfil: "assets/img/barked.svg"
  },
  {
    usuario: "nathanwpylestrangeplanet",
    fotoDePerfil: "assets/img/nathanwpylestrangeplanet.svg"
  },
  {
    usuario: "wawawicomics",
    fotoDePerfil: "assets/img/wawawicomics.svg"
  },
  {
    usuario: "respondeai",
    fotoDePerfil: "assets/img/respondeai.svg"
  },
  {
    usuario: "filomoderna",
    fotoDePerfil: "assets/img/filomoderna.svg"
  },
  {
    usuario: "memeriagourmet",
    fotoDePerfil: "assets/img/memeriagourmet.svg"
  }
];

export default function Stories() {
  return (
    <div className="stories">
      {stories.map(({ usuario, fotoDePerfil }) => (
        <Story fotoDePerfil={fotoDePerfil} usuario={usuario} />
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}