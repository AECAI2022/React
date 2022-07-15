import { useState } from 'react';

function DataColloector() {
const [name,setName] =useState('');
const [dscore,setDScore] =useState('');
const [pscore,setPScore] =useState('');
const [zipcode,setZipcode] =useState('');
const [stories,setStories] =useState('');
const [bedroom,setBedroom] =useState('');
const [bathroom,setBathroom] =useState('');
const [garages,setGarages] =useState('');
const [porches,setPorches] =useState('Yes');
const [basement,setBasement] =useState('Yes');
const [plan,setPlan] =useState('');
const [cover,setCover] =useState('');

const [isPending, setIsPending] =useState(false);


const handleSubmit =(e) =>{
  e.preventDefault();
  const data = {name,dscore,pscore,zipcode,stories,bedroom,bathroom,garages,porches,basement,plan,cover};
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
          value={name} 
          onChange={(event) => setName(event.target.value)}
        />
        <label>Design Score</label>
        <input
          type="text"
          required
          value={dscore} 
          onChange={(event) => setDScore(event.target.value)}
        />
        <label>Performance Score</label>
        <input
          type="text"
          required
          value={pscore} 
          onChange={(event) => setPScore(event.target.value)}
        />   
        <label>ZipCode</label>
        <input
          type="text"
          required
          value={zipcode} 
          onChange={(event) => setZipcode(event.target.value)}
        />      
        <label>Stories</label>
        <input
          type="text"
          required
          value={stories} 
          onChange={(event) => setStories(event.target.value)}
        />             
        <label>Bedroom</label>
        <input
          type="text"
          required
          value={bedroom} 
          onChange={(event) => setBedroom(event.target.value)}
        />   
        <label>Bathroom</label>
        <input
          type="text"
          required
          value={bathroom} 
          onChange={(event) => setBathroom(event.target.value)}
        />  
       <label>Garages</label>
        <input
          type="text"
          required
          value={garages} 
          onChange={(event) => setGarages(event.target.value)}
        />  
        <label>Porches</label>
        <select>
          <option value ="Yes">Yes</option>
          <option value ="No">No</option>
          value = {porches}
          onChange = {(event)=> setPorches(event.target.value)}
        </select>
        <label>Basement</label>
        <select>
          <option value ="Yes">Yes</option>
          <option value ="No">No</option>
          value = {basement}
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
