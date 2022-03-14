export default function User({userNick, userPic, userName}){
    return (
        <div class="usuario">
            <img src={userPic} alt="user picture"/>
            <div class="texto">
              <strong>{userNick}</strong>
              {userName}
            </div>
        </div>
    )
}