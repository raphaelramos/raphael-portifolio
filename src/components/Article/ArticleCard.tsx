import Link from 'next/link'
import { convertCanonicalURLToRelative } from '../../lib/devto'
import { dateFormat } from '../../lib/utils'

import type { JSX } from "react";

interface IProps {
    title: string
    description: string
    date: string
    tags: string[]
    canonical: string
    portfolio?: boolean
    coverImage?: string
}

const ArticleCard = ({
    title,
    description,
    date,
    tags,
    canonical,
    coverImage = '',
}: IProps): JSX.Element => (
    <section>
        <div className="img">
            <Link href={`${convertCanonicalURLToRelative(canonical)}`}>
                {coverImage && (
                    <img src={coverImage} />
                )}
            </Link>
        </div>
        <div className="content">
            <div className="row justify-content-center">
                <div className="col-10">
                    <Link href={`${convertCanonicalURLToRelative(canonical)}`}>
                        <div className="date">
                            <span className="num">{dateFormat(date)}</span>
                        </div>
                    </Link>
                    <h4 className="title">
                        <Link href={`${convertCanonicalURLToRelative(canonical)}`}>
                            {title}
                        </Link>
                    </h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </section>
)

export default ArticleCard
