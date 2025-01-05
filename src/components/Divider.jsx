import React from 'react'

function Divider() {
    return (
        <div className="bg-blue-50 w-full flex justify-center">
            <div className="bg-blue-200 my-24 h-16 w-1 rounded-full hidden sm:block " style={{ opacity: 1, transform: 'none' }}>
            </div>
        </div>
    )
}

export default Divider