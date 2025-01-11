
"use client";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";


function Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      checkIsNewUser();
    }
  }, [user]);

  const checkIsNewUser = async () => {
    
      const resp= await axios.post('/api/create-user',{user:user});
      console.log(resp.data);
  };

  return <>{children}</>;
}

export default Provider;
