import './index.scss'


const Contact = () => {

    return (
    <>
        <div className = "contact-layout">
            <div className = 'container contact-page'>
                <div className = 'backgroundclr-contact'>
                    <div className = 'heading'>
                       <h1 className = 'text-zone-h1'>Contact Me</h1> 
                    </div>
                    <div className = 'text-zone-p'>
                        <p>
                            I am open to networking and interested to hear from anybody about job opportunities, ideas or even games. I look forward to having a chat with you! 
                        </p>
                        <div className = 'contact-form'>
                            <form>
                                <ul>
                                    <li className = 'half text-area1'>
                                        <input type = 'text' name= 'Name' placeholder = 'Name' required/>
                                    </li>
                                    <li className = 'half text-area1'>
                                        <input type = 'email' name= 'Email' placeholder = 'Email' required/>
                                    </li>
                                    <li className = 'text-area1'>
                                        <input type = 'text' name = 'Subject' placeholder = 'Subject' required/>
                                    </li>
                                    <li>
                                        <textarea type = 'text' name = 'Message' placeholder = "Message" required/>
                                    </li>
                                    <li>
                                        <input type = 'submit' className = 'flat-button' value = 'Send'/>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
    )

}

export default Contact