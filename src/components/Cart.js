import React from 'react';

function Cart({ items }) {
  if (items.length === 0) {
    return <p className="m-3">Кошик порожній</p>;
  }

  return (
    <div className="m-3">
      <h2>Мій кошик</h2>
      {items.map(item => (
        <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src={item.image} alt={item.title} style={{ width: '100px', marginRight: '15px', borderRadius: '8px' }} />
          <div>
            <h5>{item.title}</h5>
            <p>Ціна: {item.price} грн</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
