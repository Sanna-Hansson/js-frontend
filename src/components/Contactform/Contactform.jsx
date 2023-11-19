import React, { useState } from 'react'
import './Contactform.css'

import img_contacts from '../../assets/images/group.jpg'

const Contactform = () => {

    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [message, setMessage] = useState('')
    const [messageError, setMessageError] = useState('')

    const [errorMessage, setErrorMessage] = useState('')



    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Handling submit');

        const user = { name, email, message }
        console.log('User:', user);
        const json = JSON.stringify(user)

        const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: json
        })

        switch (result.status) {

            case 200:
                console.log(`Formuläret har skickats iväg korrekt`)
                setMessage("allt gick bra")
                break;

            case 201:
                console.log(`En ny användare har lagts till korrekt`)
                break;
            case 400:
                console.log(`ojdå, något blev fel .. ${await result.text()}`)
                break;
            case 409:
                console.log(`ojdå, något blev fel .. ${await result.text()}`)
                break;
        }
    }

    const validateLength = (value, minLength = 1) => {
        return value.length < minLength ? true : false
    }
    const handleChange = (e) => {
        switch (e.target.name) {

            case 'name':
                setName(e.target.value)
                setNameError(validateLength(e.target.value, 2))
                break;
            case 'email':
                setEmail(e.target.value)
                setEmailError(validateLength(e.target.value, 5))
                break;
            case 'message':
                setMessage(e.target.value)
                setMessageError(validateLength(e.target.value, 8))
                break;
        }



    }



    return (
        <section className="contact-form">
            <div className="container">
                <div className="content-box border">
                    <div className="contact-head">
                        <h2 className="h2-contact-form">Leave us a message <br />
                            for any information.</h2>
                    </div>
                    <div className="contact-form-input">

                        <form noValidate onSubmit={handleSubmit}>
                            <div>
                                <input className="form-input" name='name' type="text" placeholder="Name*" value={name} onChange={(e) => handleChange(e)} />
                                <span className='item' id={`${nameError ? 'error' : ''}`}>{`  ${nameError ? 'name must have least 2 characters' : ''}`}</span>

                            </div>

                            <div>
                                <input className="form-input" name='email' type="email" value={email} onChange={(e) => handleChange(e)} placeholder="Email*" />
                                <span id={`${emailError ? 'error' : ''}`}>{` ${emailError ? 'The emailadress must have at least 5 characters' : ''}`}</span>

                            </div>

                            <div>
                                <input className="form-input form-input-message" name='message' type="text" value={message} onChange={(e) => handleChange(e)} placeholder="Your Message*" />
                                <span id={`${messageError ? 'error' : ''}`}>{` ${messageError ? 'The message must have at least 8 characters' : ''}`}</span>

                            </div>

                            <div>
                                <button className="btn-yellow btn-signup btn-submit" type="submit"> Send Message <i
                                    className="fa-regular fa-arrow-up-right"></i></button>
                            </div>

                        </form>

                    </div>


                </div>
            </div>
            <img src={img_contacts} alt="" />
        </section>


    )
}

export default Contactform