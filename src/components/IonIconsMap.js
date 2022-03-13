export default function IonIconsMap({icons}){
    return (
        <div>
            {icons.map((i) =>{
                <ion-icon name={i} key={i}></ion-icon>
            })}
        </div>
    );
}