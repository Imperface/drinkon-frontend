export const Input = ({children, icon = false}) => {
    return <input>{children}{icon&&{icon}}</input>
}