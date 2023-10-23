import ContentLayout from '../../layouts/ContentLayout';
import InputText from '../../components/InputText';
import { useState } from 'react';
import InputLabel from '../../components/InputLabel';
import InputError from '../../components/InputError';

export default function SignIn() {
    const [registerform, setRegisterform] = useState({
        email: '',
        password: '',
    });
    function handleChange(e) {
        setRegisterform({
            ...registerform,
            [e.target.name]: e.target.value,
        });
    }
    return (
        <>
            <ContentLayout>
                <div className='flex items-center justify-center'>
                    <div className='mt-6 w-full overflow-hidden border border-gray-200 bg-white px-6 py-4 shadow-md dark:border-gray-700 dark:bg-inherit sm:max-w-md sm:rounded-lg'>
                        <form>
                            <div className='mb-6'>
                                <h1 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200'>
                                    Sign In
                                </h1>
                            </div>
                            <div className='mb-6'>
                                <InputLabel htmlFor='email' value={'Email'} />
                                <InputText
                                    id='email'
                                    type='email'
                                    className='mt-1 block w-full'
                                    name='email'
                                    autoFocus
                                    onChange={handleChange}
                                />
                                <InputError className='mt-2' />
                            </div>
                            <div className='mt-4'>
                                <InputLabel
                                    htmlFor='password'
                                    value={'Password'}
                                />

                                <InputText
                                    id='password'
                                    type='password'
                                    className='mt-1 block w-full'
                                    name='password'
                                    onChange={handleChange}
                                />
                                <div className='mt-2'>
                                    <p className='text-sm text-red-600'></p>
                                </div>
                            </div>
                            <div className='mt-4 block'>
                                <label className='flex items-center'>
                                    <input
                                        type='checkbox'
                                        className='rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500'
                                        name='remember'
                                    />
                                    <span className='ml-2 text-sm text-gray-600'>
                                        Remember me
                                    </span>
                                </label>
                            </div>
                            <div className='mt-4 flex items-center justify-end'>
                                <a
                                    className='rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                    href='https://rekonsel.lkh.co.id/forgot-password'
                                >
                                    Forgot your password?
                                </a>
                                <button className='ml-4 inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900'>
                                    Sing Up
                                </button>
                            </div>
                        </form>
                        <div>{registerform.email}</div>
                        <div>{registerform.password}</div>
                    </div>
                </div>
            </ContentLayout>
        </>
    );
}
