import Post from "./Post";

const posts = [
  {
    usuario: "meowed",
    fotoDePerfil: "assets/img/meowed.svg",
    src: "assets/img/gato-telefone.svg",
    curtidas: {
      usuario: "respondeai",
      fotoDePerfil: "assets/img/respondeai.svg",
      numero: 101524
    }
  },
  {
    usuario: "barked",
    fotoDePerfil: "assets/img/barked.svg",
    src: "assets/img/dog.svg",
    curtidas: {
      usuario: "adorable_animals",
      fotoDePerfil: "assets/img/adorable_animals.svg",
      numero: 99160
    }
  }
];

export default function Posts() {
  return (
    <div className="posts">
      {posts.map(({ usuario, fotoDePerfil, src, curtidas }) => (
        <Post
          fotoDePerfil={fotoDePerfil}
          usuario={usuario}
          src={src}
          curtidas={curtidas}
        />
      ))}
    </div>
  );
}
