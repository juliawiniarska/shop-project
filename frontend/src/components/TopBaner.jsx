import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';

const TopBanner = () => {
  const [index, setIndex] = useState(0);
  const messages = [
    '🤩Darmowa dostawa już od 100 zł🤩',
    '🍬Rabat -20% na całe zamówienie od 199 zł "MAJ20"🍬'
  ];

  const timeoutRef = useRef(null);

  const nextMessage = () => {
    setIndex(prevIndex => (prevIndex + 1) % messages.length);
  };

  useEffect(() => {
    timeoutRef.current = setInterval(nextMessage, 7000); 

    return () => clearInterval(timeoutRef.current); 
  }, []);

  return (
    <Container fluid style={{
      backgroundColor: '#eba39e', color: '#333', padding: '10px 0', fontSize: '1.2em',
      overflow: 'hidden', 
      height: '50px', 
      position: 'relative' 
    }}>
      <div style={{
        position: 'absolute', 
        width: `${100 * messages.length}%`, 
        height: '100%',
        display: 'flex', 
        transition: 'transform 0.8s ease-in-out', 
        transform: `translateX(-${index * 100 / messages.length}%)` 
      }}>
        {messages.map((message, i) => (
          <div key={i} style={{ width: `${100 / messages.length}%`, textAlign: 'center', fontWeight: 'bold'}}>
            {message}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TopBanner;
