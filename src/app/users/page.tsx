import { AddUserForm } from "../ui/userForm";
import { RevalidateRouteSegmentConfig, DynamicRouteSegmentConfig } from "@/app/types/types";
import prisma from "../../../db";
// export const revalidate: RevalidateRouteSegmentConfig = 20;
export const dynamic: DynamicRouteSegmentConfig = "force-dynamic";
import { User } from "@prisma/client";

async function getUsers(): Promise<{ users: User[]} | null> {
    try {
        const users = await prisma?.user.findMany();
        return { users };
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default async function Page(): Promise<JSX.Element | null> {
    try {
        const data = await getUsers();
        return (
            <div>
                <AddUserForm />
                <ul>
                    {data?.users?.map((user, index) => {
                        return <li key={index}>
                            <h2>
                                ID: {user.id.toString()}
                            </h2>
                            {user.username}
                        </li>
                    })}
                </ul>
            </div>
        )
    } catch (error) {
        console.log(error);
        return null;
    }
}
