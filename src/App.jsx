import {
    BrowserRouter,
    Navigate,
    Outlet,
    redirect,
    Route,
    Router,
    Routes,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TestPage from "./pages/TestPage";
import TestResultPage from "./pages/TestResultPage";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import UserContextProvider, { UserContext } from "./components/UserContext";
import Layout from "./components/Layout";
import { useContext } from "react";

function App() {
    const PublicRoute = () => {
        // 로그인 여부 확인
        const { user } = useContext(UserContext);

        if (user?.success) {
            alert("로그인 되어있습니다.");
            return <Navigate to="/" />;
        }
        return <Outlet />;
    };

    const privateRoute = () => {
        const { user } = useContext(UserContext);

        if (!user?.success) {
            alert("로그인안했다아이가끄지라마;");
            return <Navigate to="/login" />;
        }
    };

    return (
        <UserContextProvider>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route element={<PublicRoute />}>
                            <Route path="/login" element={<Login />}></Route>
                            <Route path="/signup" element={<Signup />}></Route>
                        </Route>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/test" element={<TestPage />}></Route>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </UserContextProvider>
    );
}

export default App;
