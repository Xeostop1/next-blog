'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { auth } from '../../lib/firebase'; 
import { onAuthStateChanged, signOut } from 'firebase/auth'; // Firebase 인증 함수 import
//unsubscribe: onAuthStateChanged 함수가 반환하는 구독 해제 함수

const Admin = () => {
  const [loading, setLoading] = useState(true); 
  const [user, setUser] = useState<null | { email: string }>(null); // 사용자 상태 변수(이메일)
  const router = useRouter(); 

//여기서 useEffect 사용했다는 것이 중요
  
// useEffect의 클린업 함수
// 컴포넌트 언마운트 또는 useEffect 재실행 시 호출
// 주요 역할: 구독 해제, 타이머 정리, 비동기 작업 취소

// 메모리 누수 방지, 불필요한 작업 중단
// Firebase onAuthStateChanged의 경우: -> 반환된 unsubscribe 함수로 인증 상태 변화 구독 해제
// 컴포넌트 정리 시 자동 실행되어 안전한 리소스 관리


  useEffect(() => {
    // Firebase 인증 상태 변화 감지(위의 함수 이용)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // 사용자가 로그인 이라면
        setUser({ email: user.email! });
        setLoading(false);
      } else {
        // 사용자가 로그아웃
        router.push('/auth/signin'); // 로그인 페이지로 이동
      }
    });

    return () => unsubscribe(); //onAuthStateChanged 함수가 반환하는 구독 해제 함수
  }, [router]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="flex flex-col items-center  bg-black text-white min-h-screen">
      <h1 className="text-4xl mb-8">Admin Page</h1>
      <h2 className="text-4xl mb-8">디비를 연결해야 해요.<br />그래서 아직 뭐 해야 할지 모르겠어요</h2>
      {user ? (                 // 사용자가 로그인된 경우      ! 안쓰는 방향으로 변경해야 돼      
        <>
          <p>Welcome, {user.email}!</p>   
          <button
            onClick={() => {
              signOut(auth);              // 로그아웃 처리(useEffect 으로 anth)
              router.push('/auth/signin'); // 로그인 페이지로 이동
            }}
            className="
            bg-red-500 hover:bg-red-700 text-white 
            font-bold py-2 px-4 rounded 
            focus:outline-none focus:shadow-outline mt-4"
          >
            Sign Out
          </button>
        </>
      ) : (
        <p>로그인 되지 않았습니다. </p>       // 사용자가 로그인되지 않은 경우
      )}
    </div>
  );
};

export default Admin;
