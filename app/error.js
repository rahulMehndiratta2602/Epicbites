'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.log(error);
        console.error(error);
    }, [error]);

    return (
        <main className='error'>
            <h1>Something went wrong!</h1>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </main>
    );
}