import { StyledContactMe } from './ContactMe.styled'
import { StyledKeyButton } from '../../styles/Buttons'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'

export const ContactMe = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const emailAddressElement = useRef();
    const alertBox = useRef();
    const [alertMessage, setAlertMessage] = useState('');

    function sendToEmail(e) {
        e.preventDefault();

        if(name === '' || email === '' || message === '') {
            alert('Please fill in all the fields');
            return;
        }

        const emailParameters = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send('service_mcog8yg', 'template_fnmoadf', emailParameters, 'OUCp05SWXVPkHeazD')
        .then(() => {
            setAlertMessage('Email sent')
            alertBox.current.style.left = '0'
            setName('')
            setEmail('')
            setMessage('')
            return;
        }, (err) => {
            setAlertMessage('Error sending email. Please try again.')
            alertBox.current.style.left = '0'
            console.log('Error sending email: ', err)
        })
    }

    function copyEmail() {
        const emailAddress = emailAddressElement.current.innerHTML;
        navigator.clipboard.writeText(emailAddress).then(
            setAlertMessage('Copied to clipboard'),
            alertBox.current.style.left = '0'
            )
    }

    function closeAlert() {
        alertBox.current.style.left = '-150%';
    }

    return(
        <StyledContactMe>
            <h2>Contact me</h2>
            <div className='contact-container'>
                <div className='contact-info'>
                    <p><em>I'm always open to new opportunities and building new relationships in the tech industry. I look forward to hearing from you soon!</em></p>

                    <ul className='contact-list'>
                        <li className='contact-option'>
                            <MdOutlineMarkEmailUnread className='contact-icon' />
                            <p className='contact-description' title='copy email address' onClick={copyEmail} ref={emailAddressElement} >janaina.marostegadejesus@gmail.com</p>
                            <div ref={alertBox} className='custom-alert-container'>
                                <div className='custom-alert'>
                                    <p>{alertMessage}</p>
                                    <hr className='alert-box-line' />
                                    <button onClick={closeAlert} className='close-custom-alert'>close</button>
                                </div>
                                
                            </div>
                        </li>

                        <li className='contact-option'>
                            <FaGithub className='contact-icon' />
                            <a className='contact-description' title='my Github profile' href="https://github.com/Janaina-MJ" target='blank' >@Janaina-MJ</a>
                        </li>

                        <li className='contact-option'>
                            <FaLinkedin className='contact-icon' />
                            <a className='contact-description' title='my LinkedIn profile' href="https://www.linkedin.com/in/janaina-mj" target='blank' >@janaina-mj</a>
                        </li>
                    </ul>
                </div>

                <div className='form-container'>
                <form className='form' onSubmit={sendToEmail}>
                        <div className='field-set'>
                            <label htmlFor="name" className='field-title'> Name</label>
                            <input 
                                className='fields' 
                                type="text" 
                                id='name' 
                                name='name' 
                                placeholder='Enter your name' 
                                onChange={(e)=> setName(e.target.value)}
                                value={name}
                                required />
                        </div>

                        <div className='field-set'>
                            <label htmlFor="email" className='field-title'>Email</label>
                            <input 
                                className='fields' 
                                type="email" 
                                id='email' 
                                name='email' 
                                placeholder='Enter your email' 
                                onChange={(e)=> setEmail(e.target.value)}
                                value={email}
                                required />
                        </div>

                        <div className='field-set'>
                            <p className='message-title field-title'>Message</p>
                            <textarea 
                                className='fields message-text' 
                                name="message" 
                                placeholder='Enter your message here'
                                onChange={(e)=> setMessage(e.target.value)}
                                value={message}
                                required >
                            </textarea>
                        </div>

                        <div className='field-set'>
                            <StyledKeyButton className='submit-form-button' type='submit'>Send <FiSend /></StyledKeyButton>
                        </div>

                        <div ref={alertBox} className='custom-alert-container'>
                            <div className='custom-alert'>
                                <p>{alertMessage}</p>
                                <hr className='alert-box-line' />
                                <button onClick={closeAlert} className='close-custom-alert'>close</button>
                            </div>
                        </div>
                </form>
                    
                </div>
            </div>
           
           
            
        </StyledContactMe>
    )

}