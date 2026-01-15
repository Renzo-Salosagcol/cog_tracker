import { Navbar } from "@/components/navbar";

import { useState } from "react";

export default function DashboardPage() {
  const [group, setGroup] = useState<string | null>(null);

  setGroup("example-group-id");

  return (
    <div className="root-page-element bg-background">
      <Navbar />
      <div className="pt-16 px-6">
        test
      </div>
    </div>
  );
}