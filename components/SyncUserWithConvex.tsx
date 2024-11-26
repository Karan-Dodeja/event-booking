'use client'
import { useUser } from '@clerk/nextjs'
import { useMutation } from 'convex/react';
import React, { useEffect } from 'react'

function SyncUserWithConvex() {
    const { user } = useUser();
    // const updateUser = useMutation(api)
    useEffect(() => {
        if (!user) return;

        const syncUser = async () => {
            try {
                await updateUser({
                    userId: user.id,
                    name: user.fullName,
                    email: user.emailAddresses[0]?.emailAddress ?? ""
                })
            } catch (error) {
                console.log("Error Sync User", error)
            }
        }
        syncUser();
    }, [user, updateUser]);
    return null;
}

export default SyncUserWithConvex