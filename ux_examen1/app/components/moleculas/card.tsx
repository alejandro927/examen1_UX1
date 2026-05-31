'use client';

import React, { useState } from 'react';
import Boton from '../atomos/boton';
import { Pelicula, listaPeliculas } from './pelicula';

//creo la constate para los tipos de generos que se muestran en los filtros
const generosFiltro = ["Todos", ...Array.from(new Set(listaPeliculas.flatMap(p => p.generos)))];

export default function CatalogoPeliculas() {
    return (

        //es para que no me muestre error al retornar vacio

        <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-red-600 selection:text-white"></div>
    );

}
