import React from 'react';

const SearchBar = ({ query, headings }) => {
  // Filter the headings based on the query
  const filteredHeadings = headings.filter((heading) =>
    heading.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="px-6 py-4">
      {query && (
        <ul className="list-disc list-inside space-y-2 text-lg">
          {filteredHeadings.length > 0 ? (
            filteredHeadings.map((heading, index) => (
              <li key={index} className="text-green-700 font-medium">
                {heading}
              </li>
            ))
          ) : (
            <p className="text-red-500 font-medium">No matching topics found.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
