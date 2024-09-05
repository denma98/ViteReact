import { useCallback, useState } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState('');

  const generatedPassword = useCallback(() => {
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let password = '';
    if (numbers) charset += '0123456789';
    if (characters) charset += '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
    for (let i = 0; i < length; i++) {
      let at = Math.floor(Math.random() * charset.length);
      password += charset.charAt(at);
    }
    setPassword(password);
  }, [length, numbers, characters]);

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-600'>
      <h1 className='text-center text-xl font-bold mb-4'>Password Generator</h1>
      
      <label className='block mb-2'>
        Length:
        <input
          type='number'
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value, 10))}
          className='ml-2 p-1 rounded'
          min='1'
        />
      </label>

      <label className='block mb-2'>
        Include Numbers:
        <input
          type='checkbox'
          checked={numbers}
          onChange={(e) => setNumbers(e.target.checked)}
          className='ml-2'
        />
      </label>

      <label className='block mb-2'>
        Include Special Characters:
        <input
          type='checkbox'
          checked={characters}
          onChange={(e) => setCharacters(e.target.checked)}
          className='ml-2'
        />
      </label>

      <button
        onClick={generatedPassword}
        className='bg-orange-400 text-gray-600 py-2 px-4 rounded mt-4'
      >
        Generate Password
      </button>

      {password && (
        <div className='mt-4 p-2 bg-gray-700 rounded'>
          <strong>Generated Password:</strong> {password}
        </div>
      )}
    </div>
  );
}

export default App;
