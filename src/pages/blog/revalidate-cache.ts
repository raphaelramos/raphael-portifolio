import { NextApiRequest, NextApiResponse } from 'next'
import { revalidateTag } from 'next/cache'
import { DEVTO_CACHE_TAG } from '../../lib/constants'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // Check for secret to confirm this is a valid request
    if (req.query.secret !== process.env.REVALIDATION_SECRET) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    try {
        // Revalidate Dev.to cache
        revalidateTag(DEVTO_CACHE_TAG)

        return res.json({ 
            revalidated: true, 
            message: 'Dev.to cache cleared successfully',
            timestamp: new Date().toISOString()
        })
    } catch (err) {
        // If there was an error, Next.js will continue
        // to show the last successfully generated page
        return res.status(500).json({ 
            revalidated: false, 
            message: 'Error revalidating cache',
            error: err instanceof Error ? err.message : 'Unknown error'
        })
    }
}
