/**
 * Admin header component of the App.
 *    
 * @returns     component   Returns the Admin header component
 */

import { useWeb3 } from "@components/providers"
import { useAccount } from "@components/hooks/web3/useAccount"
import { AddPropertyModal } from "@components/properties"
import { useState } from "react"

export default function AdminHeader() {

    // Set modal visibility state
    const [showModal, setShowModal] = useState(null)
    // Web3 component constants
    const { connect, isLoading, isWeb3Loaded } = useWeb3()
    // MetaMask account constant
    const { account } = useAccount()

    return (
        <header className="bg-white px-10 border-b">
            <nav className="max-w-7xl mx-auto py-3" aria-label="Global">
                <div className="flex justify-between items-center">
                    <div>
                        <a href="/admin"><img src="logo.png"/></a>
                    </div>
                    <div className="my-auto">
                    {
                        // Checks if Web3 is loading
                        isLoading ? 
                        <button 
                            className="bg-red-500 hover:bg-red-600 focus:ring-red-200 focus:ring-4 text-white font-medium rounded-lg text-sm ml-48 p-2 text-center"
                            onClick={connect}>
                            Loading...
                        </button> : 

                        // If Web3 is loaded, check for MetaMask account data
                        isWeb3Loaded ? account.data ? account.isAdmin ?

                        // Account is LRA
                        <div>
                            <button
                                className="text-black hover:text-red-500 font-medium mx-3 p-2 text-center">
                                Add Field Validator
                            </button>
                            <button 
                                className="cursor-default bg-red-100 border-2 border-red-500 text-red-500 font-medium rounded-lg text-sm ml-3 p-2 text-center">
                                Connected LRA
                            </button>
                        </div> :

                        // Account is a Field Validator
                        <div>
                            <a href="/validated" className="text-black hover:text-red-500 font-medium mx-3 p-2 text-center">Validated Properties</a> 
                            <button
                                className="text-black hover:text-red-500 font-medium mx-2 p-2 text-center"
                                onClick={() => setShowModal(true)}>
                                Add Property
                            </button>
                            <button 
                                className="cursor-default bg-red-100 border-2 border-red-500 text-red-500 font-medium rounded-lg text-sm ml-3 p-2 text-center">
                                Connected
                            </button>
                        </div> :

                        // Account is not connected to the App
                        <button 
                            className="bg-red-500 hover:bg-red-600 focus:ring-red-200 focus:ring-4 text-white font-medium rounded-lg text-sm ml-2 p-2 text-center"
                            onClick={connect}>
                            Connect
                        </button> : 

                        // MetaMask is not installed
                        <button 
                            className="bg-red-500 hover:bg-red-600 focus:ring-red-200 focus:ring-4 text-white font-medium rounded-lg text-sm ml-2 p-2 text-center"
                            onClick={() => window.open("https://metamask.io/download.html", "_blank")}>
                            Install MetaMask
                        </button> 
                    }
                    </div>
                </div>
            </nav>
            {
                /**
                 * Renders the modal but sets the visibility
                 * to false. If setShowModal==true, set modal
                 * visibility to true and pass account prop 
                 * to component.
                 */ 
                showModal && 
                <AddPropertyModal
                    account={account.data}
                    onClose={() => setShowModal(null)}
                />
            }
        </header>
    )
}