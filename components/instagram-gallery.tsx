import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

export default function InstagramGallery() {
  const instagramPosts = [
    {
      id: 1,
      image: "/instagram-1.jpg",
      url: "https://instagram.com/velasdeevora",
    },
    {
      id: 2,
      image: "/instagram-2.jpg",
      url: "https://instagram.com/velasdeevora",
    },
    {
      id: 3,
      image: "/instagram-3.jpg",
      url: "https://instagram.com/velasdeevora",
    },
    {
      id: 4,
      image: "/instagram-4.jpg",
      url: "https://instagram.com/velasdeevora",
    },
    {
      id: 5,
      image: "/instagram-5.jpg",
      url: "https://instagram.com/velasdeevora",
    },
    {
      id: 6,
      image: "/instagram-6.jpg",
      url: "https://instagram.com/velasdeevora",
    },
    {
      id: 7,
      image: "/instagram-7.jpg",
      url: "https://instagram.com/velasdeevora",
    },
    {
      id: 8,
      image: "/instagram-8.jpg",
      url: "https://instagram.com/velasdeevora",
    },
  ]

  return (
    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {instagramPosts.map((post) => (
        <Link
          key={post.id}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-square overflow-hidden rounded-xl"
        >
          <Image
            src={post.image || "/placeholder.svg"}
            alt={`Instagram post ${post.id}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/40 group-hover:opacity-100">
            <Instagram size={24} className="text-white" />
          </div>
        </Link>
      ))}
    </div>
  )
}
