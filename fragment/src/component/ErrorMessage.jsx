const ErrorMessage = ({items}) => {
    // let foodItem = ['first item' , 'second item','third item' ,'four item']
    return (
        <>
        {items.length === 0 && <h3>I am still hungry</h3>}
        </>
    )
    
}

export default ErrorMessage