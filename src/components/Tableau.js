import User from './User '

function Tableau ({ titre}){
    const utilisateurs=[
        { id : 1 ,nom : "FAYE", prenom : "Ndeye Anta"},
        { id : 2 ,nom : "FAYE", prenom : "Mame Diarra"},

    ]
    return (
        <div>
            <h1> Tableau {titre} </h1>
            {
                utilisateurs.map(({ id ,nom , prenom },index) => (<User key ={id}nom={nom} prenom={prenom}/>

                ))
            }
            <User nom ={"FAYE"} prenom={"Ndeye Anta"}/>
        </div>
    )
}
export default Tableau;