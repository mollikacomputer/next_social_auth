import Link from 'next/link';
import React from 'react';

const login = () => {
    return (
        <div>
            <h2 className="text-2xl"> Login Page </h2>
            <Link href='/' > Back to Home page </Link>
        </div>
    );
};

export default login;