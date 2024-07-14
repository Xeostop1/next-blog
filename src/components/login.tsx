'use client';

import { useRouter } from 'next/navigation';
import { Gi3dStairs } from 'react-icons/gi';

const LoginButton = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/auth/signin');
  };

  return (
    <button onClick={handleLoginClick} className="text-white text-3xl cursor-pointer bg-transparent border-none">
      <Gi3dStairs />
    </button>
  );
};

export default LoginButton;
