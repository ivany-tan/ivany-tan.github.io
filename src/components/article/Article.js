import React from "react";
import "./Article.css";

const articleImages = [
  { src: "https://placehold.co/600x400?text=Hello+World", alt: "arctile-1" },
  { src: "https://placehold.co/200x300?text=Hello+World", alt: "arctile-2" },
  { src: "https://placehold.co/700x300?text=Hello+World", alt: "arctile-3" },
  { src: "https://placehold.co/600x1200?text=Hello+World", alt: "arctile-4" },
  { src: "https://placehold.co/700x300?text=Hello+World", alt: "arctile-5" },
  { src: "https://placehold.co/600x1200?text=Hello+World", alt: "arctile-6" },
];

function Article() {
  return (
    <div className="artical-container">
      <main class="testimonial-grid">
        <article class="testimonial grid-col-span-2 flow bg-primary-400 quote text-neutral-100">
          <div class="flex">
            <div>
              <img src={articleImages[0].src} alt={articleImages[0].alt} />
            </div>
            <div>
              <h2 class="name">Daniel Clifford</h2>
              <p class="position">Verified Graduate</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.”
          </p>
        </article>
        <article class="testimonial flow bg-secondary-400 text-neutral-100">
          <div class="flex">
            <div>
              <img src={articleImages[1].src} alt={articleImages[1].alt} />
            </div>
            <div>
              <h2 class="name">Jonathan Walters</h2>
              <p class="position">Verified Graduate</p>
            </div>
          </div>
          <p>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. ”
          </p>
        </article>
        <article class="testimonial flow bg-neutral-100 text-secondary-400">
          <div class="flex">
            <div>
              <img src={articleImages[2].src} alt={articleImages[2].alt} />
            </div>
            <div>
              <h2 class="name">Jeanette Harmon</h2>
              <p class="position">Verified Graduate</p>
            </div>
          </div>
          <p>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
          <p>
            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. ”
          </p>
        </article>
        <article class="testimonial grid-col-span-2 flow bg-secondary-500 text-neutral-100">
          <div class="flex">
            <div>
              <img src={articleImages[3].src} alt={articleImages[3].alt} />
            </div>
            <div>
              <h2 class="name">Patrick Abrams</h2>
              <p class="position">Verified Graduate</p>
            </div>
          </div>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. ”
          </p>
        </article>
        <article class="testimonial flow bg-neutral-100 text-secondary-400">
          <div class="flex">
            <div>
              <img src={articleImages[4].src} alt={articleImages[4].alt} />
            </div>
            <div>
              <h2 class="name">Kira Whittle</h2>
              <p class="position">Verified Graduate</p>
            </div>
          </div>
          <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
          <p>
            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. ”
          </p>
        </article>
      </main>
    </div>
  );
}

export default Article;
