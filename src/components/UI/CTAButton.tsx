import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

interface Props{
    text:string
}

const CTAButton:FC<Props> = ({text}) => {
    const {push} = useRouter()
    return (
        <button
            onClick={() => {push('/form') }}
            className="bg-green-500 text-white px-10 py-4 md:px-12 md:py-5 rounded-3xl font-bold shadow-xl hover:bg-green-600 transition-all text-lg md:text-xl tracking-wide"
        >
            {text}
        </button>
    )
}

export default CTAButton
