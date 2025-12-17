import Image from "next/image";

export default function Home() {
  return (
    <div className="root-page-element">
        <Image
          src="/login_background.jpg"
          alt="COG Tracker Logo"
          width={100}
          height={200}
        />
        <h1 className="text-4xl font-bold mt-6">Welcome to COG Tracker</h1>
        <p className="mt-4 text-lg text-center max-w-md">
          Track your client owned goods in a centralized and easily accessible way.
        </p>
    </div>
  );
}
