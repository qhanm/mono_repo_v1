import "./App.css";
import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
import SidebarLayout from "@workspace/ui/layouts/sidebar";

function App() {
  return (
    <>
      <div className="text-red-500">Test</div>
      <SidebarLayout />
      <Card>
        <Button variant="outline" type="button" className="w-fit">
          Click
        </Button>
      </Card>
    </>
  );
}

export default App;
