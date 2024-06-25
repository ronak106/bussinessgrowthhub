import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from 'react-router-dom';


export default function Contact() {
  return (
    <div className='contactpage'>
      <p className='head1'> Contact Us</p>
      <p className='insideinfo'>
        Thank you for your interest in Bussiness Growth Hub. Whether you have a question about our services, need more information, or are ready to start your business growth journey with us, we're here to help.

        <p>
          <p className='head2'>How to Reach Us
          </p>
          <p className='head2'>
            Phone: <strong>9999900999</strong>
          </p>
          <p className='head2'>
            Email: <strong> Bussinessgrowthhub2gmail.com
            </strong></p>
          <p className='head2'>
            Address: <strong> Surat,Gujarat
            </strong></p>
          <p className='head2'>
            Office Hours: <strong>9:00 AM to 7:00 PM</strong></p>
        </p>
        <p>
          <h3>
            Connect With Us Online
          </h3>
          <p className='head2'>
            Follow us on social media for the latest updates and insights:
          </p>
          <div className="contactinfo">
            <NavLink to={"https://www.instagram.com/somnathgroupsurat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="} ><InstagramIcon /></NavLink>

            <NavLink to={"https://www.facebook.com/profile.php?id=100095312258779"} ><FacebookIcon /></NavLink>
            <NavLink to={"https://www.linkedin.com/in/somnathtempleofficial"}><LinkedInIcon /></NavLink>
          </div>
          Get in Touch

          Ready to discuss how we can help you achieve your business goals? Fill out the form below, and one of our experts will get back to you shortly.
        </p>
</p>


    </div>
  )
}
