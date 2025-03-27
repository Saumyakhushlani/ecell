
import React from 'react'
import Button2 from './Button2'

const Subscribe = () => {
    return (
        <div className="bg-blue-600 text-white md:rounded-2xl p-8 flex flex-col md:flex-row items-center justify-around max-w-6xl mx-auto md:py-24 py-14 my-8">
            <div className="text-center md:text-left md:w-[35vw]">
                <h2 className="text-4xl font-bold">Subscribe to get updated</h2>
                <p className="mt-6 text-m">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.
                </p>
            </div>
            <button className="mt-6 md:mt-0 border-2 border-white rounded-xl ">
                <Button2/>
            </button>
        </div>
    )
}

export default Subscribe
