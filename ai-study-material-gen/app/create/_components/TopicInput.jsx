import React from 'react';
import { Textarea } from '../../../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/select';

function TopicInput({ setTopic, setDifficultyLevel }) {
  return (
    <div className="mt-3 w-full flex flex-col">
      <h2>Enter the topic or paste the content for which you want to generate study material</h2>
      <Textarea
        placeholder="Start writing here..."
        className="mt-2 mb-5 w-full"
        onChange={(event) => setTopic(event.target.value)}
      />
      <h2 className="mb-3">Select the difficulty Level</h2>
      <Select onValueChange={(value) => setDifficultyLevel(value)}>
        <SelectTrigger className="w-full mb-5">
          <SelectValue placeholder="Difficulty Level" />
        </SelectTrigger>
        <SelectContent className="bg-white border rounded shadow-lg">
          <SelectItem value="Easy">Easy</SelectItem>
          <SelectItem value="Moderate">Moderate</SelectItem>
          <SelectItem value="Hard">Hard</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default TopicInput;
