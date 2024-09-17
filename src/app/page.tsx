import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link
        href={{
          pathname: '/Dashboard',
        }}
      >
        Route to DashBoard Page
      </Link>
    </main>
  );
}
