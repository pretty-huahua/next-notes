// app/[lng]/layout.js
import './style.css'
import Sidebar from '@/components/Sidebar'
import { Footer } from '@/components/Footer'
import { locales } from '@/config.js'

export async function generateStaticParams () {

  /*
  generateStaticParams和动态路由一起使用，用于在构建时静态生成路由：
  // app/product/[id]/page.js
  export function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }]
  }
   
  // 对应会生成 3 个静态路由：
  // - /product/1
  // - /product/2
  // - /product/3
  export default function Page({ params }) {
    const { id } = params
    // ...
  }

  可以在 generateStaticParams 使用 fetch 请求，这个例子更贴近实际的开发场景：
  // app/blog/[slug]/page.js
    export async function generateStaticParams() {
    const posts = await fetch('https://.../posts').then((res) => res.json())
 
    return posts.map((post) => ({
    slug: post.slug,
  }))
}
 
export default function Page({ params }) {
  const { slug } = params
  // ...
}
  */
  return locales.map((lng) => ({ lng }))
}

export default async function RootLayout ({
  children,
  params: {
    lng
  }
}) {

  return (
    <html lang={lng}>
      <body>
        <div className="container">
          <div className="main">
            <Sidebar lng={lng} />
            <section className="col note-viewer">{children}</section>
          </div>
          <Footer lng={lng} />
        </div>
      </body>
    </html>
  )
}

