import IonIconsMap from "./IonIconsMap";

export default function MobileBackground(){

  const mobileIcons = [
    "home",
    "search-outline",
    "add-circle-outline",
    "heart-outline",
    "person-outline"
  ]

    return (
        <div class="fundo-mobile">
          <IonIconsMap icons={mobileIcons}/>
        </div>
    );
}