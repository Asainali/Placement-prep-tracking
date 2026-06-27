import React, { useState } from 'react';
import axios from 'axios';

const AIMockInterview = () => {
    const [userAnswer, setUserAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!userAnswer.trim()) {
            alert("Answer type pannunga!");
            return;
        }

        setLoading(true);
        try {
            // Indha line dhaan mukkiyam (Fixed URL)
            const response = await axios.post('http://localhost:5000/api/submit-answer', { 
                answer: userAnswer 
            });
            
            console.log("Feedback:", response.data.feedback);
            setFeedback(response.data.feedback); // Feedback-ah display panna
            
        } catch (error) {
            console.error("Error submitting answer:", error);
            setFeedback("AI error! Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px', color: '#fff' }}>
            <h2>AI Mock Interviews</h2>
            
            {/* Question Box */}
            <div style={{ marginBottom: '20px', padding: '15px', background: '#1c2536', borderRadius: '8px' }}>
                <p>AI: Tell me about yourself and your interest in Cybersecurity?</p>
            </div>

            {/* Answer Input */}
            <textarea 
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Inga type pannunga..."
                style={{ width: '100%', height: '100px', marginBottom: '10px', padding: '10px' }}
            />

            {/* Submit Button */}
            <button 
                onClick={handleSubmit} 
                disabled={loading}
                style={{ padding: '10px 20px', cursor: 'pointer', background: '#008080', color: '#fff', border: 'none' }}
            >
                {loading ? 'Processing...' : 'Submit Answer'}
            </button>

            {/* Feedback Display */}
            {feedback && (
                <div style={{ marginTop: '20px', padding: '15px', background: '#253347', borderLeft: '5px solid #008080' }}>
                    <h3>AI Feedback:</h3>
                    <p>{feedback}</p>
                </div>
            )}
        </div>
    );
};

export default AIMockInterview;