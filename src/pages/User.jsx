import React from 'react';
import styled from 'styled-components';

function user() {
    return (
        <>
            <UserHeader>
                <UserImageBanner>이미지</UserImageBanner>
                <UserInfo>
                    <UserNicName>닉네임</UserNicName>
                    <br></br>
                    <UserDesc>안녕 나는 붕어빵이야</UserDesc>

                    <UserImail>유저 이메일</UserImail>
                </UserInfo>
            </UserHeader>

            <WriteList>내가 쓴목록</WriteList>
        </>
    );
}
const UserHeader = styled.div`
    text-align: center;
`;

const UserImageBanner = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: yellow;
`;

const UserInfo = styled.div`
    display: flex;
    justify-content: center;
`;
const UserNicName = styled.h``;

const UserDesc = styled.div``;

const UserImail = styled.div``;

const WriteList = styled.div``;

export default user;
