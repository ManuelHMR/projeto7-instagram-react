import IonIconsMap from "./IonIconsMap";

export default function NavBar(){
    const icons = [
        "paper-plane-outline",
        "compass-outline",
        "heart-outline",
        "person-outline"
    ];
    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="separador"></div>
                    <img src="assets/img/logo.png" />
                </div>

                <div class="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>

                <div class="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div class="icones">
                    <ion-icon name="person-outline"></ion-icon>
                </div>

                <div class="icones-mobile">
                    <IonIconsMap icons={icons}></IonIconsMap>
                </div>
            </div>
      </div>
    );
}
