import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <form className="flex gap-10" action="submit">
        <Input className="w-[400px]" type="text" placeholder="Add to do" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
