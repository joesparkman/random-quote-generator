const quotes = [
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "Your life does not get better by chance, it gets better by change. – Jim Rohn",
    "Do not wait; the time will never be 'just right.' Start where you stand, and work with whatever tools you may have at your command. – Napoleon Hill",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Believe you can, and you're halfway there. – Theodore Roosevelt",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
    "Act as if what you do makes a difference. It does. – William James",
    "You don't have to be great to start, but you have to start to be great. – Zig Ziglar",
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll"
  ];
  
  const usedIndexes = new Set();
  const quoteTag = document.getElementById("quote");
  
  function generateQuote() {
    // Check if all quotes have been used
    if (usedIndexes.size >= quotes.length) {
      usedIndexes.clear(); // Reset used indexes if all quotes are shown
    }
  
    // Generate a unique random index
    while (true) {
      const randomIdx = Math.floor(Math.random() * quotes.length);
      if (usedIndexes.has(randomIdx)) continue;
  
      // Display the quote and add the index to the used set
      const quote = quotes[randomIdx];
      quoteTag.innerHTML = quote; // Corrected from quoteElement
      usedIndexes.add(randomIdx);
      break;
    }
  }
  