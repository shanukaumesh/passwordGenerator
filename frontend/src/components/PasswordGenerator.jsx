import React, { useState } from 'react';
import axios from 'axios';
import '../styles/PasswordGenerator.css';

const PasswordGenerator = () => {
    const [length, setLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [password, setPassword] = useState('');

    const generatePassword = async () => {
        try {
            console.log('Generating password with the following options:');
            console.log('Length:', length);
            console.log('Include Uppercase:', includeUppercase);
            console.log('Include Numbers:', includeNumbers);
            console.log('Include Symbols:', includeSymbols);

            const response = await axios.post('http://localhost:5000/generate', {
                length,
                includeUppercase,
                includeNumbers,
                includeSymbols,
            });

            console.log('Password generated:', response.data.password);
            setPassword(response.data.password);
        } catch (error) {
            console.error('Error generating password:', error);
            alert('Error generating password. Please check the console for more details.');
        }
    };

    const handleCopyPassword = () => {
        if (password) {
            navigator.clipboard.writeText(password).then(() => {
                alert('Password copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy password: ', err);
            });
        }
    };

    return (
        <div className="container">
            <h1>Password Generator</h1>
            <div className="input-group">
                <label>Password Length:</label>
                <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                    min="1"
                />
            </div>
            <div className="checkbox-group">
                <label>
                    <input
                        type="checkbox"
                        checked={includeUppercase}
                        onChange={() => setIncludeUppercase(!includeUppercase)}
                    />
                    Include Uppercase Letters
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={includeNumbers}
                        onChange={() => setIncludeNumbers(!includeNumbers)}
                    />
                    Include Numbers
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={includeSymbols}
                        onChange={() => setIncludeSymbols(!includeSymbols)}
                    />
                    Include Symbols
                </label>
            </div>
            <button onClick={generatePassword}>Generate Password</button>
            <h2>Generated Password:</h2>
            <div className="password-box" onClick={handleCopyPassword}>
                {password || 'Your generated password will appear here.'}
            </div>

        </div>
    );
};

export default PasswordGenerator;
