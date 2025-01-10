import Image from "next/image";
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div>
      <h1>AI Study Material Generator</h1>
      
        This is a tool that generates study material for AI students.
        <Button variant="outline">Generate</Button>
        <UserButton/>
      
      
      
    </div>
  );
}
