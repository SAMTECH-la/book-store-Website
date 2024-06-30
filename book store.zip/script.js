document.addEventListener('DOMContentLoaded', function() {
    const books = [
        { id: 1, title: 'Wings of Fire: An Autobiography', author: 'A.P.J Abdul Kalam', price: '$10', description: '"Wings of Fire: An Autobiography" is the autobiography of Dr. A.P.J. Abdul Kalam, the renowned scientist and former President of India. In this book, Dr. Kalam narrates his inspiring life journey, starting from his humble beginnings in a small town to becoming one of Indias most respected aerospace scientists. He shares his experiences, struggles, and achievements, offering insights into his work on Indias missile and space programs. The book also reflects Dr. Kalams vision for the future of India and emphasizes the importance of dreams, determination, and hard work in achieving success and making a positive impact on society.', image: 'book1.jpg' },
        { id: 2, title: 'The Monk Who Sold His Ferrari', author: 'Robin Sharam', price: '$15', description: '"The Monk Who Sold His Ferrari" is a motivational fiction book written by Robin Sharma. It tells the story of Julian Mantle, a successful lawyer who undergoes a spiritual crisis and decides to sell all his possessions, including his prized red Ferrari, to seek enlightenment in the Himalayas. Through his journey, he learns valuable life lessons from the sages of Sivana and discovers the importance of living with purpose, mindfulness, and balance. The book offers practical wisdom and inspirational insights for personal transformation and achieving lasting happiness and fulfillment.', image: 'book2.jpg' },
        { id: 3, title: 'You Can Win: Astep by Step Tool for Top Achievers', author: 'Shiv Khera', price: '$12', description: '"You Can Win: A Step by Step Tool for Top Achievers" by Shiv Khera is a motivational book that provides practical insights and strategies for achieving success in life. It emphasizes the importance of positive thinking, goal setting, and persistence in overcoming challenges. Through inspiring stories and motivational anecdotes, Khera encourages readers to take charge of their lives, develop strong personal values, and strive for excellence in their endeavors. The book serves as a guide for personal and professional growth, aiming to empower individuals to realize their full potential and achieve their dreams.', image: 'book3.jpg' },
        { id: 4, title: 'Stay Hungry Stay Foolish', author: 'Rashmi Bansal', price: '$18', description: '"Stay Hungry Stay Foolish" by Rashmi Bansal profiles the journeys of 25 Indian entrepreneurs who took unconventional paths to success. The book showcases their stories of determination, innovation, and resilience in pursuing their dreams and building successful ventures. It emphasizes the importance of passion, perseverance, and risk-taking in entrepreneurship, inspiring readers to embrace their aspirations and follow their own paths to success. Through real-life examples and motivational narratives, Bansal celebrates the spirit of entrepreneurship and encourages individuals to stay hungry for knowledge and opportunities while staying foolish enough to challenge the status quo and pursue their dreams fearlessly.', image: 'book4.jpg' },
        { id: 5, title: 'The 5 AM Club: Own Your Morning. Elevate Your Life.', author: 'RObin Sharam', price: '$20', description: '"The 5 AM Club: Own Your Morning. Elevate Your Life." by Robin Sharma is a self-help book that advocates waking up early to maximize personal growth and productivity. Sharma presents a formula for success centered around a morning routine that includes exercise, reflection, and skill development. The book follows a fictional narrative involving a billionaire entrepreneur mentoring a struggling artist and an entrepreneur, imparting wisdom on mastering time, productivity, and personal transformation. It emphasizes the importance of discipline, mindset, and routine in achieving goals and living a fulfilling life.', image: 'book5.jpg' },
        { id: 6, title: 'The Secret Of The Nagas', author: 'Amish Tripathi', price: '$16', description: '"The Secret of the Nagas" is the second book in the Shiva Trilogy by Amish Tripathi. It continues the story of Shiva, the warrior-turned-deity, as he embarks on a quest to uncover the secrets of the mysterious Nagas, a powerful and ancient tribe. The book delves into themes of duty, honor, and the battle between good and evil, set against a backdrop of rich mythological and historical elements from ancient India.', image: 'book6.jpg' },
        { id: 7, title: 'Think and Grow Rich', author: 'Napoleon Hill ', price: '$20', description: '""Think and Grow Rich" by Napoleon Hill is a classic self-help book that focuses on personal development and success. Published in 1937, it outlines 13 principles for achieving financial and personal success, including the power of desire, faith, persistence, and the use of "the mastermind" group. Hills principles are based on his study of successful individuals like Andrew Carnegie, Henry Ford, and Thomas Edison. The book emphasizes the importance of a positive mental attitude and the role of the subconscious mind in shaping ones destiny.', image: 'book7.jpg' },
        { id: 8, title: 'The Power of Positive Thinking', author: 'Norman Vincent Peale', price: '$15', description: '"The Power of Positive Thinking" by Norman Vincent Peale is a seminal self-help book that teaches readers how to develop a positive mindset to improve their lives. Through practical advice and real-life examples, Peale emphasizes the importance of faith, optimism, and affirmations in overcoming obstacles and achieving personal and professional success.', image: 'book8.jpg' },
        { id: 9, title: 'Awaken the Giant Within', author: 'Tony Robbins', price: '$24', description: '**"Awaken the Giant Within"** by Tony Robbins is a self-help book that focuses on personal development and self-mastery. Robbins shares strategies and techniques to help readers take control of their emotions, finances, relationships, and life in general. The book emphasizes the power of decision-making and taking immediate, consistent action to achieve lasting change and fulfillment.', image: 'book9.jpg' },
        { id: 10, title: 'The Secret', author: 'Rhonda Byrne', price: '$20', description: '"The Secret" by Rhonda Byrne is a self-help book that focuses on the power of positive thinking and the law of attraction. It posits that by thinking positively and visualizing desired outcomes, individuals can attract those outcomes into their lives. The book emphasizes gratitude, visualization, and maintaining a positive mindset to achieve personal success and happiness.', image: 'book10.jpg' },
        { id: 11, title: 'The Alchemist', author: 'Paulo Coelho', price: '$10', description: '**The Alchemist** by Paulo Coelho is an international bestseller that follows the journey of Santiago, a young Andalusian shepherd, as he pursues his dream of finding a hidden treasure near the Egyptian pyramids. Throughout his quest, Santiago encounters various characters and faces numerous challenges that teach him about the importance of listening to his heart, recognizing the signs along lifes path, and, ultimately, discovering his true purpose. The novel emphasizes the theme of personal legend, encouraging readers to pursue their dreams and aspirations despite obstacles.', image: 'book11.jpg' },
        { id: 12, title: 'The Habit of Winning', author: 'Prakash Iyer', price: '$15', description: '**The Habit of Winning** by Prakash Iyer is an inspiring book that offers insights and lessons on success drawn from sports, business, and everyday life. Through a collection of engaging stories and real-life examples, Iyer emphasizes the importance of cultivating positive habits, staying motivated, and maintaining a winning attitude. The book encourages readers to develop resilience, set goals, and take actionable steps towards achieving their personal and professional aspirations.', image: 'book12.jpg' },
    ];
    
// Load book catalog
    const bookList = document.getElementById('book-list');
    if (bookList) {
        books.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book-item');
            bookItem.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h2>${book.title}</h2>
                <p>Author: ${book.author}</p>
                <p>Price: ${book.price}</p>
                <button onclick="viewBook(${book.id})">View Details</button>
            `;
            bookList.appendChild(bookItem);
        });
    }

    // View book details
    window.viewBook = function(id) {
        const book = books.find(book => book.id === id);
        if (book) {
            window.location.href = `book-details.html?id=${book.id}`;
        }
    };

    // Load book details
    const bookId = new URLSearchParams(window.location.search).get('id');
    if (bookId) {
        const book = books.find(book => book.id == bookId);
        if (book) {
            document.getElementById('book-title').textContent = book.title;
            document.getElementById('book-author').textContent = `Author: ${book.author}`;
            document.getElementById('book-price').textContent = `Price: ${book.price}`;
            document.getElementById('book-description').textContent = book.description;
            document.getElementById('book-image').src = book.image;
            document.getElementById('book-image').alt = book.title;
        }
    }

    // Search books
    const searchBar = document.getElementById('search-bar');
    if (searchBar) {
        searchBar.addEventListener('input', function() {
            const query = searchBar.value.toLowerCase();
            const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query));
            bookList.innerHTML = '';
            filteredBooks.forEach(book => {
                const bookItem = document.createElement('div');
                bookItem.classList.add('book-item');
                bookItem.innerHTML = `
                    <img src="${book.image}" alt="${book.title}">
                    <h2>${book.title}</h2>
                    <p>Author: ${book.author}</p>
                    <p>Price: ${book.price}</p>
                    <button onclick="viewBook(${book.id})">View Details</button>
                `;
                bookList.appendChild(bookItem);
            });
        });
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message sent!');
            contactForm.reset();
        });
    }
});