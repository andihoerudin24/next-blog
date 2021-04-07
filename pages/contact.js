import ContactForm from "../components/contact/contact-form"
import Head from 'next/head'
import {Fragment} from 'react'
const ContactPage = () =>{
     return(
         <Fragment>
             <Head>
                 <title>Contact me</title>
                 <meta name="description" content="send me your message"/>
             </Head>
         <ContactForm/>
         </Fragment>
     )
}
export default ContactPage