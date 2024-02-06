import prisma from "../../../db";

export default async function Page() {
    const users = await prisma.user.findMany();
    return (
        <ul>
            {users.map((user, index) => {
                return <li key={index}>
                    <h2>
                        ID: {user.id.toString()}
                    </h2>
                    {user.username}
                </li>
            })}
        </ul>
    )
}