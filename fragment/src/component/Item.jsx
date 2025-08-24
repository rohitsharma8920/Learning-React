const Item = ({foodItem ,bought, handalclicking})=> {
    
    // const handalclicking =() =>
    // {
    //     console.log(`${foodItem} clicked`)
    // }


    return(
        <>
        <li className= {`list-group-item kg-item ${ bought && 'active'}`} > {foodItem}</li>
        <button className="button btn btn-info" onClick={handalclicking}>buy</button>
        </>
        
    )
}

export default Item;