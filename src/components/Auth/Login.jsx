import { useState } from "react";


const Login = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [emailError, setEmailError] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()
  if(emailError || passwordError){
    alert(emailError)
    return
  }
  }
  // uncontrolled component => controlled component
  const handlePassword = (event) => {
    const passwordInput = event.target.value
    setPassword(passwordInput)
    if (passwordInput.length < 6) {
      setPasswordError('Password must be at least 6 characters long')
    } else if (!/.+[A-Z].+/.test(passwordInput)) {
      setPasswordError('Pass must contain at least 1 capital')
    }
    else {
      setPasswordError('')
    }

  }
  const handleEmail = (event) => {
    const emailInput = event.target.value
    setEmail(emailInput)
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput)) {
      setEmailError('Please provide a valid email')
    } else {
      setEmailError('')
    }
  }
  return <form onSubmit={handleSubmit}>
    <div className="relative z-0 w-full mb-6 group mt-20">
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleEmail}
        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0  peer ${email ? emailError ? 'border-red-500' : 'border-green-500' : 'border-gray-300 focus:border-blue-600'} `}
        placeholder=" "
        required=""
      />
      <label
        htmlFor="email"
        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Email Address
      </label>
      {emailError && <span className="text-red-500">{emailError}</span>}
    </div>

    <div className="relative z-0 w-full mb-6 group mt-20">
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={handlePassword}
        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 ${password ? passwordError ? 'border-red-500' : 'border-green-500' : 'border-gray-300 focus:border-blue-600'}  peer`}
        placeholder=" "
        required=""
      />
      <label
        htmlFor="password"
        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Password
      </label>
      {passwordError && <span className="text-red-500">{passwordError}</span>}
    </div>
    <button type="submit">Login</button>
  </form>;
};

export default Login;
