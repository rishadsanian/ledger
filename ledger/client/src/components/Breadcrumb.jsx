const Breadcrumb = ({ menu }) => {
  return (
    <nav className="flex items-center text-sm leading-5 font-medium p-4 bg-white">
      <ol className="flex items-center space-x-4">
        <li>
          <a href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </a>
        </li>
        <li>
          <i className="fas fa-chevron-right text-gray-500"></i>
        </li>
        <li>
          <a href="/accounts" className="text-gray-500 hover:text-gray-700">
            Accounts
          </a>
        </li>
        <li>
          <i className="fas fa-chevron-right text-gray-500"></i>
        </li>
        <li>
          <span className="text-gray-700">Current Account</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
