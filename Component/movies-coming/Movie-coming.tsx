import react from 'react';
import data from '../data.json';
function App() {
  const Data = data['movies-coming'];

  const posterStyle = {
     height:'400px',
     widht:'250px'
  }
   
  return (
    <>
    <div className="card">
      <div className='container'> 
          {Data.map((data) => (
            <div style={{ float:'left',padding:'1em' ,textAlign:'center' }} > 
             <img className='small'  src={data.posterurl} alt="Avatar" style={{...posterStyle}}></img>
               <h2>{data.title}</h2>
               <p>Add to favorite op</p>
            </div>
          ))}
        </div>
        </div>
    </>
  );
}



export default App;