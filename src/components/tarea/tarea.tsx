import { ITarea } from "../../interfaces/interfaces"

interface Props {
    info: ITarea
}

const Tarea: React.FC<Props> = ({info}) => {
    return(
        <div style={{display: "flex", width: 200, justifyContent: "space-around"}}>
           <p>{info.titulo}</p>
           <input type="checkbox"/>
        </div>
    )
}

export default Tarea