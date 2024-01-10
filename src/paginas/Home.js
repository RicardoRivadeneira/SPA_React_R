import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    const lista=["29951","14365","25593","12723"]
    return (
        <div>
            <h1>Tienda de Videojuegos R-J</h1>
            <div className="juegos">
                {
                    lista.map(unJuego => (
                        <Link to={`/${unJuego}`} key={unJuego}>
                            <img alt="" src={`https://www.necxus.com.ar/products_image/${unJuego}/1000x1000_1.webp`} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
