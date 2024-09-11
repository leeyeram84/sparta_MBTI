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
    const { user } = useContext(UserContext);
    // 로그인 여부 확인
    const PublicRoute = () => {
        if (user?.success) {
            alert("로그인 되어있습니다.");
            return <Navigate to="/" />;
        }
        return <Outlet />;
    };

    // 강제 접근 막기

    const PrivateRoute = () => {
        console.log(user);
        if (!user?.success) {
            alert("로그인해주세요!!");

            return <Navigate to="/login" />;
        }
        return <Outlet />;
    };

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route element={<PublicRoute />}>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/signup" element={<Signup />}></Route>
                    </Route>
                    <Route element={<PrivateRoute />}>
                        <Route
                            path="/test"
                            element={<TestPage user={user} />}
                        ></Route>
                        <Route
                            path="/result"
                            element={<TestResultPage user={user} />}
                        ></Route>
                        <Route
                            path="/profile"
                            element={<Profile user={user} />}
                        ></Route>
                    </Route>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
