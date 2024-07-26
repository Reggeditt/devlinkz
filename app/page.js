'use client'

import { useEffect } from "react";
import { useAuth } from "./context/authContext";
import HomePage from "./home/page";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else router.push('/home');
  }, [user]);
  return <HomePage />;
}
