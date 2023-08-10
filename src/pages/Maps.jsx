import React, { useState } from 'react'
import MenuButton from '../components/menu-button/MenuButton';
import IframeContainer from '../components/iframe-container/IframeContainer';

function Maps() {
  const [selectedId, setSelectedId] = useState('');

    const handleMenuClick = (id) => {
        setSelectedId(id);
    };

    return (
        <div>
            <MenuButton handleMenuClick={handleMenuClick} />
            <IframeContainer selectedId={selectedId} />
        </div>
    );
};

export default Maps