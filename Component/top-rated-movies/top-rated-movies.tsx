import React from "react";
import data from '../data.json';

const posterStyle = {
  height: '400px',
  widht: '250px'
}
function IndiaTopMovies() {
  const Data = data["top-rated-india"];  
  return (
    <>
    <div className="card">
      <div className='container'> 
          {Data.map((data) => (
            <div style={{ float:'left',padding:'1em' ,textAlign:'center' }} > 
             <img className='small'  src={data.posterurl} alt="Avatar" style={{...posterStyle}}></img>
               <h2>{data.title}</h2>
               <p>Add to favorite</p>
            </div>
          ))}
        </div>
        </div>
    </>
  );
}



export default IndiaTopMovies;