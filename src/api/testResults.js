import axios from "axios";

const API_URL = "http://localhost:5000/testResults";

export const getTestResults = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createResults = async (resultData) => {
    //post(주소,내용(body),header) 필요 없을 경우 생략 가능
    const response = await axios.post(API_URL, resultData);
    return response.data;
};

export const deleteTestResult = async (id) => {};

export const updateTestResultVisibility = async (id, visibility) => {};
