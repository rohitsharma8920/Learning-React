
function TodoItem({todoDate,todoName}){
    // let todoName = 'Buy Milk';
    // let date = '04/07/2025'
    return (
    <div className="container text-center">
          <div className="row">
            <div className="col-6">
             {todoName}
            </div>
            <div className="col-4">{todoDate}
            </div>
            <div className="col-2">
              <button type='button' className = "btn btn-danger kg-button">Delete</button>
            </div>
          </div>
        </div>
        )
}


export default TodoItem