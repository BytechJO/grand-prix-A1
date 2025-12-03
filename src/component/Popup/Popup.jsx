import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Popup.css';

const Popup = (
    {
        isOpen,
        onClose,
        children,
        questionText,
        audioSrc,
        isAudio = false,
    }
) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="popup-overlay">
            <div
                className={`popup-content ${isAudio ? "audio-size" : "fullscreen-size"}`}
            >
                <button className={`popup-close-btn ${isAudio ? "audio" : ""}`} onClick={onClose} style={{ zIndex: "99999999999" }}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <div className="popup-question-container">
                    {questionText && <p className="question-text">{questionText}</p>}
                    {audioSrc && (
                        <audio controls className="question-audio-player">
                            <source src={audioSrc} type="audio/mpeg" />
                            something heppend.
                        </audio>
                    )}
                </div>
                <div className="popup-body">
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Popup;
