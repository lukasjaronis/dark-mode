import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {

    const originalValue = localStorage.getItem(key);
    console.log("original", originalValue);

    const [storedValue, setStoredValue] = useState(initialValue);

    const setValue = value => {
        localStorage.setItem(key, Boolean(value));
        setStoredValue(Boolean(value));
    }

    return [storedValue, setValue];
};