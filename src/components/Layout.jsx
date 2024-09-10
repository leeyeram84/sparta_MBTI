import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const Layout = ({ children }) => {
    const navigate = useNavigate();

    // 로그인상태
    const { user } = useContext(UserContext);
    const isLoggedIn = user?.success === true ? true : false; //memo.text 11 line~
    const nickname = user?.nickname ?? "";

    console.log(user);

    // 헤더 로그아웃 버튼 클릭 시 alert 및 메인페이지 이동
    const handleLogout = () => {
        const confirmLogout = window.confirm("로그아웃 하시겠습니까?");
        if (confirmLogout) {
            logout();
            navigate("/");
        }
    };

    return (
        <>
            <header>
                <nav>
                    <Link to="/">홈</Link>
                    <div>
                        {isLoggedIn ? (
                            <>
                                {nickname}님 안녕하세요!
                                <button onClick={handleLogout}>로그아웃</button>
                            </>
                        ) : (
                            <>
                                <button onClick={() => navigate("/login")}>
                                    로그인
                                </button>
                                <button onClick={() => navigate("/signup")}>
                                    회원가입
                                </button>
                            </>
                        )}
                    </div>
                </nav>
            </header>
            <div>{children}</div>
        </>
    );
};

export default Layout;
