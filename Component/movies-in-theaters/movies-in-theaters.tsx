import React from "react";
import data from '../data.json';

const posterStyle = {
  height: '400px',
  widht: '250px'
}

function Intheatre() {
    const DataTheatre = data['movies-in-theaters'];
    return (
        <>
            <div className="card">
                <div className='container'>
                    {DataTheatre.map((data) => (
                        <div style={{ float: 'left', padding: '1em', textAlign: 'center' }} >
                            <img className='small' src={data.posterurl} alt="Avatar" style={{ ...posterStyle }}></img>
                            <h2>{data.title}</h2>
                            <p>Add to favorite</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}



export default Intheatre;
