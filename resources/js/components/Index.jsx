import React from 'react';
import ReactDOM from 'react-dom/client';
import Count from "./Count"
import Example from "./Example"


function Index() {
    return (
        <div className="container">
            Buenas hola hola
            <Example/>
            <Count/>
        </div>
    );
}

export default Index;

if (document.getElementById('index')) {
    const init = ReactDOM.createRoot(document.getElementById("index"));

    init.render(
        <React.StrictMode>
            <Index/>
        </React.StrictMode>
    )
}