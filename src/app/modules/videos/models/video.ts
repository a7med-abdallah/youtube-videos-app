export class Video {
    id: number
    name: string
    url?: string
    description?: string
    thumbnails?: string
    rating?: number
    statistics?: {
        viewCount: number
        likeCount: number
        commentCount: number
        duration: string
        lessons: number
    }
}
