import { useState } from "react"



export const AddCategories = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const handleChange = ({target})=>{
        setInputValue(target.value)
    }

    const onSubmit= (e)=>{  
        e.preventDefault()

        if (inputValue.trim().length <=1) return

        onNewCategory(inputValue.trim())
        setInputValue('')

    }

    return (
        <form onSubmit={onSubmit}>

            <input 
                type='text' 
                placeholder='Buscar Gifs' 
                value={inputValue}
                onChange={handleChange}
            />
        </form>
    )
}
