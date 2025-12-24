import { Navbar } from "@/components/navbar";

export default function DashboardPage() {
  return (
    <Navbar />
    <div className="root-page-element bg-background">
      
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  );
}