import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/UserContext";

const Home = () => {
    const navigate = useNavigate();

    const { user } = useContext(UserContext);

    // 이동시 로그인 여부 확인
    const onClickHandler = () => {
        if (user) {
            navigate("/test");
        } else {
            alert("로그인을 해주세요");
            navigate("/login");
        }
    };

    return (
        <div>
            <h1>무료 성격 테스트</h1>
            <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변을 해주세요.</p>
            <button onClick={onClickHandler}>테스트하러가기</button>
        </div>
    );
};

export default Home;
