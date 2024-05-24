
export const fetchPrograms = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          departmentOfIT: [
            {
              title: "Bachelor of Science in Information Technology",
              description: "A comprehensive undergraduate program covering various aspects of IT.",
              imageUrl: "https://unsplash.com/photos/turned-on-macbook-air-displaying-coding-application-b18TRXc8UPQ",
            },
            {
              title: "Master of Science in Information Technology",
              description: "An advanced program focusing on IT management and research.",
              imageUrl: "https://example.com/msc-it.jpg",
            },
          ],
          schoolPrograms: [
            {
              title: "Bachelor of Business Administration",
              description: "An undergraduate program focused on business and management principles.",
              imageUrl: "https://example.com/bba.jpg",
            },
            {
              title: "Master of Business Administration",
              description: "A postgraduate program designed to develop advanced business skills.",
              imageUrl: "https://example.com/mba.jpg",
            },
            {
              title: "Doctor of Philosophy in Management",
              description: "A research-oriented program aimed at producing top-tier management scholars.",
              imageUrl: "https://example.com/phd-management.jpg",
            },
          ],
        });
      }, 1000); 
    });
  };
  