import "./styles.css";
import heroImageBlank from "./images/hero.svg";
import avatarImage from "./images/Avatar.png";

document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');

    const heroSection = document.createElement('section');
    heroSection.classList.add('hero');

    const heroTextContent = document.createElement('div');
    heroTextContent.classList.add('text-content');

    const heroHeading = document.createElement('h2');
    heroHeading.textContent = 'About Our Restaurant';

    const heroParagraph1 = document.createElement('p');
    heroParagraph1.textContent = `Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:`;

    const heroParagraph2 = document.createElement('p');
    heroParagraph2.textContent = `Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.`;

    heroTextContent.appendChild(heroHeading);
    heroTextContent.appendChild(heroParagraph1);
    heroTextContent.appendChild(heroParagraph2);

    const heroImage = document.createElement('img');
    heroImage.src = heroImageBlank;
    heroImage.alt = 'Hero image';
    heroImage.style.height = '350px';
    heroImage.style.width = '100%';

    heroSection.appendChild(heroTextContent);
    heroSection.appendChild(heroImage);

    content.appendChild(heroSection);

    const reviewsSection = document.createElement('section');
    reviewsSection.classList.add('reviews');

    const reviewsTextContent = document.createElement('div');
    reviewsTextContent.classList.add('text-content');

    const reviewsHeading = document.createElement('h2');
    reviewsHeading.textContent = 'Reviews';

    const reviewsIntro = document.createElement('p');
    reviewsIntro.textContent = "Don’t take it from us. Check out some of our reviews.";

    reviewsTextContent.appendChild(reviewsHeading);
    reviewsTextContent.appendChild(reviewsIntro);

    const reviewerCards = document.createElement('div');
    reviewerCards.classList.add('reviewer-cards');

    // Function to create individual review cards
    function createReviewCard(text, profileImage, name, description) {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardQuote = document.createElement('h3');
        cardQuote.textContent = `"${text}"`;

        const cardProfile = document.createElement('div');
        cardProfile.classList.add('profile');

        const cardImage = document.createElement('img');
        cardImage.src = profileImage || avatarImage;
        cardImage.alt = 'Profile picture';
        cardImage.style.height = '40px';
        cardImage.style.width = '40px';

        const cardNames = document.createElement('div');
        cardNames.classList.add('names');

        const cardName = document.createElement('h5');
        cardName.textContent = name;

        const cardDescription = document.createElement('p');
        cardDescription.textContent = description;

        cardNames.appendChild(cardName);
        cardNames.appendChild(cardDescription);
        cardProfile.appendChild(cardImage);
        cardProfile.appendChild(cardNames);

        card.appendChild(cardQuote);
        card.appendChild(cardProfile);

        return card;
    }

    // Example reviews
    const reviewTexts = [
        "Tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning.",
        "Great experience, would highly recommend! Loved the atmosphere and food.",
        "A fantastic place for a casual night out. Highly rated service and ambiance."
    ];

    const reviewers = [
        { name: "John Doe", description: "Food Critic", profileImage: avatarImage, text: reviewTexts[0] },
        { name: "Jane Smith", description: "Restaurant Blogger", profileImage: avatarImage, text: reviewTexts[1] },
        { name: "Alice Johnson", description: "Frequent Diner", profileImage: avatarImage, text: reviewTexts[2] },
        { name: "Alice Johnson", description: "Frequent Diner", profileImage: avatarImage, text: reviewTexts[0] },
        { name: "Alice Johnson", description: "Frequent Diner", profileImage: avatarImage, text: reviewTexts[1] },
        { name: "Alice Johnson", description: "Frequent Diner", profileImage: avatarImage, text: reviewTexts[2] }
        
    ];

    // Add the cards dynamically
    reviewers.forEach(reviewer => {
        const reviewCard = createReviewCard(reviewer.text, reviewer.profileImage, reviewer.name, reviewer.description);
        reviewerCards.appendChild(reviewCard);
    });

    // Append the reviews section
    reviewsSection.appendChild(reviewsTextContent);
    reviewsSection.appendChild(reviewerCards);
    content.appendChild(reviewsSection);
});