import React from 'react';
import './iframe-container.css';

const IframeContainer = ({ selectedId }) => {
    return (
        <div className="iframe-container">
            <iframe
                src={`https://www.google.com/maps/d/u/1/embed?mid=${selectedId || '1kEZPECWv-wDeZKbjPb9rJC8N2EJOusE&ehbc=2E312F'}`}
                title="AHRCC maps"
            ></iframe>
        </div>
    );
};

export default IframeContainer;