import type { JSX } from "react";
interface IProps {
    href: string
}

const DevToCallToAction = ({ href }: IProps): JSX.Element => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow">
        <span className="text-2xl mb-2">Reaja ou comente este artigo no dev.to</span>
    </a>
)

export default DevToCallToAction
