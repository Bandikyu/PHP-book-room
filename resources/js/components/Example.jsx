import React from 'react';
import { Button } from "react-bootstrap";

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>
                        <div>Voy a poner algo mas por aca!!!</div>
                        <Button variant="primary">
                            Libre
                        </Button>
                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

