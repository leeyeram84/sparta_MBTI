import React, { useContext, useEffect, useState } from "react";
import { getTestResults } from "../api/testResults";
import TestResultList from "../components/TestResultList";

const TestResultPage = ({ user }) => {
    const [results, setResults] = useState([]);

    const fetchResults = async () => {
        const data = await getTestResults();
        setResults(data);
    };

    useEffect(() => {
        fetchResults();
    }, []);

    const handleUpdate = () => {
        fetchResults();
    };

    const handleDelete = () => {
        fetchResults();
    };

    return (
        <div>
            <h1>모든 테스트 결과</h1>
            <TestResultList
                results={results}
                user={user}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default TestResultPage;
