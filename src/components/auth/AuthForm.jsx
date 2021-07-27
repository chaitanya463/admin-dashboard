import react from 'react';


const AuthForm = () => {
    return (
       <div className=''>
           <h1>Auth</h1>
           <div>
                <form>
                  <div>
                      <label htmlFor='email'>Enter your name: </label>
                      <input type="email" id='email' required/>
                  </div>

                  <div>
                    <label htmlFor='password'>Enter your password: </label>
                      <input type='password' id='password'/>
                  </div>

                  <div className=''>
                    <button
                    type='button'>
                        Login
                    </button>
                  </div>
                </form>
           </div>
       </div>
    );
}

export default AuthForm;