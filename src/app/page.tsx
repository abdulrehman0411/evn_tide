import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link
        href={{
          pathname: '/dashboard',
        }}
      >
        Route to DashBoard Page
      </Link>
    </main>
  );
}
