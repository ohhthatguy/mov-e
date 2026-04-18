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

##Screenshots

1. **Hero Section**:
  <p align="center">

<img width="1320" height="636" alt="Hero" src="https://github.com/user-attachments/assets/877fc32b-f438-4fd5-aac7-733ee9b541a2" />

  </p>

2. **Horizontal-scroll layout**:
  <p align="center">
<img width="1319" height="622" alt="screenshot-2026-04-18_09-40-16" src="https://github.com/user-attachments/assets/a8163045-1488-403f-902e-e4c3e6474898" />

  </p>

3. **Bento layout**:
  <p align="center">
<img width="1312" height="623" alt="screenshot-2026-04-18_09-39-56" src="https://github.com/user-attachments/assets/976e6448-7dd4-46f5-827f-f864c90e2077" />

  </p>

4. **Hero-loading Page**:
  <p align="center">
<img width="1318" height="624" alt="screenshot-2026-04-18_14-52-12" src="https://github.com/user-attachments/assets/703841a3-cd5c-41d5-a33d-ef926f751871" />

  </p>

5. **Detail-page-first section**
<p align="center">
<img width="1326" height="630" alt="screenshot-2026-04-18_14-59-26" src="https://github.com/user-attachments/assets/2620ebf8-3c40-454f-80af-347cee87cc1e" />

   </p>

6. **Detail-Images section**
<p align="center">
<img width="1309" height="631" alt="screenshot-2026-04-18_15-07-03" src="https://github.com/user-attachments/assets/e38a3252-0fb5-4117-94bb-503a8f83fb51" />

   </p>

7. **Detail-loading page**
<p align="center">
<img width="1291" height="627" alt="screenshot-2026-04-18_14-54-09" src="https://github.com/user-attachments/assets/c350caac-8e52-4bc9-9511-2f985d8451eb" />

   </p>

8. **Similar page**
<p align="center">
<img width="1314" height="622" alt="screenshot-2026-04-18_15-08-27" src="https://github.com/user-attachments/assets/9da9ca5c-08d2-43a0-b31f-2399a8d24fd1" />

   </p>
