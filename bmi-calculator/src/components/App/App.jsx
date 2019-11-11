import React, {useState, useEffect} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

const App = () => {
    let initialState = () => JSON.parse(localStorage.getItem('data')) || [];
    const [state, setState] = useState(initialState);
    const [date, setDate] = useState({});

    const handleChange = val => {
    };

    const handleDelete = id => {

    };

    const handleUndo = () => {

    };

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(state));
        const date = state.map(obj => obj.date);
        const bmi = state.map(obj => obj.bmi);
        let newDate = { date, bmi };
        setDate(newDate);
    }, [state]);

    return (
        <div className="container">
            <div className="row center">
                <h1 className='white-text'>
                    BMI Tracker
                </h1>
            </div>
            <div className="row">
                <div className="col m12 s12">
                    <div>
                        <div className="row center">
                            <h4 className='white-text'>
                                7 Day Data
                            </h4>
                        </div>
                        <div className="data-container row">
                            {state.length > 0 ? (
                                <>
                                    {}
                                </>
                            ) : (
                                <div className="center white-text">
                                    No log found
                                </div>
                            )}
                        </div>
                    </div>
                    {localStorage.getItem('lastState') !== null ? (
                        <div className='center'>
                            <button className="calculate-btn" onClick={handleUndo}>
                                Undo
                            </button>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;