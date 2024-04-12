

import React, { useState } from 'react';
import { products } from './Products'
import IconSwitch from './IconSwitch'
import ListView from './ListView';
import CardsView from './CardsView'

export default function Store() {
  const [state, setState] = useState('grid');
  
  const handleLayoutSwitch = () => {
    setState(state === 'grid' ? 'list' : 'grid');
  };
    
  const icon = state === 'grid' ? 'view_list' : 'view_module';
    
  const displayView = state === 'grid' ? (
    <CardsView cards={products} />
  ) : (
    <ListView items={products} />
  );
    
    return (
      <div>
        <IconSwitch icon={icon} onSwitch={handleLayoutSwitch} />
        {displayView}
      </div>
    );
  };
  

