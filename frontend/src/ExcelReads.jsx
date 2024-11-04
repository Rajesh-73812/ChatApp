import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ExcelReads = () => {
    const [excelData, setExcelData] = useState({ headers: [], data: [] });

    useEffect(() => {
        fetchDataFromExcel();
    }, []);

    const fetchDataFromExcel = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/excelRead");
            setExcelData(response.data); // Set both headers and data
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div>
            <h4 className='text-center'>Excel Data Read</h4>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {excelData.headers.map((header, index) => (
                                <th key={index} className="px-6 py-3">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {excelData.data.map((item, index) => (
                            <tr key={index}>
                                {excelData.headers.map((header) => (
                                    <td key={header} className="px-6 py-4">
                                        {item[header] ? item[header].toString() : ''}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );  
};

export default ExcelReads;
