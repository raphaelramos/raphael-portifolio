import Link from 'next/link'
import Image from 'next/image'
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

const HomeArticleCard = ({
    title,
    description,
    date,
    tags,
    canonical,
    coverImage = '',
}: IProps): JSX.Element => (
    <div className="item wow fadeInUp" data-wow-delay={`.2s`}>
        <div className="img valign">
        <Link href={`${convertCanonicalURLToRelative( canonical )}`}>
              {coverImage && (
              <Image src={coverImage} width="361" height="151" alt={title} />
              )}
        </Link>
        </div>
        <div className="cont valign">
        <div>
            <div className="info">
                <div className="date">
                    <span>
                        {dateFormat(date)}
                    </span>
                </div>
            </div>
            <h5 className='max-360'>
                <Link href={`${convertCanonicalURLToRelative(canonical)}`}>
                    {title}
                </Link>
            </h5>
        </div>
        </div>
    </div>        
)

export default HomeArticleCard
