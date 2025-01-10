import Image from "next/image";
import { Button } from "@/components/ui/button"
export default function Home() {
  return (
    <div>
      <h1>AI Study Material Generator</h1>
      <p>
        This is a tool that generates study material for AI students.
        <Button variant="outline">Generate</Button>
      </p>
      
      
    </div>
  );
}
