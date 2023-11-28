import React, { useCallback, useEffect, useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import { NavBar } from './components/NavBar';
import { useUser } from './providers/UserProvider';
import { useNavigate } from 'react-router-dom';

function App() {
  const [inputValue, setInputValue] = useState('João');
  const { setUser } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    console.log('input value mudou de valor');
  }, [inputValue])

  const handleSubmit = useCallback(() => {
    console.log('Valor no submit', inputValue);
    setUser(inputValue)
    alert('Usuário clicou no botão');
    // navigate('/home');
  }, [inputValue]);

  const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, [setInputValue]);

  const handleOnValidate = useCallback(() => {
    if (!inputValue) {
      return false;
    }

    return true;
  }, [inputValue]);

  const isDisabled = useMemo(() => {
    return !inputValue;
  }, [inputValue, handleOnValidate]);

  return (
    <>
      <input type="text" value={inputValue} onChange={handleOnChange} />
      <Button onSubmit={handleSubmit} onValidate={handleOnValidate} disabled={isDisabled}>
        Entrar
      </Button>
    </>
  );
}

export default App;
