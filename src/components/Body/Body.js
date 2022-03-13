import Stories from "./stories/Stories";
import Posts from "./posts/Posts";
import User from "./User";
import Suggestions from "./suggestions/Suggestions";
export default function Body(){

    return (
      <div class="corpo">
        <div class="esquerda">
          <Stories/>
          <Posts />
        </div>

        <div class="sidebar">
          <User />
          <Suggestions />

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
      </div>
    );
}