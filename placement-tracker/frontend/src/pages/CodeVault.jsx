import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CodeVault = () => {
    const [codes, setCodes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCodes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/codes');
                // Backend array-a kudukuthu, so direct-a set pannalam
                setCodes(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error("Error fetching codes:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCodes();
    }, []);

    if (loading) return <div style={{ color: '#fff' }}>Loading...</div>;

    return (
        <div style={{ padding: '20px', color: '#fff' }}>
            <h2>Code Vault</h2>
            {codes.length > 0 ? (
                codes.map((code, index) => (
                    <div key={index} style={{ background: '#1c2536', padding: '10px', marginBottom: '10px' }}>
                        {code.title}
                    </div>
                ))
            ) : (
                <p>No codes found.</p>
            )}
        </div>
    );
};

export default CodeVault;