import React from 'react'

const Subscribe = () => {
    return (
        <div className="bg-blue-600 text-white md:rounded-2xl p-8 flex flex-col md:flex-row items-center justify-around max-w-6xl mx-auto md:py-24 py-14 my-8">
            <div className="text-center md:text-left md:w-[35vw]">
                <h2 className="text-4xl font-bold">Subscribe to get updated</h2>
                <p className="mt-6 text-m">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.
                </p>
            </div>
            <button className="mt-6 md:mt-0 px-12 py-2  border-white border-2 rounded-lg text-white hover:bg-white hover:text-blue-600 transition text-xl">
                Get start
            </button>
        </div>
    )
}

export default Subscribe
