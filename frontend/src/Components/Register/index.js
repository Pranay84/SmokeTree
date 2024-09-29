import { useState } from "react"
import './index.css'

const Register = () => {
    const [uname, setUname] = useState()
    const [home, setHome] = useState()
    const [area, setArea] = useState()
    const [city, setCity] = useState()
    const [district, setDistrict] = useState()
    const [state, setState] = useState()
    const [country, setCountry] = useState()
    const [pin, setPin] = useState()

    const submission = async event => {
        event.preventDefault(0)
        const userData = {
            uname
        }

        const address = {
            home,
            area,
            city,
            district,
            state,
            country,
            pin
        }

        const user_add_Data = {
            uname,
            address
        }

        console.log(user_add_Data)

        const url = 'http://localhost:3000/register'
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user_add_Data)
        }

        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
    }

    return(
        <div className="mainRegContainer" >
            <h1 className="heading">Register</h1>
            <div className="data_container">
                <form onSubmit={submission}>
                    <div>
                        <label>Username: </label>
                        <input placeholder="Enter your name" onChange={(event) => setUname(event.target.value)} className="input" />
                    </div>
                    <div>
                        <p className="address" >Address</p>
                        <div>
                            <div className="inputContainer" >
                                <label>Home/Flat.no: </label>
                                <input placeholder="Enter your Flat address" onChange={(event) => setHome(event.target.value)} className="input" />
                            </div>
                            <div className="inputContainer" >
                                <label>Area/Apartment: </label>
                                <input placeholder="Enter your Landmark address" onChange={(event) => setArea(event.target.value)} className="input" />
                            </div>
                            <div className="inputContainer" >
                                <label>City: </label>
                                <input placeholder="Enter your city name" onChange={(event) => setCity(event.target.value)} className="input" />
                            </div>
                            <div className="inputContainer" >
                                <label>District: </label>
                                <input placeholder="Enter your district name" onChange={(event) => setDistrict(event.target.value)} className="input" />
                            </div>
                            <div className="inputContainer" >
                                <label>State: </label>
                                <input placeholder="Enter your state name" onChange={(event) => setState(event.target.value)} className="input" />
                            </div>
                            <div className="inputContainer" >
                                <label>Country: </label>
                                <input placeholder="Enter your country name" onChange={(event) => setCountry(event.target.value)} className="input" />
                            </div>
                            <div className="inputContainer" >
                                <label>PIN: </label>
                                <input placeholder="Enter your PIN code" onChange={(event) => setPin(event.target.value)} className="input" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="button1" >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Register