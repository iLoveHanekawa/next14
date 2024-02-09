"use client"
import { User } from "@prisma/client"
export const UsersList: React.FC<{ users: User[] | undefined }> = ({ users }) => {
    return <ul>
        { users && users.map((user, index) => {
            return <li key={index}>
                <h2>
                    ID: {user.id.toString()}
                </h2>
                {user.username}
            </li>
        })}
    </ul>
}