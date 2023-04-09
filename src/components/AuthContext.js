import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const [change, setOnChange] = useState(false);
    
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [phone_number, setPhoneNumber] = useState();

    // Login
    const login = ()=>{
        const datat = {
            email: email,
            password: password
    }
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datat)
    })
    .then(res => res.json())
    .then((response) => {
        console.log(response)
        setOnChange(!change)
        if(response.error){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: response.error,
              })
        }else if (response.user){
            setUser(response)
            sessionStorage.setItem('user', JSON.stringify(response.user))
            sessionStorage.setItem('jwtToken', response.jwt)

            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: 'Welcome to your dashboard',
                })
            navigate('/dashboard')
        }else{
            console.log("Not logged in, something went wrong");
    }
    })
   }

    // Register
    const register = ()=>{
        const data = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            phone_number: phone_number
    }
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((response) => {
        setOnChange(!change)
        if(response.error){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: response.error,
              })
             } else {
            Swal.fire({
                icon: 'success',
                title: 'Registration Successful',
                text: 'Please login to continue',
                })
                navigate('/login')
             }
    })
    }

    // Logout
    const logout = ()=>{
     sessionStorage.clear();
        setUser(null);
        navigate('/login')
    }
    // check if user is logged in
    useEffect(() => {
        fetch('/loggedin', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then((response) => {
            console.log(response)
            setUser(response)
        })
    }, [change])

    const contextData = {
        user,
        login,
        register,
        logout,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

