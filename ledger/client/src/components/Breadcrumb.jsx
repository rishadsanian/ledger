import React from "react";

const Breadcrumb = ({ items = [], showBackButton = true }) => {
  const breadcrumbItems = items.length ? items : [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Current', href: null }
  ];

  return (
    <nav className="flex items-center gap-2  p-1 sm:p-3  bg-black sm:bg-sec  sticky top-0 z-10">
      <div class="flex items-center">
      {showBackButton && (
        <button 
          onClick={() => window.history.back()}
          className="icon-btn sm:hidden"
          aria-label="Back"
        >
          <i className=" fa-solid fa-caret-left"></i>
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
      </div>
    </nav>
  );
};

export default Breadcrumb;
