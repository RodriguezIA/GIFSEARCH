/* eslint-disable no-unused-vars */
import { useState } from "react"

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('One punch man')
    const onInputChange = ({ target }) => {
        console.log(target.value)
        setInputValue(target.value)
    }
    return (
        <input
        type="text"
        placeholder="Buscar gifs..." 
        value={inputValue}
        onChange={(e) => onInputChange(e)}
        />
    )
}