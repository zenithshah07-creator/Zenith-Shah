'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initGA, trackPageView } from '@/utils/analytics';

export default function AnalyticsProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        initGA();
    }, []);

    useEffect(() => {
        if (pathname) {
            trackPageView(pathname + (searchParams?.toString() || ''));
        }
    }, [pathname, searchParams]);

    return <>{children}</>;
}
