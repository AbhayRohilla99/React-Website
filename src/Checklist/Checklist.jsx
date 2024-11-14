import React, { useState, useEffect } from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import Navbar from '../Navbar/Navbar';

const Checklist = () => {
    const [activeTab, setActiveTab] = useState("Kitchen");

    const tabs = ["Kitchen", "Bathrooms", "Bedrooms", "Common Areas"];
    const checklistItems = [
        { task: "Remove cobwebs", regular: true, deep: true, moveInOut: true },
        { task: "Dust light fixtures", regular: true, deep: true, moveInOut: true },
        { task: "Wipe down ceiling fan (blades/motor/light)", regular: true, deep: true, moveInOut: true },
        { task: "Dust decor and picture frames", regular: true, deep: true, moveInOut: false },
        { task: "Dust decor and picture frames", regular: true, deep: true, moveInOut: false },
        { task: "Dust decor and picture frames", regular: true, deep: true, moveInOut: false },
        { task: "Dust decor and picture frames", regular: true, deep: true, moveInOut: false },
        { task: "Dust decor and picture frames", regular: true, deep: true, moveInOut: false },
        { task: "Dust decor and picture frames", regular: true, deep: true, moveInOut: false },
        { task: "Dust decor and picture frames", regular: true, deep: true, moveInOut: false },
        { task: "Dust decor and picture frames", regular: true, deep: true, moveInOut: false },
        { task: "Dust decor and picture frames", regular: true, deep: true, moveInOut: false },
        { task: "Dust decor and picture frames", regular: true, deep: true, moveInOut: false },
        { task: "Dust decor and picture frames", regular: true, deep: true, moveInOut: false },
        { task: "Dust decor and picture frames", regular: true, deep: true, moveInOut: false },
        { task: "Dust decor and picture frames", regular: true, deep: true, moveInOut: false },
        { task: "Dust decor and picture frames", regular: true, deep: true, moveInOut: false },
        { task: "Dust decor and picture frames", regular: true, deep: true, moveInOut: false },
        { task: "Dust decor and picture frames", regular: true, deep: true, moveInOut: false },
        { task: "Dust decor and picture frames", regular: true, deep: true, moveInOut: false },
        { task: "Dust decor and picture frames", regular: true, deep: true, moveInOut: false },
        // Add more items as necessary
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar heading={"Checklist"} />
            <div className="p-8 max-w-5xl mx-auto">
                <h1 className="text-2xl font-semibold mb-6">Checklist</h1>
                
                <div className="flex space-x-4 mb-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-2 px-4 ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-md transition`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Checklist Table */}
                <div className="bg-blue-50 p-4 rounded-md shadow-lg">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr className="bg-blue-100">
                                <th className="py-2 px-4 text-left">Requirements</th>
                                <th className="py-2 text-center">Regular Clean</th>
                                <th className="py-2 text-center">Deep Clean</th>
                                <th className="py-2 text-center">Move In/Out</th>
                            </tr>
                        </thead>
                        <tbody>
                            {checklistItems.map((item, index) => (
                                <tr key={index} className="border-b">
                                    <td className="py-2 px-4">{item.task}</td>
                                    <td className="py-2 text-center">
                                        <div className="flex items-center justify-center">
                                            {item.regular ? <AiOutlineCheck className="text-green-500" /> : <AiOutlineClose className="text-red-500" />}
                                        </div>
                                    </td>
                                    <td className="py-2 text-center">
                                        <div className="flex items-center justify-center">
                                            {item.deep ? <AiOutlineCheck className="text-green-500" /> : <AiOutlineClose className="text-red-500" />}
                                        </div>
                                    </td>
                                    <td className="py-2 text-center">
                                        <div className="flex items-center justify-center">
                                            {item.moveInOut ? <AiOutlineCheck className="text-green-500" /> : <AiOutlineClose className="text-red-500" />}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Checklist;
