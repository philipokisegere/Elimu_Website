import React from 'react';

function Director() {
  return (
    <div>
      <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
             <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            A Welcome Message From Our Directors
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  alt="Director"
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="size-14 rounded-full object-cover"
                />
                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                  </div>
                  <p className="mt-0.5 text-lg font-medium text-gray-900">Dr. James Kamotho</p>
                  <p className="text-sm text-gray-600">Director</p>
                </div>
              </div>

              <p className="mt-4 text-gray-700 text-2xl">
                Welcome to our university! As you embark on this exciting journey, remember that you are now part of a vibrant and diverse community committed to excellence. We encourage you to take full advantage of the opportunities available, engage deeply with your studies, and form lasting relationships. We are here to support you every step of the way. Let's make this a transformative experience together!
              </p>
            </blockquote>

            {/* <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  alt="Director"
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="size-14 rounded-full object-cover"
                />
                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                  </div>
                  <p className="mt-0.5 text-lg font-medium text-gray-900">Dr. John Doe</p>
                  <p className="text-sm text-gray-600">Director of Academic Programs</p>
                </div>
              </div>

              <p className="mt-4 text-gray-700 text-2xl">
                Dear students, we are thrilled to have you join us. Our university is dedicated to providing an environment where you can thrive academically, personally, and professionally. Take the time to explore new fields, challenge yourself, and contribute to our community. We believe in your potential and are excited to see the great things you will achieve. Welcome aboard!
              </p>
            </blockquote> */}
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  alt="Director"
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="size-14 rounded-full object-cover"
                />
                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    {/* Star icons can remain here if necessary */}
                  </div>
                  <p className="mt-0.5 text-lg font-medium text-gray-900">Dr. Sarah Nderitu</p>
                  <p className="text-sm text-gray-600">Dean of ICT</p>
                </div>
              </div>

              <p className="mt-4 text-gray-700 text-2xl">
                Welcome to the School of Information and Communication Technology! We are excited to have you join our dynamic community of innovators and tech enthusiasts. Our programs are designed to equip you with cutting-edge skills and knowledge that will prepare you for a successful career in the fast-paced world of ICT. Take advantage of the resources and opportunities available, and don't hesitate to reach out for support.
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Director;
