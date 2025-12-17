import Image from "next/image";

export default function Home() {
  return (
    <div className="root-page-element bg-[url('/login_background.jpg')] bg-cover bg-center min-h-screen">
      <form className="glassmorphism p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl text-foreground">Welcome to the COG Tracker</h1>
        <p className="mt-4 text-lg text-center max-w-md">
          Track your client owned goods in a centralized and easily accessible way.
        </p>
      </form>
    </div>
  );
}
