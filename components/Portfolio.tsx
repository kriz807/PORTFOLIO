"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, X, Terminal, Download, Sparkles } from "lucide-react";
import { profile, stats, experience, projects, skills, certificates } from "@/data/portfolio";

const nav = ["About","Work","Experience","Skills","Credentials","Contact"];

function Reveal({children, className=""}:{children:React.ReactNode,className?:string}){
  return <div className={`reveal ${className}`}>{children}</div>
}

export default function Portfolio(){
  const [menu,setMenu]=useState(false);
  const [cmd,setCmd]=useState(false);
  const [activeCert,setActiveCert]=useState<null|typeof certificates[0]>(null);
  useEffect(()=>{
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in")}),{threshold:.12});
    document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
    const key=(e:KeyboardEvent)=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();setCmd(v=>!v)} if(e.key==="Escape"){setCmd(false);setMenu(false);setActiveCert(null)}};
    window.addEventListener("keydown",key); return()=>{io.disconnect();window.removeEventListener("keydown",key)};
  },[]);
  const go=(id:string)=>{setMenu(false);setCmd(false);document.getElementById(id.toLowerCase())?.scrollIntoView({behavior:"smooth"})};
  return <main>
    <div className="noise"/><div className="orb orb-a"/><div className="orb orb-b"/>
    <header className="nav-wrap"><nav className="nav shell">
      <a href="#top" className="brand"><span>K</span> KRISHNALAL</a>
      <div className="nav-links">{nav.map(n=><button key={n} onClick={()=>go(n)}>{n}</button>)}</div>
      <button className="command" onClick={()=>setCmd(true)}>⌘ K</button>
      <button className="menu" aria-label="Menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
    </nav>{menu&&<div className="mobile-nav">{nav.map(n=><button key={n} onClick={()=>go(n)}>{n}</button>)}</div>}</header>

    <section id="top" className="hero shell">
      <div className="hero-copy">
        <Reveal><div className="availability"><i/> OPEN TO SOFTWARE & AI ROLES</div></Reveal>
        <Reveal><p className="eyebrow">SOFTWARE ENGINEER · APPLIED AI</p></Reveal>
        <Reveal><h1>Building software<br/>that <em>thinks</em> and<br/><span>works.</span></h1></Reveal>
        <Reveal><p className="lead">{profile.intro}</p></Reveal>
        <Reveal className="hero-actions"><button className="primary" onClick={()=>go("Work")}>Explore my work <ArrowDownRight size={18}/></button><a className="secondary" href="/files/Krishnalal-S-Resume.pdf" target="_blank">Resume <Download size={16}/></a></Reveal>
      </div>
      <Reveal className="hero-visual">
        <div className="portrait-frame"><div className="portrait-grid"/><Image src="/images/profile-cutout.png" alt="Krishnalal S" width={1024} height={1024} priority/><div className="float-chip chip-one"><Terminal size={14}/> full_stack.dev</div><div className="float-chip chip-two"><Sparkles size={14}/> applied_ai</div></div>
        <div className="code-line"><span>01</span><code>const engineer = &#123; curiosity: true, shipping: true &#125;;</code></div>
      </Reveal>
    </section>

    <div className="marquee"><div>REACT · NEXT.JS · TYPESCRIPT · PYTHON · NODE.JS · EXPRESS · MONGODB · TENSORFLOW · PYTORCH · RAG · LLM · REST APIs · &nbsp; REACT · NEXT.JS · TYPESCRIPT · PYTHON · NODE.JS · EXPRESS · MONGODB · TENSORFLOW · PYTORCH · RAG · LLM · REST APIs ·</div></div>

    <section id="about" className="section shell about">
      <Reveal><p className="section-tag">01 / ABOUT</p><h2>I turn technical ideas into <span>usable systems.</span></h2></Reveal>
      <div className="about-grid"><Reveal><p className="big-copy">Computer Science engineer working across full-stack development and applied AI. I care about clean interfaces, dependable APIs and machine-learning systems that solve a real problem—not technology for its own sake.</p></Reveal>
      <Reveal><div className="about-note"><MapPin size={18}/><p>Based in <b>{profile.location}</b>. B.Tech in Computer Science & Engineering with a minor in Electronics & Communication.</p></div></Reveal></div>
      <div className="stats">{stats.map(s=><Reveal key={s.label} className="stat"><strong>{s.value}</strong><span>{s.label}</span></Reveal>)}</div>
    </section>

    <section id="work" className="section shell">
      <Reveal><p className="section-tag">02 / SELECTED WORK</p><div className="section-head"><h2>Projects with <span>engineering depth.</span></h2><p>Selected work across products, APIs, machine learning and intelligent systems.</p></div></Reveal>
      <div className="projects">{projects.map((p,i)=><Reveal key={p.title} className="project-card"><div className="project-index">{p.accent}</div><div className="project-main"><p className="kicker">{p.kicker}</p><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.stack.map(x=><span key={x}>{x}</span>)}</div></div><div className="project-side"><strong>{p.metric}</strong><a href={p.github} target="_blank" rel="noreferrer" aria-label={`Open ${p.title} on GitHub`}><ArrowUpRight/></a></div></Reveal>)}</div>
    </section>

    <section id="experience" className="section shell">
      <Reveal><p className="section-tag">03 / EXPERIENCE</p><h2>Where I&apos;ve <span>built & learned.</span></h2></Reveal>
      <div className="timeline">{experience.map((e,i)=><Reveal key={e.company} className="timeline-row"><div className="timeline-num">0{i+1}</div><div><p className="period">{e.period}</p><h3>{e.company}</h3><h4>{e.role}</h4></div><p className="timeline-text">{e.text}</p></Reveal>)}</div>
    </section>

    <section id="skills" className="section shell skills-section">
      <Reveal><p className="section-tag">04 / CAPABILITIES</p><div className="section-head"><h2>A practical <span>engineering toolkit.</span></h2><p>No percentage bars. Just technologies I use, learn and build with.</p></div></Reveal>
      <div className="skill-grid">{skills.map((s,i)=><Reveal className="skill-card" key={s.group}><span>0{i+1}</span><h3>{s.group}</h3><div>{s.items.map(x=><b key={x}>{x}</b>)}</div></Reveal>)}</div>
    </section>

    <section id="credentials" className="section shell">
      <Reveal><p className="section-tag">05 / CREDENTIALS</p><div className="section-head"><h2>Learning, validated.</h2><p>A selection from my training, workshops and technical programs.</p></div></Reveal>
      <div className="cert-grid">{certificates.map(c=><Reveal key={c.title} className="cert" ><button onClick={()=>setActiveCert(c)}><div className="cert-img"><Image src={c.image} alt={c.title} fill sizes="(max-width: 700px) 100vw, 33vw"/></div><div><span>CERTIFICATE</span><h3>{c.title}</h3><p>View credential <ArrowUpRight size={14}/></p></div></button></Reveal>)}</div>
    </section>

    <section id="contact" className="contact section"><div className="shell"><Reveal><p className="section-tag">06 / CONTACT</p><h2>Have a role, project<br/>or idea? <span>Let&apos;s talk.</span></h2><p className="contact-copy">I&apos;m interested in software development, full-stack engineering and applied AI opportunities where I can build, learn and contribute.</p><a className="email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight/></a><div className="socials"><a href={profile.github} target="_blank"><Github/>GitHub</a><a href={profile.linkedin} target="_blank"><Linkedin/>LinkedIn</a><a href={`mailto:${profile.email}`}><Mail/>Email</a></div></Reveal></div></section>

    <footer className="footer shell"><div><b>KRISHNALAL S</b><span>Software Developer · AI Engineer</span></div><p>Designed & engineered with curiosity.</p><button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>Back to top ↑</button></footer>

    {cmd&&<div className="modal-bg" onClick={()=>setCmd(false)}><div className="palette" onClick={e=>e.stopPropagation()}><div className="palette-title"><Terminal size={18}/> Quick navigation <kbd>ESC</kbd></div>{nav.map(n=><button key={n} onClick={()=>go(n)}><span>→</span>{n}</button>)}<a href="/files/Krishnalal-S-Resume.pdf" target="_blank"><span>↓</span>Download resume</a></div></div>}
    {activeCert&&<div className="modal-bg" onClick={()=>setActiveCert(null)}><div className="cert-modal" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setActiveCert(null)}><X/></button><Image src={activeCert.image} alt={activeCert.title} width={1200} height={850}/><h3>{activeCert.title}</h3></div></div>}
  </main>
}
