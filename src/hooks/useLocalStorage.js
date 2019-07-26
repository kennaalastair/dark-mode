import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return (item ? JSON.parse(item) : initialValue);
    });
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
};
// useLocalstorage(key, initialvalue) ----> [value, setValue]
// useState(initialValue) ------> [value, setValue]

export default useLocalStorage;