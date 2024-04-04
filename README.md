OS Message Handler (LRU)
Welcome to the OS Message Handler (LRU) project! This is a lightweight web application designed to efficiently manage and display messages using a Least Recently Used (LRU) caching mechanism. Below, you'll find comprehensive information on how to use the application effectively, details about the implementation of the LRU cache, file structure, styling, and additional considerations.

Usage
Setting Message Limit: You can determine the number of recent messages to display by entering a value in the "Number of recent messages to display" input field and then clicking the "Set Limit" button.

Adding Messages: Enter your message in the designated input field and hit "Submit" to add it to the cache. Only non-empty messages are added.

Displaying Messages: The application dynamically updates the list of messages displayed below the input fields. Each message is accompanied by the number of times it has appeared in the cache.

Cache Implementation
The project incorporates a straightforward LRU cache implementation (LRUCache class) that provides the following features:

put(message): Inserts a message into the cache. If the cache is full, it evicts the least recently used message.
getRecentMessages(): Returns an array containing the most recently used messages in the cache.
File Structure
index.html: Contains the HTML structure of the web application.
style.css: Defines the styling for the HTML elements.
script.js: Implements the functionality of the message handler and LRU cache.
Styling
The application's interface is crafted using CSS to ensure a visually appealing and user-friendly experience. It features a clean layout with intuitive controls.

Important Notes
Educational Purpose: This application serves as an educational tool to illustrate the concept of LRU caching in a web environment. It's not intended for production use without further enhancements and security considerations.
Author Information
This project was created by Insert Your Name/Username. For any inquiries or suggestions, please feel free to reach out via Insert Your Email Address.

Thank you for using the OS Message Handler (LRU) application! We hope it enhances your message management experience effectively and efficiently.
