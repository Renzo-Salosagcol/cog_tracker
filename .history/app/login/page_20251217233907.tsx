import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="root-page-element bg-background">
      <h1 className="text-2xl font-bold">Login Page</h1>
      <p className="mt-4">Please enter your credentials to log in.</p>
      <Link href="/" passHref>
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md">
          Back to Home
        </button>
      </Link>
    </div>
  );
}