import React, {MutableRefObject, useState} from "react";
import {MeshProps, useFrame} from "@react-three/fiber";
import {Mesh} from "three";

type Fruit = {
    name: "apple" | "orange";
}

function Cube() {
    const meshRef = React.useRef<Mesh>(null!);
    const [ hovered, hover] = useState(false);
    const [ clicked, click] = useState(false);

    useFrame((state, delta) => {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
    })

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2,2, 2]}/>
            <meshStandardMaterial/>
        </mesh>
    )
}

export default Cube;