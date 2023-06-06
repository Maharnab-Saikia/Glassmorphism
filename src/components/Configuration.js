import React, { useState, useRef, useEffect } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import "./inputs.css";


export default function Configuration() {

    const [radius, setRadius] = useState(10)
    const [transperency, setTransperency] = useState(0.25)
    const [blur, setBlur] = useState(4)
    const [codeString, setCodeString] = useState('')
    const codeContainer = useRef()

    const [color, setColor] = useState('255, 255, 255')


    document.documentElement.style.cssText = `
    --radius: ${radius}px;
    --transperency: ${transperency};
    --blur: ${blur}px;
    --color: ${color};
  `

    useEffect(() => {
        setCodeString(
            `border-radius: ${radius}px;
backdrop-filter: blur(${blur}px);
-webkit-backdrop-filter: blur(${blur}px);
background: rgb(255, 255, 255, ${transperency});
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);`
        )
    }, [radius, blur, transperency])

    const copyToClipboard = e => {
        const el = codeContainer.current
        el.select()
        document.execCommand('copy')
        document.getElementById('copy').innerHTML = 'Copied'

        setTimeout(() => {
            document.getElementById('copy').innerHTML = 'Copy'
        }, 1500)
    }

    const hex = e => {
        var hex = document.getElementById('hex-input').value
        var hexToRgb = ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0]
        var rgb = String(hexToRgb)

        setColor(rgb)

    }

    const rgba = e => {
        var hex = document.getElementById('rgb-input').value
        var hexToRgb = ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0]
        var rgb = String(hexToRgb)

        setColor(rgb)
    }

    return (
        <div className="container">
            <div className="configuration">
                <Box className="row">
                    <Typography gutterBottom>Radius:</Typography>
                    <Slider
                        aria-label="Radius"
                        className="range"
                        step={1}
                        min={0}
                        max={150}
                        defaultValue={10}
                        onChange={e => setRadius(e.target.value)}
                        valueLabelDisplay="auto"
                    />
                </Box>
                <Box className="row">
                    <Typography gutterBottom>Blur:</Typography>
                    <Slider
                        aria-label="Blur"
                        className="range"
                        step={0.5}
                        min={0}
                        max={20}
                        defaultValue={4}
                        onChange={e => setBlur(e.target.value)}
                        valueLabelDisplay="auto"
                    />
                </Box>
                <Box className="row">
                    <Typography gutterBottom>Transperency:</Typography>
                    <Slider
                        aria-label="Transperency"
                        className="range"
                        step={0.01}
                        min={0}
                        max={1}
                        defaultValue={0.25}
                        onChange={e => setTransperency(e.target.value)}
                        valueLabelDisplay="auto"
                    />
                </Box>

                <div className="config-color">
                    <div className="hex-input">
                        <input type="text" placeholder="#FFFFFF" id="hex-input" onInput={hex} />
                    </div>
                    <div className="rgb-input">
                        <input type="color" id="rgb-input" value="#ffffff" onChange={rgba} />
                    </div>
                </div>
            </div>


            <div className="code">
                <textarea id="code-container" ref={codeContainer} value={codeString} readOnly />
                <button className="copy" id="copy" onClick={copyToClipboard}>
                    Copy
                </button>
            </div>
        </div>
    )
}

/*<ConfigurationRow
label={'size'}
type={'range'}
value={'300'}
min={'0'}
max={'300'}
step={'1'}
/>*/