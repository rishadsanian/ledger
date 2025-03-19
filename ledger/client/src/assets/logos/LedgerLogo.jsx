// React component for SVG with text and icon
import React from "react";

export const LedgerLogo = () => (
  <svg width="150" height="50" viewBox="0 0 150 60" xmlns="http://www.w3.org/2000/svg">
    {/* Outer rectangle representing the table structure */}
    <rect x="5" y="10" width="30" height="20" stroke="white" strokeWidth="2" fill="none"/>
    
    {/* Vertical line in the center to create two columns */}
    <line x1="20" y1="10" x2="20" y2="30" stroke="white" strokeWidth="2"/>
    
    {/* Horizontal line near the top to represent a table header */}
    <line x1="5" y1="17" x2="35" y2="17" stroke="white" strokeWidth="2"/>
    
    {/* Text label for the logo */}
    <text x="45" y="28" fontSize="24" fill="white" fontFamily="Montserrat">ledger</text>
  </svg>
);

// React component for SVG with icon only
export const LedgerIcon = () => (
  <svg width="40" height="50" viewBox="0 0 40 60" xmlns="http://www.w3.org/2000/svg">
 {/* Outer rectangle representing the table structure */}
 <rect x="5" y="10" width="30" height="20" stroke="white" strokeWidth="2" fill="none"/>
    
    {/* Vertical line in the center to create two columns */}
    <line x1="20" y1="10" x2="20" y2="30" stroke="white" strokeWidth="2"/>
    
    {/* Horizontal line near the top to represent a table header */}
    <line x1="5" y1="17" x2="35" y2="17" stroke="white" strokeWidth="2"/>
  </svg>
);
