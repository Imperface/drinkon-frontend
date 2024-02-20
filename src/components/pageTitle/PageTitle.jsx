import { Title } from "./PageTitle.styled"

export const PageTitle = (title) => {
    return (
        
            <Title>{title.name}</Title>
        
    )
}
// Для використання в інших компонентах імпортувати та використати там де треба : <Title name = 'My drinks'/>