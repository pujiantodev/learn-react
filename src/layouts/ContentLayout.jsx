export default function ContentLayout({ header, children }) {
    return (
        <>
            {header && (
                <header className='bg-white shadow dark:bg-gray-700 '>
                    <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
                        <h1 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200'>
                            {header}
                        </h1>
                    </div>
                </header>
            )}

            <main>
                <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
                    {children}
                </div>
            </main>
        </>
    );
}
