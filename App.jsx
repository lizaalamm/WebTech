import React, { useState } from "react";
import Explore from "./components/Explore";
import burgerbg from "./assets/burgerrbg.jpg";
import "./App.css";
// About Section
const AboutSection = () => (
  <section className="about-section">
    <h2 className="section-title">ABOUT US</h2>
    <div className="about-content">
      <div className="about-image">
        <img src="/aboutusburger.webp" alt="Juicy burger" className="about-img" />
      </div>
      <div className="about-text">
        <h2>Find Your Best Tasted Food & Drink Just in One Place</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </p>
        <ul className="about-features">
          <li>
            <span className="tick"></span> Best Price
          </li>
          <li>
            <span className="tick"></span> Fresh Ingredient
          </li>
          <li>
            <span className="tick"></span> Best Service
          </li>
          <li>
            <span className="tick"></span> Health Protocol
          </li>
        </ul>
      </div>
    </div>
  </section>
);

// Our Best Menu Section
const OurBestMenu = () => {
  const [activeCategory, setActiveCategory] = useState("food");

  const menuItems = {
    food: [
      { img: "/che.jpg", name: "Cheeseburger", price: "₨700" },
      { img: "/food2.avif", name: "Pizza", price: "₨850" },
      { img: "/pas.jpg", name: "Pasta", price: "₨599" },
      { img: "/food4.avif", name: "Steak", price: "₨1200" },
      { img: "/food5.avif", name: "Sushi", price: "₨400" },
      { img: "/sal.jpg", name: "Salad", price: "₨250" },
    ],
    snack: [
      { img: "/fr.jpg", name: "Fries", price: "₨150" },
      { img: "/snack2.webp", name: "Nachos", price: "₨300" },
      { img: "/snack3.webp", name: "Onion Rings", price: "₨350" },
      { img: "/pop.jpg", name: "Popcorn", price: "₨100" },
      { img: "/snack5.webp", name: "Mozzarella Sticks", price: "₨450" },
      { img: "/snack6.webp", name: "Pretzels", price: "₨350" },
     
    ],
    beverage: [
      { img: "/beverage1.webp", name: "Cola", price: "₨150" },
      { img: "/beverage2.webp", name: "Lemonade", price: "₨150" },
      { img: "/beverage3.webp", name: "Milkshake", price: "₨350" },
      { img: "/orn.jpg", name: "Orange Juice", price: "₨150" },
      { img: "/smo.jpg", name: "Smoothie", price: "₨300" },
      { img: "/cof.jpg", name: "Iced Coffee", price: "₨400" },
    
    ],
  };

  return (
    <section className="menu-section">
      <h2 className="menu-title">Our Best Menu</h2>
      <div className="menu-categories">
        {["food", "snack", "beverage"].map((category) => (
          <button
            key={category}
            className={`menu-button ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="menu-items">
        {menuItems[activeCategory].slice(0, 6).map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.img} alt={item.name} className="menu-img" />
            <p className="menu-name">{item.name}</p>
            <p className="menu-price">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


// Special Offer Section
const SpecialOfferSection = () => (
  <section className="special-offer-section">
    <h2 className="section-title">SPECIAL OFFER</h2>
    <div className="special-offer-content">
      <div className="offer-text">
        <h2 className="offer-title">Exclusive Special Offer!</h2>
        <p className="offer-description">
          Get 20% off on your first order. Don't miss out on this amazing deal, only available for a limited time.
        </p>
      </div>
      <div className="offer-image">
        <img src="/of.jpg" alt="Special Offer" className="offer-img" />
      </div>
    </div>
  </section>
);


const OurOutletSection = () => (
  <section className="outlet-section">
    <h2 className="section-title">OUR OUTLETS</h2>
    <div className="outlet-cards">
      <div className="outlet-card">
        <img src="/outlet1.avif" alt="Outlet 1" className="outlet-img" />
        <div className="outlet-info">
          <h3 className="outlet-name">Outlet 1</h3>
          <p className="outlet-address">123 Burger St., City</p>
          <p className="outlet-hours">Mon - Sun: 10am - 10pm</p>
        </div>
      </div>
      <div className="outlet-card">
        <img src="/outlet2.avif" alt="Outlet 2" className="outlet-img" />
        <div className="outlet-info">
          <h3 className="outlet-name">Outlet 2</h3>
          <p className="outlet-address">456 Fastfood Ave., Town</p>
          <p className="outlet-hours">Mon - Sun: 9am - 9pm</p>
        </div>
      </div>
      <div className="outlet-card">
        <img src="/outlet3.avif" alt="Outlet 3" className="outlet-img" />
        <div className="outlet-info">
          <h3 className="outlet-name">Outlet 3</h3>
          <p className="outlet-address">789 Delicious Rd., Village</p>
          <p className="outlet-hours">Mon - Sun: 11am - 11pm</p>
        </div>
      </div>
    </div>
  </section>
);


const CustomerReviewSection = () => {
  const reviews = [
    {
      name: "John Doe",
      review:
        "The food here is absolutely amazing! I love the burgers, and the service is fast and friendly. Highly recommend!",
      image: "/customer1.jpg", // Updated to reference the public folder
    },
    {
      name: "Jane Smith",
      review:
        "A great place to enjoy a meal with friends. The pizza is to die for, and I’m definitely coming back for more!",
      image: "/customer2.jpg", // Updated to reference the public folder
    },
    {
      name: "Michael Johnson",
      review:
        "Amazing ambiance and food quality! The steak was cooked perfectly, and I had a delightful time.",
      image: "/customer3.jpg", // Updated to reference the public folder
    },
  ];

  return (
    <section className="customer-review-section">
      <h2 className="section-title">Customer Reviews</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img
              src={review.image}
              alt={review.name}
              className="customer-image"
            />
            <div className="review-content">
              <h3 className="customer-name">{review.name}</h3>
              <p className="customer-review">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


const SpecialSection = () => (
  <section className="special-section">
    <div className="overlay"></div>
    <div className="special-content">
      <h1 className="special-text">
        From juicy patties to perfectly toasted buns, we bring you a burger experience that’s all about quality and taste.
      </h1>
    </div>
  </section>
);

const SocialMediaSection = () => {
  const socialMediaLinks = [
    {
      name: "Facebook",
      image: "/facebook-icon.jpg", // Use jpg for Facebook
      link: "https://www.facebook.com/BIGBUNTHEORY/",
    },
    {
      name: "Instagram",
      image: "/instagram-icon.jpg", // Use jpg for Instagram
      link: "https://www.instagram.com/big_bun_theory/?hl=en",
    },
    {
      name: "Twitter",
      image: "/twitter-icon.png", // Use png for Twitter
      link: "https://twitter.com",
    },
    {
      name: "YouTube",
      image: "/youtube-icon.png", // Use png for YouTube
      link: "https://youtube.com",
    },
  ];

  return (
    <section className="social-media-section">
      <h2 className="section-title">Follow Us</h2>
      <div className="social-media-container">
        {socialMediaLinks.map((social, index) => (
          <a href={social.link} target="_blank" rel="noopener noreferrer" key={index} className="social-card">
            <img src={social.image} alt={social.name} className="social-icon" />
            <h3 className="social-name">{social.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

// Ending Page Section (Footer)
const FooterSection = () => (
  <footer className="footer-section">
    <div className="footer-container">
      <div className="footer-column">
        <h3 className="footer-title">About Big Bun Theory</h3>
        <p>
          At Big Bun Theory, we are committed to serving delicious, high-quality meals that
          leave you coming back for more. Join us and experience food that speaks for itself.
        </p>
      </div>
      <div className="footer-column">
        <h3 className="footer-title">Our Mission</h3>
        <p>
          To revolutionize the way people enjoy burgers by offering the perfect combination of taste, quality, and innovation.
          We aim to create memorable dining experiences for every customer.
        </p>
      </div>
      <div className="footer-column">
        <h3 className="footer-title">Contact Us</h3>
        <p>123 Burger St., Food City</p>
        <p>Email: contact@bigbuntheory.com</p>
        <p>Phone: +123 456 789</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>
        © {new Date().getFullYear()} Big Bun Theory. All Rights Reserved.
      </p>
    </div>
  </footer>
);

const MembershipCardSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !pin) {
      setMessage("All fields are required!");
      return;
    }

    // Send data to backend
    try {
      const response = await fetch("http://localhost:5000/api/membership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, pin }),
      });

      const data = await response.json();
      if (response.status === 201) {
        setMessage("Membership created successfully!");
        setName("");
        setEmail("");
        setPin("");
      } else {
        setMessage(data.error || "Error creating membership");
      }
    } catch (error) {
      console.error(error);
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <section className="membership-card-section">
      <h2 className="section-title">Become a Member</h2>
      <div className="membership-card">
        <div className="membership-card-content">
          <h3 className="membership-title">Membership Card</h3>
          <form className="membership-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="pin">PIN No.</label>
              <input
                type="password"
                id="pin"
                placeholder="Enter your PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
            </div>
            <button type="submit" className="submit-button">
              Get Membership
            </button>
          </form>
          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </section>
  );
};





const App = () => {
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);

  const openMembership = () => setIsMembershipOpen(true);
  const closeMembership = () => setIsMembershipOpen(false);

  return (
    <div className="app-container">
      <Explore />
      <main
        className="main-section"
        style={{ backgroundImage: `url(${burgerbg})` }}
      >
        <div className="overlay"></div>
        <div className="main-content">
          <h1 className="main-title">Welcome to Big Bun Theory</h1>
          <p className="main-subtitle">
            <span className="dynamic-text">Where Hunger Meets Its Match!</span>
          </p>
         
        </div>
      </main>
      <OurBestMenu />
      <SpecialOfferSection />
      <AboutSection />
      <OurOutletSection />
      <CustomerReviewSection />
      <SpecialSection />
      <SocialMediaSection />
      // In the App component's JSX, add MembershipCardSection
      <MembershipCardSection />
      <FooterSection />
     

    </div>
  );
};

export default App;
