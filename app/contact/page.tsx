'use client';

import {PageTitle,Socials} from '../../components/Site';
import {profile} from '../../data/portfolio';
import {Mail,MapPin,Send} from 'lucide-react';
import {useState} from 'react';

export default function Contact(){
  return <main className="inner">

    <PageTitle
      eyebrow="06 · Contact"
      title="Let’s build something useful."
      lead="I’m interested in software development, full-stack and AI engineering opportunities, collaborations and ambitious technical projects."
    />

    <section className="contact-card">
      <div>
        <span className="eyebrow">START A CONVERSATION</span>
        <h2>Have an opportunity<br/>or an idea?</h2>
        <p>The easiest way to reach me is by email or LinkedIn.</p>

        <a className="mail-link" href={`mailto:${profile.email}`}>
          <Mail/> {profile.email}
        </a>

        <p className="contact-location">
          <MapPin size={18}/>{profile.location}
        </p>

        <Socials/>
      </div>

      <div className="contact-mark">
        KS<span>.</span>
      </div>
    </section>

    <MessageForm/>

  </main>
}


function MessageForm(){

  const [form,setForm]=useState({
  name:'',
  email:'',
  subject:'',
  message:'',
  website:''
});

  const [status,setStatus]=useState<'idle'|'sending'|'success'|'error'>('idle');
const [errorMessage,setErrorMessage]=useState('');

  function handleChange(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  }

  async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();

  setStatus('sending');
  setErrorMessage('');

  try {
    const response = await fetch('/api/contact',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(form)
    });

    const data = await response.json();

    if(!response.ok){
      throw new Error(data.error || 'Unable to send message.');
    }

    setStatus('success');

    setForm({
  name:'',
  email:'',
  subject:'',
  message:'',
  website:''
});

  } catch(error){
    setStatus('error');

    setErrorMessage(
      error instanceof Error
        ? error.message
        : 'Something went wrong. Please try again.'
    );
  }
}

  return <section className="message-section reveal">

    <div className="message-heading">
      <div>
        <span className="eyebrow">SEND A MESSAGE</span>

        <h2>Prefer to write directly?</h2>

        <p>
          Send me a message about an opportunity, project,
          collaboration or anything you&apos;d like to discuss.
        </p>
      </div>

      <span className="message-number">
        07 / CONNECT
      </span>
    </div>


    <form className="message-form" onSubmit={handleSubmit}>
        <input
  type="text"
  name="website"
  value={form.website}
  onChange={handleChange}
  tabIndex={-1}
  autoComplete="off"
  className="contact-honeypot"
/>
      <div className="message-row">

        <div className="message-field">
          <label htmlFor="name">YOUR NAME</label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>


        <div className="message-field">
          <label htmlFor="email">EMAIL ADDRESS</label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

      </div>


      <div className="message-field">
        <label htmlFor="subject">SUBJECT</label>

        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Opportunity, project, collaboration..."
          value={form.subject}
          onChange={handleChange}
          required
        />
      </div>


      <div className="message-field">
        <label htmlFor="message">MESSAGE</label>

        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell me what you have in mind..."
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>


      <div className="message-bottom">

        <p>
          Your message will be sent directly to my inbox.
        </p>

        <button
  type="submit"
  className="message-send"
  disabled={status==='sending'}
>
  {status==='sending' ? 'Sending...' : 'Send message'}
  <Send size={16}/>
</button>

      </div>


      {status==='success' &&
  <div className="message-success">
    ✓ Message sent successfully. Thanks for reaching out!
  </div>
}

{status==='error' &&
  <div className="message-error">
    {errorMessage}
  </div>
}

    </form>

  </section>
}