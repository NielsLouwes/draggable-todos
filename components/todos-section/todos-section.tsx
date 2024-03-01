import { Todo } from "@/app/page";
import { Button } from "../ui/button";

type ToDosSectionProps = {
  deleteToDo: (id: any) => void;
  todos: Todo[];
};

export default function ToDosSection({ todos, deleteToDo }: ToDosSectionProps) {
  return (
    <div className="mt-10 w-1/2 ">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="border-solid border-2 border-black-600 p-2 flex justify-between m-4 overflow-y-auto text-ellipsis whitespace-normal"
        >
          <div className="w-3/5">{todo.name}</div>
          <div>
            <Button variant="outline" className="mr-2">
              Complete
            </Button>
            <Button onClick={() => deleteToDo(todo.id)}>Delete</Button>
          </div>
        </div>
      ))}
    </div>
  );
}
