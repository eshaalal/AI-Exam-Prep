import { inngest } from "./client";
import { USER_TABLE } from "../configs/schema";
import { db } from "../configs/db";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { event, body: "Hello, World!" };
  }
);

export const CreateNewUser = inngest.createFunction(
  { id: "create-user" },
  { event: "user.create" },
  async ({ event, step }) => {
    const { user } = event.data;

    const result = await step.run(
      "check User and create new User if not in DB",
      async () => {
        try {
          // Check if the user already exists in the database
          const queryResult = await db
            .select()
            .from(USER_TABLE)
            .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));
          console.log("User check result:", queryResult);

          // If no user is found, insert the new user into the database
          if (queryResult?.length === 0) {
            const userResp = await db
              .insert(USER_TABLE)
              .values({
                name: user?.fullName || "Unknown User",
                email: user?.primaryEmailAddress?.emailAddress || "Unknown Email",
              })
              .returning({ id: USER_TABLE.id });
            return userResp;
          }
          return queryResult; // Return the query result if the user exists
        } catch (error) {
          console.error("Error checking or inserting user:", error);
        }
        return null; // Return null in case of an error
      }
    );

    return "Success";
  }
);
