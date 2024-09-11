import React from "react";
import { useNavigate } from "react-router-dom";
import calculateMBTI from "../utils/mbtiCalculator";
import TestForm from "../components/TestForm";
import { createResults } from "../api/testResults";

const TestPage = ({ user }) => {
    const navigate = useNavigate();

    console.log(user);

    const handleTestSubmit = async (answer) => {
        const result = calculateMBTI(answer);
        const resultData = {
            userId: user.userId,
            nickname: user.nickname,
            result,
            answer,
            date: new Date().toISOString(),
            visibility: true,
        };
        await createResults(resultData);
        navigate("/result");
    };
    return (
        <div>
            <h1>MBTI테스트</h1>
            <TestForm onSubmit={handleTestSubmit} />
        </div>
    );
};

export default TestPage;
