"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [todo, setTodos] = useState([]);
  const [userInput, setUserInput] = useState();

  console.log("userInput", userInput);
  console.log("todo", todo);

  const addTodos = () => {
    const newTodoObject = {
      id: todo.length + 1,
      todo: userInput,
    };

    return [...todo, newTodoObject];
  };

  // onSubmit on form
  // capture user input
  // add it to a todos state

  return (
    <main className="container mx-auto flex justify-center mt-40">
      <form className="flex gap-6" action="submit" onSubmit={() => addTodos()}>
        <Input
          className="w-[400px]"
          type="text"
          placeholder="Add to do"
          onChange={(event) => setUserInput(event?.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
      <div></div>
    </main>
  );
}
