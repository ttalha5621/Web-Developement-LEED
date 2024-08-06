import { useState } from "react";

function App() {
  let [uname,setUname]=useState('')
  let [passowrd,setPassowrd]=useState('')

  let handleSubmit=(event)=>{
    event.preventDefault()

    console.log(uname,passowrd)
  }

  // let getUname=(event)=>{
  //   setUname(event.target.value)
  // }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <form onSubmit={handleSubmit}>
                <div className="text-start my-3">
                  <label>First Name:</label>
                  <input type="text" onChange={(event)=>setUname(event.target.value)} className="form-control" value={uname}/>
                </div>
                <div className="text-start my-3">
                  <label>Password</label>
                  <input type="text" onChange={(event)=>setPassowrd(event.target.value)} className="form-control" value={passowrd}/>
                </div>
                <div className="text-start my-3">
                  <button>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
