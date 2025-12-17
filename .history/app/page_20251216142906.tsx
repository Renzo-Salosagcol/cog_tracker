import Image from "next/image";

export default function Home() {
  return (
    <div className="root-page-element bg-[url('/login_background.jpg')] bg-cover bg-center min-h-screen">
        <h1 className="text-4xl font-bold mt-6">Welcome to COG Tracker</h1>
        <p className="mt-4 text-lg text-center max-w-md">
          Track your client owned goods in a centralized and easily accessible way.
        </p>
    </div>
  );
}
