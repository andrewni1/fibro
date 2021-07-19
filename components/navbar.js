import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <ul>
                <li>
                    <Link href="/">
                    <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/inventory">
                    <a>Inventory</a>
                    </Link>
                </li>
                <li>
                    <Link href="/bots">
                    <a>Bots</a>
                    </Link>
                </li>
                <li>
                    <Link href="/expenses">
                    <a>Expenses</a>
                    </Link>
                </li>
                </ul>
            </div>
        </>
    )
}