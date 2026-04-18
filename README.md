# mov-e [Visit Website](https://mov-e-ten.vercel.app/)

A modern and responsive movie discovery platform built with Next.js and the TMDB API. It allows users to explore trending movies and TV shows, view detailed information, and watch trailers.

## Project Overview

This web application allows users to browse trending TV shows and movies, view detailed information, and watch trailers. This application has incorprated various layout such as Bento Grid layout, full-screen layout, Horizontal Scroll system for a better user experience.

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository:**
   git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)

2. **Install dependencies:**
   npm install

3. **Set up Environment Variables:**
   Create a .env.local file and add your TMDB key:

   TMDB_API_KEY=your_key_here
   NEXT_PUBLIC_API_URL=your_key_here

4. **Run the development server:**
   npm run dev

## API Details

Source: The Movie Database (TMDB)

Endpoints used: - /trending/all/day: For the homepage hero section. - /discover/tv: For tv series in homepage - /movie/{id}: For detailed movie information. - /movie/{id}/videos: To fetch YouTube trailer keys. - /movie/${id}/credits: To fetch movie's credit
                - /movie/${id}/images: To fetch movie's images - /movie/${id}/similar: To fetch similar movie
                - /tv/{id}: For detailed tv series information.
                - /tv/{id}/videos: To fetch YouTube trailer keys.
                - /tv/${id}/credits: To fetch tv series's credit - /tv/${id}/images: To fetch tv series's images
                - /tv/${id}/similar: To fetch similar tv series

## Design Decisions

Bento Grid: Implemented for the "TV Shows" section to create an asymmetrical, modern UI that highlights featured content.

Next.js App Router: Chosen for its superior performance and built-in support for loading.tsx skeletons.

Tailwind CSS: Used for rapid styling and ensuring mobile responsiveness with custom grid spans.
