import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

    const [id, setId] = useState();
    const [password, setPassword] = useState();
    const [nickname, setNickname] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        //axios 요청
        const response = await axios.post(
            "https://moneyfulpublicpolicy.co.kr/register",
            {
                id,
                password,
                nickname,
            }
        );

        if (response.data.success) {
            alert("가입되셨습니다.");
            navigate("/login");
        } else {
            alert("아이디 또는 비밀번호, 닉네임을 확인해주세요.");
        }
    };

    return (
        <div>
            <h1>회원가입 페이지</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="아이디"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="패스워드"
                />
                <input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder="닉네임"
                />
                <button>회원가입</button>
            </form>
        </div>
    );
};

export default SignUp;
