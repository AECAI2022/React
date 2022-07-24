import { useState } from 'react';

function DataColloector() {
const [HouseID,setHouseID] =useState('');
const [Dscore,setDScore] =useState('');
const [Pscore,setPScore] =useState('');
const [ZipCode,setZipcode] =useState('');
const [Stories,setStories] =useState('');
const [Bedroom,setBedroom] =useState('');
const [Bathroom,setBathroom] =useState('');
const [TotalArea,setTotalArea] =useState('Yes');
const [Garages,setGarages] =useState('');
const [Porches,setPorches] =useState('Yes');
const [Basement,setBasement] =useState('Yes');
const [Plan,setPlan] =useState('');
const [Cover,setCover] =useState('');

const [isPending, setIsPending] =useState(false);


const handleSubmit =(e) =>{
  e.preventDefault();
  const data = {HouseID,Dscore,Pscore,ZipCode,Stories,Bedroom,Bathroom,TotalArea,Garages,Porches,Basement,Plan,Cover};
  console.log(data);
  setIsPending(false);
}

return (
  <div className = "create">
      <h2>Add a new House Info</h2>
      <form mothod ='post' action ='http://localhost:3000/' onSubmit ={handleSubmit}>
        <label>House name</label>
        <input
          type="text"
          required
          value={HouseID} 
          onChange={(event) => setHouseID(event.target.value)}
        />
        <label>Design Score</label>
        <input
          type="text"
          required
          value={Dscore} 
          onChange={(event) => setDScore(event.target.value)}
        />
        <label>Performance Score</label>
        <input
          type="text"
          required
          value={Pscore} 
          onChange={(event) => setPScore(event.target.value)}
        />   
        <label>ZipCode</label>
        <input
          type="text"
          required
          value={ZipCode} 
          onChange={(event) => setZipcode(event.target.value)}
        />      
        <label>Stories</label>
        <input
          type="text"
          required
          value={Stories} 
          onChange={(event) => setStories(event.target.value)}
        />             
        <label>Bedroom</label>
        <input
          type="text"
          required
          value={Bedroom} 
          onChange={(event) => setBedroom(event.target.value)}
        />   
        <label>Bathroom</label>
        <input
          type="text"
          required
          value={Bathroom} 
          onChange={(event) => setBathroom(event.target.value)}
        />  
        <label>TotalArea</label>
        <input
          type="text"
          required
          value={TotalArea} 
          onChange={(event) => setTotalArea(event.target.value)}
        />  
       <label>Garages</label>
        <input
          type="text"
          required
          value={Garages} 
          onChange={(event) => setGarages(event.target.value)}
        />  
        <label>Porches</label>
        <select>
          <option value ="Yes">Yes</option>
          <option value ="No">No</option>
          value = {Porches}
          onChange = {(event)=> setPorches(event.target.value)}
        </select>
        <label>Basement</label>
        <select>
          <option value ="Yes">Yes</option>
          <option value ="No">No</option>
          value = {Basement}
          onChange = {(event)=> setBasement(event.target.value)}
        </select>
        <label>Plan</label>
        <input
          type="file"
          onChange={(event)=> setPlan(event.target.files[0])}
        />
        <label>Cover</label>
        <input
          type="file"
          onChange={(event)=> setCover(event.target.files[0])}
        />
        {!isPending && <button>Upload</button>}
        {isPending && <button disabled>Adding...</button>}
      </form>
  </div>
);
}
export default DataColloector;
