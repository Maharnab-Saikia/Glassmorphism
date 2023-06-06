import React from 'react'

export default function Preview({ color }) {

    return (
        <div className="preview">
            <div className="glassmorphism" style={{ color: { color } }}>
                <div className="glass1"></div>
                <div className="glass2"></div>
                <div className="glass3"></div>
            </div>
        </div>
    )
}
