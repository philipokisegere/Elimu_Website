import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "../api";
import Footer from "./Footer";
import Nav from "../components/Nav";

const NewsAndUpdates = () => {
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  async function getNews() {
    try {
      const res = await api.get("/getnews");
      setNews(res.data);
    } catch (error) {
      console.log("news Error:", error);
    }
  }

  async function getEvents() {
    try {
      const res = await api.get("/getevent");
      setEvents(res.data);
    } catch (error) {
      console.log("Events Error:", error);
    }
  }

  async function getPrograms() {
    try {
      const res = await api.get("/getcourse");
      setPrograms(res.data);
    } catch (error) {
      console.log("Programs Error:", error);
    }
  }

  useEffect(() => {
    getNews();
    getEvents();
    getPrograms();

    const mockTestimonials = [
      {
        id: 1,
        student: "Jane Doe",
        message:
          "The tech bootcamp was an incredible experience! I learned so much in such a short time.",
      },
      {
        id: 2,
        student: "John Smith",
        message:
          "The faculty at this school are truly invested in our success. The support and resources available are unparalleled.",
      },
      {
        id: 3,
        student: "Emily Johnson",
        message:
          "The programs here are top-notch. I've gained skills that are directly applicable to my career.",
      },
    ];

    setTestimonials(mockTestimonials);
  }, []);

  return (
    <div>
      <Nav/>

    <div className="container mx-auto px-4 py-16">
      {/* Welcome Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold">Welcome to Our School</h1>
        <p className="mt-4 text-gray-500">
          Providing Quality Education and Fostering Innovation
        </p>
      </section>

      {/* Upcoming Events Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.length > 0 ? (
            events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4">
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="text-gray-500">{event.date}</p>
                <p className="mt-2">{event.description}</p>
              </div>
            ))
          ) : (
            <p>No Events at the moment</p>
          )}
        </div>
      </section>

      {/* Recent News Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Recent News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <h3 className="text-xl font-bold">{article.title}</h3>
              <p className="text-gray-500">{article.date}</p>
              <p className="mt-2">{article.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Featured Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.length > 0 ? (
            programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4">
                <h3 className="text-xl font-bold mt-4">{program.courseName}</h3>
                <img
                  src={program.img_url}
                  alt={program.title}
                  className="w-full h-48 object-cover rounded"
                />
                <p className="text-gray-500 mt-2">{program.description}</p>
              </div>
            ))
          ) : (
            <p>NO programs at the moment</p>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <p className="text-gray-500">{testimonial.message}</p>
              <p className="mt-4 font-bold">{testimonial.student}</p>
            </div>
          ))}
        </div>
      </section>
      <div>
      </div>
    </div>
    <Footer/>
    </div>

  );
};

export default NewsAndUpdates;
