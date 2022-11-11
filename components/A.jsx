import Link from "next/link";
import s from '../styles/link.module.scss';

export default function({text, href}) {
    return <Link href={href} className={s.link}>
        {text}
    </Link>
}