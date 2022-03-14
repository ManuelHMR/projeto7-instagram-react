import IonIconsMap from "../../IonIconsMap";

export default function Post({ usuario, fotoDePerfil, src, curtidas }) {
  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={fotoDePerfil} alt={usuario} />
          {usuario}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={src} alt={`Post de ${usuario}`} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <IonIconsMap
              icons={[
                "heart-outline",
                "chatbubble-outline",
                "paper-plane-outline"
              ]}
            />
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={curtidas?.fotoDePerfil} alt={curtidas?.usuario || ""} />
          <div className="texto">
            Curtido por <strong>{curtidas?.usuario || "alguém"}</strong> e{" "}
            <strong>
              outras {(curtidas?.numero - 1).toLocaleString() || 0} pessoas
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
