export default function IonIconsMap({icons}){
    return (
        <>
            {icons.map((i) =>
                <ion-icon name={i} key={i}></ion-icon>
            )}
        </>
    );
}