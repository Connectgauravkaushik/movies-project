import React from "react";
import data from '../data.json';

function TopMovies() {
    const Data = data["top-rated-movies"]; 
    return (
      <>
      <div className="card">
        <div className='container'> 
            {Data.map((data) => (
              <div style={{ float:'left',padding:'1em' ,textAlign:'center' }} > 
               <img className='small'  src={data.posterurl} alt="Avatar"></img>
                 <h2>{data.title}</h2>
                 <p>Add to favorite</p>
              </div>
            ))}
          </div>
          </div>
      </>
    );
  }
  
  
  
  export default TopMovies;