
'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Star, BookOpen, TrendingUp, Clock, BookmarkPlus, Search, Heart, Award, Coffee } from 'lucide-react'

interface Book {
  id: number
  title: string
  author: string
  cover: string
  rating: number
}

const featuredBooks: Book[] = [
  { id: 1, title: "The Midnight Library", author: "Matt Haig", cover: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D", rating: 4.2 },
  { id: 2, title: "Atomic Habits", author: "James Clear", cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D", rating: 4.8 },
  { id: 3, title: "The Invisible Life of Addie LaRue", author: "V.E. Schwab", cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpYnJhcnl8ZW58MHx8MHx8fDA%3D", rating: 4.3 },
  { id: 4, title: "Project Hail Mary", author: "Andy Weir", cover: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpYnJhcnl8ZW58MHx8MHx8fDA%3D", rating: 4.6 },
  { id: 5, title: "The Four Winds", author: "Kristin Hannah", cover: "https://images.unsplash.com/photo-1526243741027-444d633d7365?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxpYnJhcnl8ZW58MHx8MHx8fDA%3D", rating: 4.5 },
]

const newReleases: Book[] = [
  { id: 6, title: "The Paris Apartment", author: "Lucy Foley", cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=300&q=80", rating: 4.0 },
  { id: 7, title: "Sea of Tranquility", author: "Emily St. John Mandel", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=300&q=80", rating: 4.2 },
  { id: 8, title: "Book Lovers", author: "Emily Henry", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&q=80", rating: 4.3 },
  { id: 9, title: "Lessons in Chemistry", author: "Bonnie Garmus", cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=300&q=80", rating: 4.5 },
  { id: 10, title: "The Maid", author: "Nita Prose", cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=300&q=80", rating: 4.1 },
]

const bestSellers: Book[] = [
  { id: 11, title: "Where the Crawdads Sing", author: "Delia Owens", cover: "https://images.unsplash.com/photo-1495640452828-3df6795cf69b?auto=format&fit=crop&w=300&q=80", rating: 4.7 },
  { id: 12, title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=300&q=80", rating: 4.4 },
  { id: 13, title: "It Ends with Us", author: "Colleen Hoover", cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&q=80", rating: 4.6 },
  { id: 14, title: "The Silent Patient", author: "Alex Michaelides", cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=300&q=80", rating: 4.5 },
  { id: 15, title: "Verity", author: "Colleen Hoover", cover: "https://images.unsplash.com/photo-1495640452828-3df6795cf69b?auto=format&fit=crop&w=300&q=80", rating: 4.3 },
]

const staffPicks: Book[] = [
  { id: 16, title: "The Vanishing Half", author: "Brit Bennett", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&q=80", rating: 4.2 },
  { id: 17, title: "Klara and the Sun", author: "Kazuo Ishiguro", cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&q=80", rating: 4.1 },
  { id: 18, title: "The Midnight Library", author: "Matt Haig", cover: "https://images.unsplash.com/photo-1495640452828-3df6795cf69b?auto=format&fit=crop&w=300&q=80", rating: 4.3 },
  { id: 19, title: "The Four Winds", author: "Kristin Hannah", cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=300&q=80", rating: 4.5 },
  { id: 20, title: "The Invisible Life of Addie LaRue", author: "V.E. Schwab", cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=300&q=80", rating: 4.4 },
]

const Carousel: React.FC<{ books: Book[] }> = ({ books }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length)
    }, 5000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [books.length])

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length)
    }, 5000)
  }

  return (
    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-lg mb-8">
      {books.map((book, index) => (
        <div
          key={book.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${book.cover})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{book.title}</h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-2 sm:mb-4">{book.author}</p>
            <button className="bg-white text-gray-900 px-4 py-2 sm:px-6 sm:py-2 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-200 transition-colors duration-300">
              Explore Now
            </button>
          </div>
        </div>
      ))}
      <button
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-1 sm:p-2"
        onClick={() => {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + books.length) % books.length)
          resetTimer()
        }}
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
      <button
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-1 sm:p-2"
        onClick={() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length)
          resetTimer()
        }}
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
    </div>
  )
}

const BookCard: React.FC<{ book: Book }> = ({ book }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
    <div className="relative aspect-[2]">
      <img src={book.cover} alt={book.title} className="object-cover w-full h-40" />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button className="bg-white text-gray-900 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-gray-200 transition-colors duration-300">
          Quick View
        </button>
      </div>
    </div>
    <div className="p-3 sm:p-4">
      <h3 className="font-semibold text-sm sm:text-lg text-gray-900 mb-1 truncate">{book.title}</h3>
      <p className="text-xs sm:text-sm text-gray-600 mb-2">{book.author}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-xs sm:text-sm text-gray-600">{book.rating.toFixed(1)}</span>
        </div>
        <button className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
          <BookmarkPlus className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>
      </div>
    </div>
  </div>
)

const BookSection: React.FC<{ title: string; icon: React.ReactNode; books: Book[] }> = ({ title, icon, books }) => {
  const [startIndex, setStartIndex] = useState(0)

  const nextBooks = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % books.length)
  }

  const prevBooks = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + books.length) % books.length)
  }

  return (
    <section className="mb-8 sm:mb-12">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center">
          {icon}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 ml-2">{title}</h2>
        </div>
        <div className="flex gap-2">
          <button
            className="p-1 sm:p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
            onClick={prevBooks}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            className="p-1 sm:p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
            onClick={nextBooks}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {[...books, ...books].slice(startIndex, startIndex + 5).map((book) => (
          <BookCard key={`${book.id}-${startIndex}`} book={book} />
        ))}
      </div>
    </section>
  )
}

export default function BookDiscovery() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-0">Discover Your Next Read</h1>
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search books..."
            className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      
      <Carousel books={featuredBooks} />
      
      <BookSection title="New Releases" icon={<Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />} books={newReleases} />
      <BookSection title="Trending Now" icon={<TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />} books={featuredBooks} />
      <BookSection title="Best Sellers" icon={<Award className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />} books={bestSellers} />
      <BookSection title="Staff Picks" icon={<Heart className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />} books={staffPicks} />
      
      <div className="bg-gray-100 rounded-xl p-6 sm:p-8 mt-8 sm:mt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Join Our Book Club</h2>
            <p className="text-gray-600 mb-4">Get exclusive access to new releases, author interviews, and community discussions.</p>
            <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center sm:justify-start">
              Sign Up Now
              <Coffee className="ml-2 h-4 w-4" />
            </button>
          </div>
          <img src="/placeholder.svg?height=150&width=150" alt="Book Club" className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full" />
        </div>
      </div>

      <div className="text-center mt-8 sm:mt-12">
        <button className="border border-gray-300 text-gray-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center mx-auto">
          Explore Your Library
          <BookOpen className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  )
}