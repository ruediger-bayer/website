import { Fragment } from 'react'

import StartImg from '../images/start-blue.jpg'


const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function Example() {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-2xl tracking-tight text-gray-900 font-bitter font-medium sm:text-4xl md:text-5xl">
                                <span className="block xl:inline">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                </span>{' '}
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                            </p>

                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 ">

                <img src={StartImg} alt="blueImage" className="h-56 w-full object-scale-down sm:h-72 md:h-96 lg:w-full lg:h-full"></img>
            </div>
        </div>
    )
}