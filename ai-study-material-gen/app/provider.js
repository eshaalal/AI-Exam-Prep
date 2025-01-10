"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { USER_TABLE } from "@/configs/schema";
import { db } from "@/configs/db";
import { eq } from "drizzle-orm";

function Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      checkIsNewUser();
    }
  }, [user]);

  const checkIsNewUser = async () => {
    try {
      // Check if the user already exists in the database
      const result = await db
        .select()
        .from(USER_TABLE)
        .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));
      console.log("User check result:", result);

      // If no user is found, insert the new user into the database
      if (result?.length === 0) {
        const userResp = await db
          .insert(USER_TABLE)
          .values({
            name: user?.fullName || "Unknown User",
            email: user?.primaryEmailAddress?.emailAddress || "Unknown Email",
          })
          .returning({ id: USER_TABLE.id });
        console.log("Inserted new user:", userResp);
      }
    } catch (error) {
      console.error("Error checking or inserting user:", error);
    }
  };

  return <>{children}</>;
}

export default Provider;
