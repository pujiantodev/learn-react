import {
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandTwitter,
} from '@tabler/icons-react';

export default function App() {
    return (
        <div className={'bg-slate-900 grid place-content-center min-h-screen'}>
            <h1 className={'text-xl text-white'}>Learn React</h1>
            <div className={'flex gap-x-2'}>
                <Button type={'submit'} onClick={() => console.log('Register')}>
                    <IconBrandFacebook />
                    Register with Facebook
                </Button>

                <Button
                    className={'bg-pink-600'}
                    type='button'
                    onClick={() => console.log('Login')}
                >
                    <IconBrandTwitter />
                    Login with Twitter
                </Button>
                <Button
                    className={'bg-black'}
                    type='button'
                    onClick={() => console.log('Login')}
                >
                    <IconBrandGithub />
                    Login with Twitter
                </Button>
            </div>
        </div>
    );
}
function Button(props) {
    const { className = 'bg-blue-600', text, children } = props;
    return (
        <button
            {...props}
            className={`${className} flex items-center text-white px-4 py-2 rounded`}
        >
            {text || children}
        </button>
    );
}
