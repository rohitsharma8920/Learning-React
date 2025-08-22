
function AddItem2(){
    let todoName = 'Go to Collage';
    let date = '04/07/2025'
    return (
    <div class="container text-center">
          <div class="row">
            <div class="col-6">
             {todoName}
            </div>
            <div class="col-4">
              {date}
            </div>
            <div class="col-2">
              <button type='button' class = "btn btn-danger kg-button">Delete</button>
            </div>
          </div>
        </div>
        )
}


export default AddItem2