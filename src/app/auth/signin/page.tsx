// src/app/auth/signin/page.tsx
//이걸 사용하면 무조건 명시해줘야 하나봐
'use client'; // 클라이언트 컴포넌트로 설정

import { useState } from 'react'; // useState 훅을 가져옴
import { signInWithEmailAndPassword } from 'firebase/auth'; // 이메일과 비밀번호로 로그인하는 함수 가져옴
import { auth } from '../../../lib/firebase'; // Firebase 인증 객체 가져옴
import { useRouter } from 'next/navigation'; // Next.js 라우터 훅 가져옴

const SignIn = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const router = useRouter(); 
  //useRouter 훅은 Next.js의 내장 라우팅 시스템을 제어하는 도구

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/admin'); // 로그인 성공 시 '/admin' 경로로 이동
    } catch (error) {
      alert('Login failed AGIN PLESE'); // 로그인 실패 시 경고 메시지
    }
  };

  return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen">
      <h1 className="text-4xl mb-8">Welcome to the secret garden.</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email} // 이메일 상태 변수와 바인딩
            onChange={(e) => setEmail(e.target.value)} // 입력 변화 시 상태 업데이트
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password} // 비밀번호 상태 변수와 바인딩
            onChange={(e) => setPassword(e.target.value)} // 입력 변화 시 상태 업데이트
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

//======유즈 라우터 뭐예요?=====
//next/navigation에서 제공되며, 이를 통해 페이지 간 탐색을 쉽게 관리하고 라우팅 관련 기능을 활용 가능
//push: 특정 경로로 이동
//pathname: 현재 페이지의 경로
//query: 현재 경로의 쿼리 매개변수
//beforePopState: 사용자가 페이지를 떠나기 전에 실행되는 이벤트
// replace 메소드는 현재 URL을 새 URL로 교체하며, 브라우저 히스토리를 수정-> 이전페이지로 돌아가지 않음

// link랑 다른점
//페이지 간의 이동을 처리 ->JSX 내부에서 사용되어 사용자 인터페이스의 링크를 생성
//클릭 동작을 대체하여 클라이언트 사이드 네비게이션을 수행
// 컴포넌트이고  주로 정적 링크를 생성( 예측 가능한 네비게이션)
//a와 다른점은 클라이언트 사이드 네비게이션을 수행하여 전체 페이지 리로드 없이 빠르게 페이지를 전환 가능



//useRouter: Next.js 훅 페이지 간 프로그래밍 방식 이동 관리 함수 내 라우팅 제어 조건부 페이지 이동에 사용
//버튼 클릭, 폼 제출(사용자 인터랙션) 등 후에 페이지를 이동
//지금은 조건이라서 이걸 사용 / 물론 폼을 사용하기도 하였음  둘다 클라단의 이동과 관련있음
// 사용자 인터랙션
//리액트 훅 출신이고(상태관리, 생명주기) 넥스트에서 생성한 훅
// useRouter: Next.js의 클라이언트 측 라우팅을 처리하기 위한 훅.
// useSWR: 데이터 페칭을 간편하게 처리하기 위한 훅(Next.js 팀에서 만든 SWR 라이브러리).