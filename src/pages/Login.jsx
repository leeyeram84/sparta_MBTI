import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/UserContext";

const Login = () => {
    const navigate = useNavigate();

    const { setUser } = useContext(UserContext);
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        //axios 요청
        const response = await axios.post(
            "https://moneyfulpublicpolicy.co.kr/login",
            {
                id,
                password,
            }
        );

        if (response.data.success) {
            alert("로그인 되었습니다.");
            navigate("/");
        } else {
            alert("아이디 또는 비밀번호, 닉네임을 확인해주세요.");
        }

        setUser(response.data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>로그인페이지</h1>
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
                    placeholder="비밀번호"
                />
                <button type="submit">로그인</button>
            </form>
        </div>
    );
};

export default Login;
