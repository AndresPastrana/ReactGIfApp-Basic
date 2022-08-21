import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import Message from "./Message";

export const SimpleForm = () => {
    const [formState, handleInputChange, handleSubmit] = useForm({
        name: "",
        email: "",
        password: "",
    });
    const { name, email, password } = formState;

    // El useEffect es un hook que se utiliza para aplicar efectos(hacer algo), cuando cambio algo dentro de
    // nuestro compnente

    // useEffect(() => {

    // ****DO SOMETHING HERE WHEN MOUNT THE COMPONENT

    //   return () => {
    //     ****DO SOMETHING HERE WHEN UNMOUNT THE COMPONENT
    //   }

    // }, [DEPENDECIE])

    // useEffect(() => {
    //     console.log('El formState Cambio');
    // }, [formState])
    // useEffect(() => {
    //     console.log('El name Cambio');
    // }, [name])
    // useEffect(() => {
    //     console.log('El email Cambio');
    // }, [email])

    return (
        <>
            <h1>Use Effect</h1>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                ></input>

                <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                ></input>

                <input
                    type="password"
                    name="password"
                    placeholder="*****"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                ></input>
                <button type="submit"> Send</button>
            </form>

            {name && <Message />}
        </>
    );
};
