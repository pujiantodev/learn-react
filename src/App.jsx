import MainLayout from './layouts/MainLayout';
import Routes from './routes';

export default function App({ children }) {
    return (
        <>
            <div className='min-w-full'>
                <MainLayout />
                <Routes />
            </div>
        </>
    );
}
