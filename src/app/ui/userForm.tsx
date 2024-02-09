'use client'

import React, { ChangeEvent } from "react";

export const AddUserForm: React.FC = () => {

    const [username, setUsername] = React.useState<string>('');
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.currentTarget.value);
    }

    return <form action={'http://localhost:3000/api/users'} method="POST"> 
        <input className="text-gray-500" value={username} name='username' type='text' onChange={onChangeHandler} />
        <button type="submit">Add user</button>
    </form>
}