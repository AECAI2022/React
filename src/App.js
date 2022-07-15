//import the linked JS file to use the component
//import Content from "./components/Content";
import React from 'react';
import DataColloector from "./components/DataCollect"



function App() {
  return (
    <>
    <div>
    <DataColloector></DataColloector>   
    </div>
    </>
  );
}

export default App;

    //////////////Content Modular////////////////////
    // <div>
    //   <h1>PROJECT 1</h1>
    //   <div className="card">
    //     <h2>BUILDING FLOOR PLAN</h2>
    //     <Content text="Gound Level Plan"></Content>
    //     <Content text="Second Level Plan"></Content>
    //     <Content text="Roof Plan"></Content>
    //     <br></br>
    //     <br></br>
    //     <br></br>
    //     <div className="actions">
    //       <span>*the size of the file is limited at 5MB</span>
    //       <button className="btn">Upload</button>
    //     </div>
    //   </div>
    // </div>


  //<...></...> = <.../> formatting written in Html format
  //{Java script} in Html format
  //'div' = division/section
  //'h1' = Headline #1
  //'br' change the line
  //<Content></Content> import from other Javascript
  //className using the background, front, color format and location information that has been set up in the index.css
