import React from 'react';

const IframeContainer = ({ iframeId }) => {
  return (
    <div className="iframe-container">
      <iframe
        src={`https://www.google.com/maps/d/u/1/embed?mid=1kEZPECWv-wDeZKbjPb9rJC8N2EJOusE&ehbc=2E312F`}
        title='all'
        style={{ top: '-62px' }}
        frameBorder="0"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

export default IframeContainer;