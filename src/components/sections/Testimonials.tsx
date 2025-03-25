"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface Post {
  id: string;
  imageUrl: string;
  link: string;
  source: "instagram" | "facebook";
}

const SocialPostsSection = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const instagramPosts: Post[] = [
      {
        id: "ig1",
        imageUrl: "/images/ig1.png",
        link: "https://www.instagram.com/p/C87oKkTo0pg/?img_index=1",
        source: "instagram",
      },
      {
        id: "ig2",
        imageUrl: "/images/ig2.png",
        link: "https://www.instagram.com/p/C3dRJpfoXnu/",
        source: "instagram",
      },
      {
        id: "ig3",
        imageUrl: "/images/ig3.png",
        link: "https://www.instagram.com/p/Cm1DHQIIbig/",
        source: "instagram",
      },
      {
        id: "ig4",
        imageUrl: "/images/ig4.png",
        link: "https://www.instagram.com/p/CmylB1sI1Zv/",
        source: "instagram",
      },
      {
        id: "ig5",
        imageUrl: "/images/ig5.png",
        link: "https://www.instagram.com/p/CmuKVYZItCg/",
        source: "instagram",
      },
      {
        id: "ig6",
        imageUrl: "/images/ig6.png",
        link: "https://www.instagram.com/p/CmOeExKDjef/",
        source: "instagram",
      },
      {
        id: "ig7",
        imageUrl: "/images/ig7.png",
        link: "https://www.instagram.com/p/Cl8zlWuj6cc/",
        source: "instagram",
      },
      {
        id: "ig8",
        imageUrl: "/images/ig8.png",
        link: "https://www.instagram.com/p/Cl0mtkyDdEb/",
        source: "instagram",
      },
    ];

    const facebookPosts: Post[] = [
      {
        id: "fb1",
        imageUrl: "/images/fb1.jpg",
        link: "https://www.facebook.com/photo.php?fbid=1006493571496282&set=pb.100064069445694.-2207520000&type=3&locale=pl_PL",
        source: "facebook",
      },
      {
        id: "fb2",
        imageUrl: "/images/fb2.jpg",
        link: "https://www.facebook.com/photo.php?fbid=1006491451496494&set=pb.100064069445694.-2207520000&type=3&locale=pl_PL",
        source: "facebook",
      },
      {
        id: "fb3",
        imageUrl: "/images/fb3.jpg",
        link: "https://www.facebook.com/photo.php?fbid=924034726408834&set=pb.100064069445694.-2207520000&type=3&locale=pl_PL",
        source: "facebook",
      },
      {
        id: "fb4",
        imageUrl: "/images/fb4.jpg",
        link: "https://www.facebook.com/photo.php?fbid=1006493724829600&set=pb.100064069445694.-2207520000&type=3&locale=pl_PL",
        source: "facebook",
      },
      {
        id: "fb5",
        imageUrl: "/images/fb5.jpg",
        link: "https://www.facebook.com/photo.php?fbid=952344123577894&set=pb.100064069445694.-2207520000&type=3&locale=pl_PL",
        source: "facebook",
      },
      {
        id: "fb6",
        imageUrl: "/images/fb6.jpg",
        link: "https://www.facebook.com/photo.php?fbid=860008202811487&set=pb.100064069445694.-2207520000&type=3&locale=pl_PL",
        source: "facebook",
      },
      {
        id: "fb7",
        imageUrl: "/images/fb7.jpg",
        link: "https://www.facebook.com/photo.php?fbid=960704709408502&set=pb.100064069445694.-2207520000&type=3&locale=pl_PL",
        source: "facebook",
      },
      {
        id: "fb8",
        imageUrl: "/images/fb8.jpg",
        link: "https://www.facebook.com/photo.php?fbid=828391855973122&set=pb.100064069445694.-2207520000&type=3&locale=pl_PL",
        source: "facebook",
      },
    ];

    setPosts([...instagramPosts, ...facebookPosts]);
  }, []);

  const instagramRow = posts.slice(0, 8);
  const facebookRow = posts.slice(8, 16);

  return (
    <section className="py-25 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Zapraszamy do śledzenia naszych mediów społecznościowych
        </h2>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">
            Instagram
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {instagramRow.map((post) => (
              <Link key={post.id} href={post.link} legacyBehavior>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <div
                      className="aspect-square w-full bg-cover bg-center transform group-hover:scale-105 transition duration-300 ease-in-out"
                      style={{
                        backgroundImage: `url(${basePath}${post.imageUrl})`,
                      }}
                      role="img"
                      aria-label="Instagram post"
                    ></div>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition duration-300"></div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">
            Facebook
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {facebookRow.map((post) => (
              <Link key={post.id} href={post.link} legacyBehavior>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <div
                      className="aspect-square w-full bg-cover bg-center transform group-hover:scale-105 transition duration-300 ease-in-out"
                      style={{
                        backgroundImage: `url(${basePath}${post.imageUrl})`,
                      }}
                      role="img"
                      aria-label="Facebook post"
                    ></div>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition duration-300"></div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialPostsSection;
