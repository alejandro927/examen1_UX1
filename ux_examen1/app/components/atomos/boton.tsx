"use client";
import React from 'react';

interface BotonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
}

export default function Boton({ onClick, children, className, type = "button" }: BotonProps) {
    return (
        <button type={type} onClick={onClick} className={className}>
            {children}
        </button>
    );
}