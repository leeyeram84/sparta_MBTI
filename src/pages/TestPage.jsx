import React from "react";
import { useNavigate } from "react-router-dom";
import calculateMBTI from "../utils/mbtiCalculator";
import TestForm from "../components/TestForm";

const Test = ({ user }) => {
    const navigate = useNavigate();

    const handleTestSubmit = async (answer) => {
        const result = calculateMBTI(answer);
        const resultData = {
            userId: user.id,
            nickname: user.nickname,
            result,
            answer,
            date: new Date().toISOString(),
            visibility: true,
        };
    };
    return (
        <div>
            <h1>MBTI테스트</h1>
            <TestForm onSubmit={handleTestSubmit} />
        </div>
    );
};

export default Test;
