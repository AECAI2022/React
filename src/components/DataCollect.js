import useLocalStorage from '../UseLocalStorage';


function DataColloector(props) {
let [value, setValue] = useLocalStorage(props.text,'');

return (
  <div>
      <h3>{props.text}</h3>
    <input
    type="text"
    onChange={(event) => setValue(event.target.value)}
    value={value} 
    />
  </div>
);
}
export default DataColloector;