import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const LOCAL_STORAGE_KEY = 'bankList';

export const bankContext = createContext();

const BankContextProvider = (props) => {
  const [bank, setBank] = useState([]);

  useEffect(() => {
    // Verificar si los datos ya están en el localStorage.
    const storedBank = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (storedBank) {
      // Si hay datos almacenados, los establecemos en el estado.
      setBank(storedBank);
    } else {
      // Si no hay datos almacenados, hacemos la solicitud GET al API.
      axios
        .get('http://localhost:5000/bankList')
        .then((response) => {
          const dataBank = response.data;
          setBank(dataBank);
          // Almacenar los datos en el localStorage para las visitas posteriores.
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataBank));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return (
    <bankContext.Provider value={{ bank }}>
      {props.children}
    </bankContext.Provider>
  );
};

export default BankContextProvider;
