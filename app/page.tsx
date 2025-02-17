"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import ToDosSection from "@/components/todos-section/todos-section";
import { capitalizeFirstLetter } from "@/lib/utils";

export type Todo = {
  id: number;
  name: string;
};

export type TTodos = {
  todos: Todo[];
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedToDos, setCompletedToDos] = useState<Todo[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [completedItemsToggle, setCompletedItemsToggle] = useState(false);

  useEffect(() => {
    const todosFromLocalStorage = localStorage.getItem("todos");

    if (todosFromLocalStorage) {
      setTodos(JSON.parse(todosFromLocalStorage));
    }
  }, []);

  const addTodos = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (!userInput.trim()) return;

    const newTodoObject = {
      id: new Date().getTime(),
      name: capitalizeFirstLetter(userInput),
    };

    setTodos([...todos, newTodoObject]);
    setUserInput("");

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  console.log("todos", todos);

  const deleteToDo = (id: number) => {
    const remove = todos.filter((item) => item.id !== id);

    setTodos(remove);
    localStorage.setItem("todos", JSON.stringify(remove));
  };

  const completeToDo = (id: number) => {
    const completed = todos.filter((item) => item.id === id);
    const newList = todos.filter((item) => item.id !== id);
    setCompletedToDos([...completedToDos, ...completed]);
    setTodos(newList);
  };

  // LEFT OFF - can add items to completed list and dletes them from to do list, BUT need to be able to click on completed items and that shows the finished items. Can also then click back using STATE.  Some cool animations would be nice.

  return (
    <main className="container mx-auto flex mt-40 flex-col items-center justify-center ">
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
      {todos.length > 0 ? (
        <ToDosSection
          todos={todos}
          deleteToDo={deleteToDo}
          completeToDo={completeToDo}
        />
      ) : (
        <p className="mt-10 text-sm text-slate-400 mb-8 ">
          This list is empty, please add your todos
        </p>
      )}
      {completedToDos.length > 0 ? (
        <Button
          variant="outline"
          className="text-sm border-solid border-2 border-gray cursor-pointer p-2 mb-2"
          onClick={() => {
            if (completedItemsToggle) {
              setCompletedItemsToggle(false);
            } else {
              setCompletedItemsToggle(true);
            }
          }}
        >
          Completed items
        </Button>
      ) : null}
      {completedItemsToggle &&
        completedToDos.map((item) => <p key={item.id}>{item.name}</p>)}
    </main>
  );
}
