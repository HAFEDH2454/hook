import React, {Component, setState} from 'react';


var movie0={ title:"film0", rate:4, desp:"description film n:0" ,lien:"www.com" };
var movie1={ title:"film1", rate:5, desp:"description film n:1" ,lien:"www.com" };
var movie2={ title:"film2", rate:5, desp:"description film n:2" ,lien:"www.com" };
var movie3={ title:"film3", rate:3, desp:"description film n:3" ,lien:"www.com" };
var movie4={ title:"film4", rate:2, desp:"description film n:4" ,lien:"www.com" };
var movie5={ title:"film5", rate:4, desp:"description film n:5" ,lien:"www.com" };


//var tab=[movie0,movie1,movie2,movie3,movie4,movie5];


ajout =(e)=> {
   
    setState({title:"film6", rate:4, desp:"description film n:6" ,lien:"www.com"});
        tab.push(setState);
        <p> {state.tab} </p>
}
   
export function MovieCard() 

{   
    state={
        tab=[movie0,movie1,movie2,movie3,movie4,movie5]
    } 
    <button onClick={state.ajout}>ajouter</button>
    return (<div><h1>Movie Card</h1><br/>
    <a href="www.google.com">
             <img src="./film.jpg"/><br/>
             <h2>film n0</h2><br/>
             <br/><img src="./rate1.png" style={{width:"10px", height:"10px"}}/><img src="./rate1.png" style={{width:"10px", height:"10px"}}/>
               <img src="./rate0.png" style={{width:"10px", height:"10px"}}/><img src="./rate0.png" style={{width:"10px", height:"10px"}}/>
            <img src="./rate0.png" style={{width:"10px", height:"10px"}}/>
               <br/><p >discription n:0</p>
     </a>
     <a href="www.google.com">
             <img src="./film1.jpg"/><br/>
             <h2>film n1</h2><br/>
             <br/><img src="./rate1.png" style={{width:"10px", height:"10px"}}/><img src="./rate1.png" style={{width:"10px", height:"10px"}}/>
               <img src="./rate1.png" style={{width:"10px", height:"10px"}}/><img src="./rate1.png" style={{width:"10px", height:"10px"}}/>
            <img src="./rate1.png" style={{width:"10px", height:"10px"}}/>
               <br/><p >discription n:1</p>
     </a>
     <a href="www.google.com">
             <img src="./film2.jpg"/><br/>
             <h2>film n2</h2><br/>
             <br/><img src="./rate1.png" style={{width:"10px", height:"10px"}}/><img src="./rate1.png" style={{width:"10px", height:"10px"}}/>
               <img src="./rate1.png" style={{width:"10px", height:"10px"}}/><img src="./rate1.png" style={{width:"10px", height:"10px"}}/>
            <img src="./rate1.png" style={{width:"10px", height:"10px"}}/>
               <br/><p >discription n:2</p>
     </a>
     <a href="www.google.com">
             <img src="./film3.jpg"/><br/>
             <h2>film n3</h2><br/>
             <br/><img src="./rate1.png" style={{width:"10px", height:"10px"}}/><img src="./rate1.png" style={{width:"10px", height:"10px"}}/>
               <img src="./rate1.png" style={{width:"10px", height:"10px"}}/><img src="./rate0.png" style={{width:"10px", height:"10px"}}/>
            <img src="./rate0.png" style={{width:"10px", height:"10px"}}/>
               <br/><p >discription n:0</p>
     </a>
     <a href="www.google.com">
             <img src="./film4.jpg"/><br/>
             <h2>film n4</h2><br/>
             <br/><img src="./rate1.png" style={{width:"10px", height:"10px"}}/><img src="./rate1.png" style={{width:"10px", height:"10px"}}/>
               <img src="./rate1.png" style={{width:"10px", height:"10px"}}/><img src="./rate1.png" style={{width:"10px", height:"10px"}}/>
            <img src="./rate1.png" style={{width:"10px", height:"10px"}}/>
               <br/><p >discription n:4</p>
     </a>
         <a href="www.google.com">
             <img src="./film5.jpg"/><br/>
             <h2>film n5</h2><br/>
             <br/><img src="./rate1.png" style={{width:"10px", height:"10px"}}/><img src="./rate1.png" style={{width:"10px", height:"10px"}}/>
               <img src="./rate1.png" style={{width:"10px", height:"10px"}}/><img src="./rate1.png" style={{width:"10px", height:"10px"}}/>
            <img src="./rate0.png" style={{width:"10px", height:"10px"}}/>
               <br/><p >discription n:5</p>
     </a>
  </div>
  );
}

export default MovieCard;
