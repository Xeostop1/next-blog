// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


//.env.local 파일은 Next.js 프로젝트의 루트에 위치, 환경 변수를 정의
//. Next.js는 이 파일을 자동으로 읽어 프로젝트 전체에서 사용할 수 있는 환경 변수를 설정
// 사용하는 이유 ->보안: API 키, 데이터베이스 URL 등 민감한 정보를 코드에 직접 작성하지 않고, 환경 변수로 관리

//.env: 모든 환경에서 공통으로 사용할 환경 변수
//.env.development: 개발 환경에서 사용할 환경 변수를 정의
// env.test: 테스트 환경에서 사용할 환경 변수를 정의


//보안때문에 따로 쓴거네 그러면 
/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPNzW632KuaeQk5ps4AvSGFeOG4XPmw9Y",
  authDomain: "next-blog-hn.firebaseapp.com",
  projectId: "next-blog-hn",
  storageBucket: "next-blog-hn.appspot.com",
  messagingSenderId: "48167852659",
  appId: "1:48167852659:web:ddefd4497f1f4241f82806",
  measurementId: "G-5Y7MJLHC7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/

//프로젝트 이름 project-48167852659