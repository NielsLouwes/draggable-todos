"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ToDosSection from "@/components/todos-section/todos-section";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [userInput, setUserInput] = useState("");

  console.log("userInput", userInput);
  console.log("todos", todos);

  const addTodos = (event) => {
    event?.preventDefault();
    if (!userInput.trim()) return; // Prevents adding empty todos

    const newTodoObject = {
      id: todos.length + 1,
      name: userInput,
    };

    setTodos([...todos, newTodoObject]);
    setUserInput("");
  };

  return (
    <main className="container mx-auto flex mt-40 flex-col items-center justify-center border-solid border-2 border-black-600">
      <form className="flex gap-6" onSubmit={addTodos}>
        <Input
          className="w-[400px]"
          type="text"
          placeholder="Add to do"
          value={userInput}
          onChange={(event) => setUserInput(event?.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
      <ToDosSection todos={todos} />
    </main>
  );
}
