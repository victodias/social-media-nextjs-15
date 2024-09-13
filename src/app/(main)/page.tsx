import PostEditor from '@/components/posts/editor/post-editor'
import TrendsSidebar from '@/components/trends-sidebar'
import ForYouFeed from './ForYouFeed'

export default function Home() {
  return (
    <main className="w-full min-w-0 flex gap-5">
      <div className="w-full min-w-0 space-y-5">
        <PostEditor />
        <ForYouFeed />
      </div>
      <TrendsSidebar />
    </main>
  )
}
