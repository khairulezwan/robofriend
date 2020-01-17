import React from 'react';
// import './Card.css';

const Card = ({name,email,id}) => {
    // const { } = props;
    return (
        <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <h1>Robofriend</h1>
            <img alt='alt-robo' src={`https://robohash.org/${id}?size=150x150`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;