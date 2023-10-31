import React from 'react';
import './App.css';
import {Canvas, useFrame} from "@react-three/fiber";
import Cube from "./components/cube";

function App() {
    return (
        <div className="App" id="canvas-container">
            <Canvas>
                <ambientLight intensity={0.3}/>
                <directionalLight color="lightgreen" position={[0, 0, 1]}/>
                <Cube/>
            </Canvas>
        </div>
    );
}

export default App;
