import React from "react";
import styles from "../CSS/Faq.module.css";

function Faq() {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const handleTitleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      title: "When is Technovation 5.0?",
      content:
        "The techfest is scheduled to be held on XX March 2024.",
    },
    {
      title: "Who can attend Technovation 5.0?",
      content:
        "All the college student pursuing BTech from various disciplines are encouraged to attend Technovation 5.0 to explore the intersection of technology, innovation, and entrepreneurship. Whether you're studying computer science, engineering, or any related field, Technovation offers a unique opportunity to engage with real-world challenges and solutions.",
    },
    {
      title: "Do I need to pay any fee for registration?",
      content:
        "The registration fee is free, but to participate in any event you have to pay the respective fee for that",
    },
    {
      title: "What are the Accommodation charges?",
      content:
        "Accommodation is provided on a shared basis inside campus hostels or outside hotels. One mattress, and enough space for keeping luggage, and other essential commodities will be provided. Girls and boys will be accommodated separately. The number of guests in a room will be decided by Technovation and will be allotted by Technovation team",
    },
    {
      title: "For any other Queries",
      content:
        "You can reach us at igit@sarang.ac.in or call us at +91 8000080000",
    },
  ];

  return (
    <div className={styles.faqcontainer}>
      <div className={styles.faqbackbutton}>
        <a href="javascript:history.back()" className={styles.faqback}>Back</a>
      </div>
      <div className={styles.faqcard}>
        <h2 className={styles.faqtitle}>FAQS(Frequently Asked Questions)</h2>
        {items.map((item, index) => (
          <div key={item.title} style={{ marginBottom: "1rem" }}>
            <div
              style={{
                backgroundColor: "#f5f5f5",
                padding: "1rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onClick={() => handleTitleClick(index)}
            >
              {item.title}
              <div style={{ fontSize: "1.5rem", transform: `rotate(${activeIndex === index ? "180deg" : "0deg"})` }}>▾</div>
            </div>
            {activeIndex === index && (
              <div style={{ padding: "1rem" }}>{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;