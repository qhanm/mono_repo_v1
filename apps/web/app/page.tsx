import { Button } from "@workspace/ui/components/button";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <Button size="sm" variant="destructive">
          Button
        </Button>
      </div>
    </div>
  );
}
