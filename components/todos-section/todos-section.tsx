import { Button } from "../ui/button";

export default function ToDosSection({ todos }) {
  return (
    <div className="mt-10 w-1/2 border-solid border-2 border-indigo-600">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="border-solid border-2 border-red-600 p-2 flex justify-between"
        >
          <div>{todo.name}</div>
          <div>
            <Button variant="outline" className="mr-2">
              Complete
            </Button>
            <Button>Delete</Button>
          </div>
        </div>
      ))}
    </div>
  );
}
