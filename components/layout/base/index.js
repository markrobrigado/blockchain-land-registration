import { Header, Footer } from "@components/common"
import { Web3Provider } from "@components/providers"

export default function BaseLayout({children}) {

    return (
        <Web3Provider>
            <Header/>

            <body className="bg-white max-w-7xl mx-auto py-7"> 
                {children}
            </body>
        
            <Footer/>
        </Web3Provider>
    )
}