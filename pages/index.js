import React from "react"
import Link from 'next/link'

export default function Home() {
    return(
        <>
            <h1>Electron</h1>
            <h3>Simplified Inventory Management</h3>
            <Link href="/dashboard">Dashboard</Link>
        </>
    )
}