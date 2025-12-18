import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="root-page-element bg-background">
      <h1 className="text-2xl font-bold">Signup Page</h1>
      <p className="mt-4">Create a new account to get started.</p>
      <Link href="/" passHref>
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md">
          Back to Home
        </button>
      </Link>
    </div>
  );
}