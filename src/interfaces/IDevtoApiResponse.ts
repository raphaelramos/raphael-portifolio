export interface DevtoApiResponse {
    id: number;
    title: string;
    description: string;
    published_at: string;
    slug: string;
    path: string;
    url: string;
    comments_count: number;
    public_reactions_count: number;
    positive_reactions_count: number;
    cover_image: string | null;
    tag_list: string[];
    canonical_url: string;
    collection_id?: number;
    body_markdown: string;
}
