import { useState, createContext } from 'react';

export const UserContext = createContext({});

export default function UserProvider({ children }) {

    const [precoAlcool, setPrecoAlcool] = useState('');
    const [precoGasolina, setPrecoGasolina] = useState('');
    const [resultado, setResultado] = useState('');

    return (
        <UserContext.Provider
            value={{
                precoAlcool,
                setPrecoAlcool,
                precoGasolina,
                setPrecoGasolina,
                resultado,
                setResultado
            }}>

            {children}
        </UserContext.Provider>
    )
}