

/**
 * Footer component of the App.
 *    
 * @returns     component   Returns the Footer component
 */
export default function Footer() {
    
    return (
        <footer className="bg-white px-10 border-t">
            <div className="max-w-7xl mx-auto py-3" aria-label="Global">
                <div className="flex justify-between">
                    <div> 
                        <img className="opacity-60" src="logo.png" alt="logo"/> 
                    </div>
                    <div className="my-auto opacity-75 text-sm">
                        Made with ❤️ by Group 2 BSCS 4-3 © 2021.
                    </div>
                </div>
            </div>
        </footer>
    )
}