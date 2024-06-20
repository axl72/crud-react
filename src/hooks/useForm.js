import { useState } from "react"

export const useForm = (initialForm = {}) => {
    const [formState, setFormSTate] = useState(initialForm)

    const onInputChange = ({target}) => {
        const {name, value} = target;

        setFormSTate({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormSTate(initialForm)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}