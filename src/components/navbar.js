import '../assets/styles/nav.css'
import {BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'
import DyRender from './login'
import me from '../assest/logo.png';
import Demo from './reg';
function Ls()
{
    return(
        <header>        <div style={{
            marginLeft: '590px',
            marginTop: '100px',
            backgroundColor: 'rgb(21, 5, 37)',
            color: 'white',
            padding: '100px',
            width: '200px',
            borderRadius: '30px'
        }}>
            <h3 style={{
                textDecoration: 'Underline'
            }}>Logged In!!</h3>
            <form>
                <h2>Login successfully!</h2>
                <button><Link to='/' className='link'>Ok</Link></button>
            </form><br></br>
        </div>
        </header>

    )
}function Rs()
{
    return(
        <header>        <div style={{
            marginLeft: '590px',
            marginTop: '100px',
            backgroundColor: 'rgb(21, 5, 37)',
            color: 'white',
            padding: '100px',
            width: '200px',
            borderRadius: '30px'
        }}>
            <h3 style={{
                textDecoration: 'Underline'
            }}>Welcome!</h3>
            <form>
                <h4>Rgistration Successfully!</h4>
                <button><Link to='/Login' className='link'>Ok</Link></button>
            </form><br></br>
        </div>
        </header>

    )
}
function Login()
{
    return(
        <header>        <div style={{
            marginLeft: '590px',
            marginTop: '100px',
            backgroundColor: 'rgb(21, 5, 37)',
            color: 'white',
            padding: '50px',
            width: '300px',
            borderRadius: '30px'
        }}>
            <h3 style={{
                textDecoration: 'Underline'
            }}>Login</h3>
            <form>
                <label>Username:
                    <input type="text" />
                </label><br></br>
                <br></br>
                <label>Password:
                    <input type="password" />
                </label>
            <h6>Don't you have an account? <Link to='/register'>Register</Link></h6>
            </form>
            <DyRender />
        </div>
        </header>

    )
}
function Home()
{
    return(
        <div >
            <h1>About Us</h1>
            <hr />
            <div className='void'>
                <p>If you pay attention, you’ll notice that most, if not all, of your favorite websites, have terms and conditions.

When launching an online business, it can be hard to understand why you need to spend time and effort creating terms for your users. Also, you might have no clue what to write and how to write it.

The good news? You don’t need to be a legal expert to create these terms.

In this article, you’ll find a terms and conditions template for websites that you may download for free and customize to fit your needs.

I’ll also show you some examples of terms and conditions and important details you should keep in mind when personalizing the template to avoid common mistakes.</p>
            </div>
            <div className='void'>
                <p>When it comes to what you should include in your terms and conditions, there are what could be considered standard clauses. This means that you’ll find them in pretty much any standard terms and conditions agreement.

To give you a head start, we put together this sample terms and conditions template for websites. Keep in mind though that you should always consider the specifics and requirements of your own business to make sure you cover all the bases.

Feel free to download it in your preferred format and personalize it to your needs, taking into consideration the services or products that you offer and the risks and liabilities that come with those.</p>
            </div>
        </div>
        
    )
}
function  Register()
{
    return(
        <div style={{
            marginLeft: '650px',
            marginTop: '5px',
            backgroundColor: 'rgb(21, 5, 37)',
            color: 'white',
            padding: '30px',
            width: '200px',
            borderRadius: '30px'}}>
             <h3 style={{textDecoration: 'underline'}}>Register</h3>
            <form>
                <label>FirstName:
                    <input type="text" />
                </label><br></br>
                <br></br>
                <label>LastName:
                    <input type="text" />
                </label><br></br>
                <br></br>
                <label>DOB:
                    <input type="date" />
                </label>
                <br></br><br></br>
                <label>UserName:
                    <input type="text" />
                </label>
                <br></br><br></br>
                <label>Password:
                    <input type="Password" />
                </label>
                <br></br><br></br>
                <label>EMail:
                    <input type="mail" />
                </label>
                <br></br>
                <h6>Already have an account? <Link to='/login' className='link'>Login</Link></h6>
                <button><Link to='/rs' className='link'>Register</Link></button>
            </form><br></br>
            
        </div>
    )
}
function Navbar()
{
    return (
        
        <Router>
            <div className='parentDiv'>
            <nav>
                <ul style={{
                    marginRight: '1110px'
                }}>
                    <img src={me} height='52px' width='52px' marginLeft= '100px'></img>
                    <li ><Link to='/' className='link'>HOME</Link></li>
                    <li ><Link to='/login' className='link'>LOGIN</Link></li>
                    <li ><Link to='/register'className='link'>REGISTER</Link></li>

                </ul>
            </nav>
            </div>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/register' element={<Register/>} />
                <Route exact path='/ls' element={<Ls/>} />
                <Route exact path='/rs' element={<Rs/>} />
            </Routes>
        </Router>
        
    )
}
export default Navbar;


