

function Reuse(){
    let rendom = Math.round(Math.random()*100)+1
    const colorChange = function(value){
        return Math.random()*(value+1)
    }
    return(
        <h3 style={{backgroundColor : `rgb(${colorChange(255)} ${colorChange(255)} ${colorChange(255)})`}}>
            let's create a random number {rendom}</h3>
    )
}
export default Reuse