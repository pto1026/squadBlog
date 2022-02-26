const Button = ({ children }) => {
    return (
        <button
            className="btn btn-primary"
            onClick={e => e.target.innerText = 'You clicked me!!'}>
                {children}
            </button>
    )
}

export default Button