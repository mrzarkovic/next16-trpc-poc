"use client";
import { useSession } from "next-auth/react";
import { trpc } from "../_trpc/client";

export default function TodoList() {
    const getTodos = trpc.getTodos.useQuery();
    const { data: session, status } = useSession();

    return (
        <div>
            <div>
                ClientComponent {status}{" "}
                {status === "authenticated" && session.user?.name}
            </div>
            <div>{JSON.stringify(getTodos.data)}</div>
        </div>
    );
}
