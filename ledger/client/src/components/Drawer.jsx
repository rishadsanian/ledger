import React from "react";
import PropTypes from "prop-types";

// Define themes for the Drawer
const drawerThemes = {
  default: {
    overlayClassName: "bg-black bg-opacity-50",
    drawerClassName: "bg-white bg-opacity-50",
    contentClassName: ""
  },
  dark: {
    overlayClassName: "bg-gray-900 bg-opacity-70",
    drawerClassName: "bg-gray-800 bg-opacity-90",
    contentClassName: "text-white"
  },
  light: {
    overlayClassName: "bg-gray-200 bg-opacity-60",
    drawerClassName: "bg-white bg-opacity-90",
    contentClassName: "text-gray-900"
  },
  frosted: {
    overlayClassName: "bg-black bg-opacity-30",
    drawerClassName: "bg-white bg-opacity-50 backdrop-blur-lg",
    contentClassName: "text-gray-900"
  },
  custom: {
    overlayClassName: "bg-white bg-opacity-70 backdrop-blur-none",
    drawerClassName: "bg-gray-800 bg-opacity-90",
    contentClassName: "text-white"
  }
};

const mode="absolute"
const width="w-1/3"
// Drawer component
const Drawer = ({ isOpen, onClose, children  })  => {
  let theme = "dark"
  const currentTheme = drawerThemes[theme] || drawerThemes.default;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className={`absolute inset-0 z-40 ${currentTheme.overlayClassName}`}
          onClick={onClose}
        ></div>
      )}

      {/* Right panel (Drawer) */}
      <div
        className={`${mode} top-0 right-0 h-full w-full  lg:w-1/2 xl:${width} shadow-lg transform transition-transform duration-300 ease-in-out ${currentTheme.drawerClassName} ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
        style={{
          backdropFilter: "blur(10px)", // Apply frosted glass effect
          WebkitBackdropFilter: "blur(10px)" // For Safari support
        }}
      >
        {/* Close icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-2xl"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Content */}
        <div className={`h-full overflow-y-auto ${currentTheme.contentClassName}`}>
          {children}
        </div>
      </div>
    </>
  );
};

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(["default", "dark", "light", "frosted", "custom"])
};

export default Drawer;
