"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail,Instagram, Download, ArrowUpRight, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/portfolio";

const nav=[['/','Home'],['/about','About'],['/experience','Experience'],['/education','Education'],['/projects','Projects'],['/certifications','Certifications'],['/skills','Skills'],['/blog','Blog'],['/contact','Contact']];
export function Header(){const p=usePathname();const [open,setOpen]=useState(false);return <header className="site-header"><Link className="brand" href="/"><span>K</span> Krishnalal.</Link><nav className={open?'nav open':'nav'}>{nav.map(([h,l])=><Link key={h} className={p===h?'active':''} href={h} onClick={()=>setOpen(false)}>{l}</Link>)}</nav><a className="resume-pill" href="/files/Krishnalal-S-Resume.pdf" target="_blank">Resume <Download size={15}/></a><button className="menu" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button></header>}
export function Footer(){return <footer><div><b>Krishnalal S</b><p>Software Developer · Full-Stack · AI Engineer</p></div><div className="footer-links"><a href={profile.github} target="_blank">GitHub</a><a href={profile.linkedin} target="_blank">LinkedIn</a><a href={profile.instagram} target="_blank">Instagram</a><a href={`mailto:${profile.email}`}>Email</a></div><small>© 2026 · Built with Next.js & TypeScript</small></footer>}
export function Socials(){return <div className="socials"><a href={profile.github} target="_blank"><Github size={18}/> GitHub</a><a href={profile.linkedin} target="_blank"><Linkedin size={18}/> LinkedIn</a><a href={profile.instagram} target="_blank"><Instagram size={18}/> Instagram</a><a href={`mailto:${profile.email}`}><Mail size={18}/> Email</a></div>}
export function PageTitle({eyebrow,title,lead}:{eyebrow:string,title:string,lead:string}){return <div className="page-title reveal"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{lead}</p></div>}
export function Arrow(){return <ArrowUpRight size={18}/>}
export function Location(){return <span className="location"><MapPin size={16}/>{profile.location}</span>}
