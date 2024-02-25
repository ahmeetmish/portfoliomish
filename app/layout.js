import "./styles/reset.css"
import "./styles/globals.css"

import { Poppins } from "next/font/google"

import Footer from "./components/Footer"
import AnimatedCursor from "react-animated-cursor"

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] })

export const metadata = {
  title: "Portfoliomish",
  description: "@codingwithmish personal portfolio!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AnimatedCursor innerSize={7}
          outerSize={35}
          innerScale={1}
          outerScale={1.3}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: '#bbbaba'
          }}
          outerStyle={{
            border: '3px solid #bebebe',
            mixBlendMode: 'exclusion'
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  )
}