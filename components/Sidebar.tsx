import Link from "next/link";

export function Sidebar() {
    const hover_text = "hover:text-blue-500 hover:text-underline"
    return(
        <div className="w-full flex flex-col">
            <h1 className="font-mono text-3xl font-bold">monymngr</h1>
            <hr className="mr-16"/>
            <Link className={hover_text} href="/">dashboard</Link>
            <Link className={hover_text} href="/transactions">transactions</Link>
            <Link className={hover_text} href="/settings">settings</Link>
            <Link className={hover_text} href="/attributes">about</Link>
        </div>
    )
}