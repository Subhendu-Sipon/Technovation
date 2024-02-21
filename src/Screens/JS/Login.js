import React from 'react'

function Login() {
  return (
    <div className='LoginBackground'>
      <div className='LoginContainer'>
        <div className='LoginHead'>LOGIN</div>
          <form>
            <div class="mb-3">
              <label for="LoginEmail" class="form-label">Email address</label>
              <input type="email" class="form-control" id="LoginEmail" aria-describedby="emailHelp" />
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="LoginPassword" class="form-label">Password</label>
              <input type="password" class="form-control" id="LoginPassword" />
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="loginBtn">Submit</button>
          </form>
      </div>
    </div>
  )
}

export default Login