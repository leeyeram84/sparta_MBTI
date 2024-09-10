import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>무료 성격 테스트</h1>
            <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변을 해주세요.</p>
            <button onClick={() => navigate("/test")}>테스트하러가기</button>
        </div>
    );
};

export default Home;
