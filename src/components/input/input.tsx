import { Button } from "@mui/material"
import { useState } from "react"

interface Props {
    agregarTarea: (titulo: string) => void
}

const Input: React.FC<Props> = ({agregarTarea}) => {

    const [input, setInput] = useState<string>('')

    const añadir = () => {
        if(input !== ''){
            agregarTarea(input)
        }
    }

    return(
        <div>
            <input placeholder="Ingrese su tarea" onChange={(event) => setInput(event.target.value)}/>
            <Button variant="contained" onClick={añadir}>Agregar</Button>
        </div>
    )

}

export default Input