import world from './assets/world.gif'
import './Contact.scss';
import { useState } from "react";
import Swal from 'sweetalert2'

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setname] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [active, setActive] = useState(true);

  const handlePress = (e: any) => {
    if(e.target.innerText.length > 1){
      e.target.parentElement.nextElementSibling.style.display = 'none';
    }else {
      e.target.parentElement.nextElementSibling.style.display = 'block';
      e.target.style.width = 'unset'
    }

    if(e.target.offsetWidth > e.target.parentElement.parentElement.parentElement.offsetWidth / 2){
      e.target.style.width = e.target.parentElement.parentElement.parentElement.offsetWidth / 2+ 'px'
    }

   setTimeout(() => {
    if(e.target.id == 'email'){
      setEmail(e.target.innerText)
    }

    if(e.target.id == 'name'){
      setname(e.target.innerText)
    }

    if(e.target.id == 'subject'){
      setSubject(e.target.innerText)
    }

    if(e.target.id == 'body'){
      setBody(e.target.innerText)
    }

    if(email.length && body.length != 0) {
      setActive(false)
    }else {
      setActive(true)
    }
   }, 0);
  }

  const handleClick = (e: any) => {
    e.target.previousElementSibling.children[1].focus()
  }

  const apiKey = 'e6c4e7ff59044ca6aa2a14c74e9eb8f2	';
  const apiURL = 'https://emailvalidation.abstractapi.com/v1/?api_key=' + apiKey
 
  const sendEmailValidationRequest = async (email: string) => {
    try {
        const response = await fetch(apiURL + '&email=' + email);
        const data = await response.json();
        const isValidSMTP = data.is_smtp_valid.value;
        const isValidFORMAT = data.is_valid_format.value;
        if (isValidSMTP && isValidFORMAT) {
          window.location.href = `mailto:joshdesierto@gmail.com?subject=${subject} from ${name}&body=${body}`
        } else {
          if(!isValidFORMAT) {
            Swal.fire({
              title: 'Error!',
              text: 'Invalid email format',
              icon: 'error',
            })
          }else if(!isValidSMTP){
            Swal.fire({
              title: 'Error!',
              text: 'Invalid email address',
              icon: 'error',
            })
          }
        }
    } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: 'Email is required',
          icon: 'error',
        })
        throw error;
    }
  }

  return  <div id="contact" className="pt-[75px] px-[16px] md:px-[58px] lg:px-[100px] xl:px-[180px] 2xl:px-[300px]">
            <div className="text-white">Get in touch.</div>
            <div className="text-white text-[26px] font-bold tracking-wide">Contact</div>
            <div className='grid grid-cols-techonolgy-layout gap-[20px] items-center py-[50px]'>
              <div className="m-h-[500px] box1 py-[20px] px-[30px] border border-primary rounded-[8px]">
                <div className="text-white flex gap-[10px] mb-[20px]">
                  <span className='text-text1'>import</span>
                  <span className='text-text2'>EmailMe</span>
                  <span className='text-text1'>from</span>
                  <span className='text-text3'>'./Emailer'</span>
                </div>
                <div className="text-white flex gap-[10px]">
                  <span className='text-text4'>class</span>
                  <span className='text-text5'>Email</span>
                  <span className='bracket-open'></span>
                </div>
                <div className="text-white flex gap-[10px] ml-[15px]">
                  <span>
                    <span className='text-text4'>constructor</span>
                    <span className='text-text6'>()</span>
                  </span>
                  <span className='bracket-open'></span>
                </div>
                <div className="text-white flex gap-[10px] ml-[30px]">
                  <span>
                    <span className='text-text4'>this</span>
                    <span>.</span>
                    <span className='text-text1'>name</span>
                  </span>
                  <span>=</span>
                  <span className='flex flex-wrap text-text3'>
                    <span>'</span>
                    <span id='name' contentEditable="true" suppressContentEditableWarning={true} className='focus:outline-none cursor-pointer min-w-[10px]' onKeyDown={e => handlePress(e)}></span>
                    <span>'</span>
                    <span className='text-white'>;</span>
                  </span>
                  <span className='text-disabled cursor-pointer' onClick={e => handleClick(e)}>// Input your Name</span>
                </div>
                <div className="text-white flex gap-[10px] ml-[30px]">
                  <span>
                    <span className='text-text4'>this</span>
                    <span>.</span>
                    <span className='text-text1'>email</span>
                  </span>
                  <span>=</span>
                  <span className='flex flex-wrap text-text3'>
                    <span>'</span>
                    <span id='email' contentEditable="true" suppressContentEditableWarning={true} className='focus:outline-none cursor-pointer min-w-[10px]' onKeyDown={e => handlePress(e)}></span>
                    <span>'</span>
                    <span className='text-white'>;</span>
                  </span>
                  <span className='text-disabled cursor-pointer' onClick={e => handleClick(e)}>// Input your Email</span>
                </div>
                <div className="text-white flex gap-[10px] ml-[15px] mb-[20px]">
                  <span className='bracket-close'></span>
                </div>
                <div className="text-white flex gap-[10px] ml-[15px]">
                  <span>
                    <span className='text-text5'>emailBody</span>
                    <span className='text-text6'>()</span>
                  </span>
                  <span className='bracket-open'></span>
                </div>
                <div className="text-white flex gap-[10px] ml-[30px]">
                  <span className='text-text1'>return</span>
                  <span className='bracket-open'></span>
                </div>
                <div className="text-white flex gap-[10px] ml-[45px]">
                  <span className='text-text3'>'subject'</span>
                  <span>:</span>
                  <span className='flex flex-wrap text-text3'>
                    <span>'</span>
                    <span id='subject' contentEditable="true" suppressContentEditableWarning={true} className='focus:outline-none cursor-pointer min-w-[10px]' onKeyDown={e => handlePress(e)}></span>
                    <span>'</span>
                    <span className='text-white'>,</span>
                  </span>
                  <span className='text-disabled cursor-pointer' onClick={e => handleClick(e)}>// Input subject</span>
                </div>
                <div className="text-white flex gap-[10px] ml-[45px]">
                  <span className='text-text3'>'body'</span>
                  <span>:</span>
                  <span className='flex flex-wrap text-text3'>
                    <span>'</span>
                    <span id='body' contentEditable="true" suppressContentEditableWarning={true} className='focus:outline-none cursor-pointer min-w-[10px]' onKeyDown={e => handlePress(e)}></span>
                    <span>'</span>
                    <span className='text-white'>,</span>
                  </span>
                  <span className='text-disabled cursor-pointer' onClick={e => handleClick(e)}>// Input body</span>
                </div>
                <div className="text-white flex gap-[10px] ml-[30px]">
                  <span className='bracket-close'></span>
                </div>
                <div className="text-white flex gap-[10px] ml-[15px]">
                  <span className='bracket-close'></span>
                </div>
                <div className="text-white flex gap-[10px] mb-[30px]">
                  <span className='bracket-close'></span>
                </div>
                <span className='flex  gap-[10px] justify-end items-center'>
                   <span className='text-disabled'>/* Send your Message */</span>
                   <button id="deploy" onClick={(e: any ) => sendEmailValidationRequest(email)} className="px-[24px] py-[12px] bg-primary float-right" disabled={active}> Deploy</button>
                </span>
              </div>
              <div className='relative h-[500px] bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(${world})`}}></div>
            </div>
          </div>
}

export default Contact;