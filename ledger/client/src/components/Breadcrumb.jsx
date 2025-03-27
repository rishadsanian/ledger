import React from "react";

const Breadcrumb = ({ items = [], showBackButton = false }) => {
  const breadcrumbItems = items.length ? items : [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Current', href: null }
  ];

  return (
    <nav className="flex items-center gap-2 p-3 bg-sec dark:bg-gray-800 sticky top-0 z-10">
      {showBackButton && (
        <button 
          onClick={() => window.history.back()}
          className="icon-btn mr-2"
          aria-label="Back"
        >
          ←
        </button>
      )}

      <ol className="flex items-center overflow-x-auto hide-scrollbar">
        {breadcrumbItems.map((item, i) => (
          <React.Fragment key={i}>
            <li className="flex items-center">
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sec hover:text-pri dark:text-gray-300 dark:hover:text-white text-sm truncate max-w-[120px]"
                >
                  {item.name}
                </a>
              ) : (
                <span className="text-pri dark:text-white text-sm font-medium truncate">
                  {item.name}
                </span>
              )}
            </li>
            {i < breadcrumbItems.length - 1 && (
              <span className="text-sec dark:text-gray-500 mx-2">/</span>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;