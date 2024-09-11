import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext } from "../components/UserContext";

const Profile = ({ user }) => {
    const { setUser } = useContext(UserContext);
    const [nickname, setNickname] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault;

        try {
            const token = user.accessToken;

            const formData = new FormData();
            formData.append("nickname", nickname);

            const response = await axios.patch(
                "https://moneyfulpublicpolicy.co.kr/profile",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.data.success) {
                setUser((prevState) => ({
                    ...prevState,
                    nickname: response.data.nickname,
                }));
                alert("닉네임이 변경되었습니다.");
                setNickname("");
            } else {
                alert("닉네임 변경에 실패했습니다.");
            }
        } catch (error) {
            console.error("Failed to fetch user info:", error);
            alert("닉네임 변경에 실패했습니다.");
        }
    };

    return (
        <div>
            <h1>마이페이지</h1>
            {user.nickname}어서오고
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder="닉네임"
                />
                <button type="submit">닉네임 변경</button>
            </form>
        </div>
    );
};

export default Profile;
