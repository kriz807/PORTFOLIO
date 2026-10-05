import type { Metadata } from 'next'; import './globals.css'; import {Header,Footer} from '../components/Site';
export const metadata:Metadata={title:{default:'Krishnalal S — Software Developer & AI Engineer',template:'%s · Krishnalal S'},description:'Portfolio of Krishnalal S — software developer, full-stack engineer and applied AI builder based in Kerala, India.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><div className="noise"/><Header/>{children}<Footer/></body></html>}
