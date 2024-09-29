import './index.css'

const Home = () => {
    return (
        <div className='mainContainer' >
            <h1 className='title'>Smoke Tree</h1>
            <div className='data'>
                <p className='para1'>It's an assignment for Smoke Tree.</p>
                <p className='para2'> Get all our updates, news with just a registration</p>
                <button onClick={() => {window.location.replace('/register')}} className='button' >Register</button>
            </div>
        </div>
    )
}

export default Home