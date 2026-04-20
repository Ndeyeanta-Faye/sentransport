function User ({ props}) {
    return(
        <div>
           {props.id} - {props.prenom} - {props.nom}
        </div>
    )
}
export default User;
