import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 pt-10 mt-12">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:justify-center md:gap-4 flex-nowrap gap-6">

                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-gray-900 md:text-left text-center">smartHome</h2>
                        <p className="text-m mt-2">
                            Automate your entire healthcare hiring, onboarding, and compliance with a true technology platform.
                        </p>
                        <div className="mt-4 flex items-center">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                Register
                            </button>
                        </div>
                    </div>


                    <div className="flex md:flex-row flex-col flex-2 justify-center md:gap-16 gap-6">

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">CATEGORIES</h3>
                            <ul className="mt-2 space-y-2 text-lg">
                                <li>Product Management</li>
                                <li>Design / Creatives</li>
                                <li>Education & Training</li>
                                <li>UI/UX Designers</li>
                                <li>Development</li>
                                <li>Customer Support</li>
                            </ul>
                        </div>


                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">ABOUT</h3>
                            <ul className="mt-2 space-y-2 text-lg">
                                <li>About Us</li>
                                <li>Partnerships</li>
                                <li>Finance Experts</li>
                                <li>Project Management</li>
                                <li>Product Manager</li>
                                <li>The Team</li>
                            </ul>
                        </div>
                    </div>


                    <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Follow Us</h3>
                        <ul className="mt-2 space-y-2 text-lg">
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>
            </div>

            
            <div className="mt-8 bg-[#000F37] text-white text-center py-4">
                <p>Copyright © 2025 all rights reserved smartHome</p>
                <p>Developed by Saumya Khushlani</p>
            </div>
        </footer>
    )
}

export default Footer
