import { getSortedLabsData } from '@/lib/labs';
import Link from 'next/link';

export default function WorkshopsPage() {
  const labs = getSortedLabsData();

  return (
    <main className="p-20">
      <h1 className="text-4xl font-bold mb-10">Laboratori di Networking</h1>
      <ul className="space-y-4">
        {labs.map((lab: any) => (
          <li key={lab.slug}>
            <Link href={`/labs/${lab.slug}`} className="text-emerald-400 hover:underline">
              {lab.title} - {lab.tech}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}