'use client'
import { useFormState, useFormStatus } from "react-dom";
import { createUser } from "../actions";
import { useOptimistic, useState } from "react";
import { SAButton } from "./SAButton";
import { UsersList } from "./userlist";
import { User } from "@prisma/client";

type UserFormStateArgs = { 
    message: string
}

const initialState: UserFormStateArgs = {
    message: ''
}

export const UserSAForm: React.FC<{ users: User[] | undefined}> = ({ users }) => {
    const [state, formAction] = useFormState(createUser, initialState);
    const [optimisticUserslist, setOptimisticUserslist] = useOptimistic<User[]>(users || []);
    // let react pick the method here to avoid the enctype warning
    return <div>
        <form action={async (formData: FormData) => {
            const username = formData.get('username');
            const len = optimisticUserslist.length;
            setOptimisticUserslist(prev => ([...prev, { id: BigInt(parseInt(optimisticUserslist[len - 1].id.toString()) + 1), username: username + 'this is optimistic' }]))
            formAction(formData);
        }}>
            <input className="text-gray-500" name='username' type='text' required />
            <div aria-live="polite">
                {state.message}
            </div>
            <SAButton />
        </form>
        <UsersList users={optimisticUserslist} />
    </div>
}