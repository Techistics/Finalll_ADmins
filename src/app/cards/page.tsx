"use client";

const CardList = () => {
  const data = [
    { id: 1, title: "React Basics", description: "Learn the basics of React.js" },
    { id: 2, title: "Tailwind CSS", description: "Styling with Tailwind" },
    { id: 3, title: "JavaScript ES6", description: "New features in JavaScript" },
    { id: 4, title: "TypeScript for Beginners", description: "Introduction to TypeScript" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg text-black p-4 border border-gray-200">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-700 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
