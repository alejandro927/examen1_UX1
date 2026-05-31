//aqui desarrolllamos los botones que se mostraran las peliculas
import React from 'react';
interface Boton {
    texto: string;
    estaSeleccionado: boolean;
    onClick: () => void;
}

export default function Boton({ texto, onClick }: Boton) {
    return (
        <button>
            {texto}
        </button>
    );
}