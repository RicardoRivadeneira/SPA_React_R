import { NavLink } from "react-router-dom";
import React from "react";

export default function Nav(){
    return (
        <nav>
            <NavLink className={({isActive})=>(isActive ? "activado" : null)} to="/">Home</NavLink>
            <NavLink className={({isActive})=>(isActive ? "activado" : null)} to="/Gow">God of War</NavLink>
            <NavLink className={({isActive})=>(isActive ? "activado" : null)}to="/Pes">PES 2023</NavLink>
            <NavLink className={({isActive})=>(isActive ? "activado" : null)}to="/Fal">Fallout</NavLink>
            <NavLink className={({isActive})=>(isActive ? "activado" : null)}to="/Cod">Call Of Duty</NavLink>
            <NavLink className={({isActive})=>(isActive ? "activado" : null)}to="/Des">Destiny</NavLink>
        </nav>
    )
}