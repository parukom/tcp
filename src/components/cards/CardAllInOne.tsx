import React from 'react';

function OffersCard(props: any) {
  return (
    <div
      style={{
        width: '228px',
        padding: '5px',
      }}
    >
      <div
        style={{
          marginBottom: '15px',
        }}
      >
        <span>
          {' '}
          <h1
            style={{
              fontWeight: 'bold',
              fontSize: '18px',
              marginTop: 0,
              marginBottom: 0,
              color:'black'
            }}
          >
            <span
              style={{
                color: '#006AFF',
                paddingRight: '10px',
              }}
            >
              {' '}
              {props.icon}
            </span>{' '}
            {props.title}
          </h1>
        </span>
      </div>
      <div>
        <p
          style={{
            fontSize: '16px',
            lineHeight: '150%',
            color:'black'
          }}
        >
          {props.body}
        </p>
      </div>
    </div>
  );
}

export default OffersCard;
