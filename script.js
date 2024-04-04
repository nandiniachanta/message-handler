class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = [];
    }

    put(message) {
        if (this.cache.includes(message)) {
            // If message is already in cache, remove it from its current position
            const index = this.cache.indexOf(message);
            this.cache.splice(index, 1);
        } else if (this.cache.length >= this.capacity) {
            // If cache is full, remove the least recently used message
            this.cache.shift();
        }
        // Add the message to the end of the cache
        this.cache.push(message);
    }

    getRecentMessages() {
        return this.cache.slice(); // Return a copy of the cache
    }
}

let cache = new LRUCache(3);

function setLimit() {
    const limit = parseInt(document.getElementById("limit").value);
    cache = new LRUCache(limit); // Create a new cache with the specified limit
    updateMessageList(); // Update the displayed messages with the new limit
}

function addMessage() {
    const messageInput = document.getElementById('message');
    const message = messageInput.value.trim();
    if (message !== '') {
        cache.put(message);
        updateMessageList();
    }
    messageInput.value = '';
}

function updateMessageList() {
    const messageList = document.getElementById('messageList');
    messageList.innerHTML = ''; // Clear existing message list
    const recentMessages = cache.getRecentMessages();
    const messageCounts = countOccurrences(recentMessages);

    recentMessages.forEach(message => {
        const messageItem = document.createElement('div');
        const occurrenceText = `Occurrences: ${messageCounts[message]}`;
        messageItem.textContent = `${message} - ${occurrenceText}`;
        messageList.appendChild(messageItem);
    });
}

function countOccurrences(arr) {
    return arr.reduce((acc, curr) => {
        acc[curr] ? acc[curr]++ : (acc[curr] = 1);
        return acc;
    }, {});
}