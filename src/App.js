import React, { useState } from 'react';
import './App.styles.css';

// const defaultItems = [
//     {
//         text: 'options 1',
//         selected: false,
//     },

//     {
//         text: 'options 2',
//         selected: true,
//     },

//     {
//         text: 'options 3',
//         selected: false,
//     },
// ];

function App() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.length !== '') {
            const newItem = {
                text: inputValue,
                selected: false,
            };

            const newItems = [...items, newItem];

            setInputValue('');
            setItems(newItems);
        }
    };

    const removeItem = (i) => {
        const newItems = items.filter((_, idx) => idx !== i);

        setItems(newItems);
    };

    const resetItems = () => {
        setItems([]);
    };

    const randomizer = () => {
        const randomizerNum = 20;

        for (
            let i = 0;
            i < Math.floor(Math.random() * (randomizerNum > 0 ? randomizerNum : 1));
            i++
        ) {
            setTimeout(pickRandomItem, 100 * i);
        }
    };

    const pickRandomItem = () => {
        const randomItem = items[Math.floor(Math.random() * items.length)];

        const newItems = items.map((item) =>
            item === randomItem ? { ...item, selected: true } : { ...item, selected: false }
        );

        setItems(newItems);
    };

    return (
        <>
            <div className="container mx-auto bg-white shadow-xl w-full sm:w-2/4 h-auto p-4 rounded-md">
                <form onSubmit={handleSubmit}>
                    <div className="flex">
                        <input
                            type="text"
                            className="flex-auto bg-transparent hover:shadow-sm text-gray-600 placeholder-gray-400 py-2 px-4 mr-3 my-3 focus:outline-none focus:bg-white focus:shadow-sm focus:border-gray-300 rounded-full"
                            placeholder="Enter Options"
                            value={inputValue}
                            onChange={(e) => {
                                setInputValue(e.target.value);
                            }}
                        />
                        <button className="bg-transparent text-pink-300 py-2 px-4 font-extrabold border border-transparent hover:border-pink-200 focus:outline-none rounded-full">
                            Add
                        </button>
                    </div>

                    {items.length === 0 && (
                        <div>
                            <small className="text-gray-400">
                                <i>Enter options to Randomize</i>
                            </small>
                        </div>
                    )}

                    {items.length > 0 && (
                        <>
                            <small className="text-gray-400">
                                <i>Entered options to Randomize</i>
                                <i className="text-red-300">
                                    {' '}
                                    (Double click your option to remove it)
                                </i>
                            </small>

                            <ul className="text-gray-600 my-3">
                                {items.map((item, idx) => (
                                    <li
                                        className={`p-2 px-4 m-2 cursor-pointer hover:line-through hover:bg-red-100 rounded-full ${
                                            item.selected ? 'bg-green-100 font-extrabold' : ''
                                        }`}
                                        key={idx}
                                        onDoubleClick={() => removeItem(idx)}
                                    >
                                        {item.text}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="w-full bg-transparent text-pink-300 py-2 px-4 font-extrabold border border-transparent hover:border-pink-200 focus:outline-none rounded-full"
                                onClick={randomizer}
                            >
                                Randomize
                            </button>

                            <button
                                className="bg-transparent hover:bg-red-300 text-red-300 hover:text-white py-2 px-4 my-3 hover:border-red-300 focus:outline-none rounded-full"
                                onClick={resetItems}
                            >
                                Reset
                            </button>
                        </>
                    )}
                </form>
            </div>
        </>
    );
}

export default App;
