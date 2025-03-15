import React from 'react';
import '../styles/tailwind.css'; // Import your Tailwind CSS file

const Card = ({ title, description, level }) => {
  return (
    <div className="card">
      <h3 className={`heading-${level}`}>{title}</h3>
      <p className="text-ter mt-2">{description}</p>
      <button className="btn-primary mt-4">Learn More</button>
    </div>
  );
};

const Dev = () => {
  return (
    <div className="section-padding">
      <div className="container-width">
        {/* Heading */}
        <h2 className="heading-2 mb-6">Your List</h2>

        {/* Responsive Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <Card
            title="Easy Invoicing"
            description="Create and send invoices in minutes."
            level="3" // Use heading-3
          />

          {/* Card 2 */}
          <Card
            title="Expense Tracking"
            description="Track expenses effortlessly."
            level="3" // Use heading-3
          />

          {/* Card 3 */}
          <Card
            title="Tax Compliance"
            description="Stay compliant with tax laws."
            level="3" // Use heading-3
          />

          {/* Card 4 */}
          <Card
            title="Financial Reports"
            description="Generate detailed financial reports."
            level="3" // Use heading-3
          />
        </div>
      </div>
    </div>
  );
};

export default Dev;