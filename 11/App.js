{/* <div id='parent'>
<div id='child'>

    <h1>I AM jaideep</h1>
    <h2>I am jai pal </h2>
</div>
<div id='child2>
 <h1>I AM jaideep</h1>
    <h2>I am jai pal </h2>

</div>
</div> */}
























const parent =React.createElement('div',{id:"parent"},
[
React.createElement("div",{id:"child"},
[
    React.createElement("h1",{},"I AM jadieep"),
    React.createElement("h2",{},"I AM jai pal"),
]),
 React.createElement("div",{id:"child2"},
[
    React.createElement("h1",{},"I AM jadieep"),
    React.createElement("h2",{},"I AM jai pal"),
]),

]);


// JSX




console.log(parent);








// const heading =React.createElement
// ("h1",
// {id:"heading",
// xyz:"abc"},
// "Hello from Jaideep");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);