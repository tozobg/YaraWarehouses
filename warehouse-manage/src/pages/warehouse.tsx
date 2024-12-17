// pages/about.tsx
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container">
      <h1>About This App</h1>
      <p>This is to test routing.</p>
      <Link href="/">
        Back to Home
      </Link>
    </div>
  );
}
