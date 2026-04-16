import Link from "next/link";

export const metadata = {
  title: "Page not found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main className="section">
      <div className="container-app py-16 text-center">
        <h1 className="section-title">404</h1>
        <p className="lead mx-auto">
          This page is not available. Check the URL or go back home.
        </p>
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </main>
  );
}
