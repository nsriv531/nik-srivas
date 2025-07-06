function Blog({ title, description, tags, link, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="flex flex-wrap mt-3 gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-blue-500 font-medium hover:underline"
      >
        Read more
      </a>
    </div>
  );
}

export default Blog;
