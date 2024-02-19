"use client";
import Link from 'next/link';

interface pathProps {
    path: string
}

export default function Breadcrumbs({ path } : pathProps) {
    // Split the path into segments
    const segments = path.split('/').filter(segment => segment);

    return (
        <nav className=" py-2 px-4 border-b border-black border-opacity-25">
            <ol className="list-none flex">
                <li className="flex items-center">
                    <Link href="/">
                        Home
                    </Link>
                    <span className="font-semibold text-gray-500 px-1">/</span>
                </li>
                {segments.map((segment, index) => (
                    <li key={index} className="flex items-center">
                        <Link href={`/${segments.slice(0, index + 1).join('/')}`}>
                            {segment}
                        </Link>
                        {index < segments.length - 1 && (
                            <span className="font-semibold text-gray-500 px-1">/</span>
                            )}
                    </li>
                    ))}
            </ol>
        </nav>
        );
}
