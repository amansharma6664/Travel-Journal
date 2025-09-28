"use client";
import { useRouter } from "next/navigation";

interface LogoutButtonProps {
  onLogout?: () => void;
}

export default function LogoutButton({ onLogout }: LogoutButtonProps) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    if (onLogout) onLogout();
    router.push("/");  
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200 transition"
    >
      Logout
    </button>
  );
}
