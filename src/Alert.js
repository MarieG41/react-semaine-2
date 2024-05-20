import { useState } from 'react'

export default function Alert({ type="information", heading, children, closable, onClose }) {
    const [visible, setVisible] = useState(true)
    if (!visible) {
        return null
    }
    function handleCloseClick() {
        setVisible(false)
        if(onClose) {
            onClose()
        }
    }
    return (
        <div>
            <div>
                <span role="img" aria-label={type === "Warning" ? "warning"  : "Information"}>{type}</span>
                <span>{heading}</span>
            </div>
                {closable && (
                    <button aria-controls='Close' onClick={handleCloseClick}>
                        <span role='img' aria-label='Close'>❌</span>
                    </button>
                )}
            <div>{children}</div>
        </div>
    )
}