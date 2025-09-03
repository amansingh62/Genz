"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const GoogleAuthHandler = () => {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      // ✅ Store token securely in localStorage
      localStorage.setItem("token", token);

      // ✅ Remove the token from the URL
      urlParams.delete("token");

      // ✅ Replace the URL without reloading the page
      router.replace(window.location.pathname);
    }
  }, [router]);

  return null; // No UI needed, just handling auth
};

export default GoogleAuthHandler;
