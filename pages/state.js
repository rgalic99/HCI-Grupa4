import Image from 'next/image';
import { useState } from 'react';

const studentsOut = [
    {
        id: 1,
        name: 'Mate',
        lName: 'Matic',
        imgSrc: '/profile.jpg',
    },
    {
        id: 2,
        name: 'Jure',
        lName: 'Juric',
        imgSrc: '/profile.jpg',
    },
];

const Student = ({ name, lName, imgSrc }) => {
    return (
        <li className="flex flex-row relative items-center">
            <section className="mr-5 w-24 mt-5 mb-5 flex-row justify-between flex items-center">
                <p>{name}</p>
                <p>{lName}</p>
            </section>
            <Image
                className="absolute right-3 top-3"
                layout="fixed"
                width="50px"
                height="50px"
                src={imgSrc}
                alt="profile image"
            />
        </li>
    );
};

const StateDemo = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [students, setStudents] = useState([...studentsOut]);
    const [showStudents, setShowStudents] = useState(false);
    return (
        <main>
            <h1 className="text-center mt-5 mb-5 font-bold text-4xl underline">
                Welcome to state demo!
            </h1>
            <ul
                className={`${
                    showStudents ? '' : 'opacity-0'
                } flex flex-col items-center justify-around`}
            >
                {students.map((el) => (
                    <Student key={el.id} {...el} />
                ))}
            </ul>
            {/* {showStudents ? (
                <ul className="flex flex-col items-center justify-around">
                    {students.map((el) => (
                        <Student key={el.id} {...el} />
                    ))}
                </ul>
            ) : null} */}
            {/* {showStudents && (
                <ul className="flex flex-col items-center justify-around">
                    {students.map((el) => (
                        <Student key={el.id} {...el} />
                    ))}
                </ul>
            )} */}
            <section className="flex flex-col w-64 justify-center items-center my-0 mx-auto border-gray-500">
                <input
                    className="border-b-2 outline-none mt-5 border-solid border-gray-500"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="border-b-2 outline-none mt-5 border-solid border-gray-500"
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <button
                    onClick={() => {
                        const newStudent = {
                            id: students.count + 1,
                            name: name,
                            lName: lastName,
                            imgSrc: '/profile.jpg',
                        };

                        setStudents([...students, newStudent]);
                    }}
                    className="mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                    Submit
                </button>
                <button
                    onClick={() => {
                        setShowStudents(!showStudents);
                    }}
                    className="mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                    Show students
                </button>
            </section>
        </main>
    );
};

export default StateDemo;
