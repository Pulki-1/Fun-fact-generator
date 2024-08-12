const indianFacts = [
    "India is the world's largest democracy with over 1.3 billion people.",
    "The game of chess was invented in India during the Gupta Empire.",
    "India is the second-largest English-speaking country in the world, just after the United States.",
    "The Indian Railways is the largest employer in the world, with over 1.3 million employees.",
    "Yoga originated in India around 5,000 years ago and is still practiced worldwide.",
    "The Kumbh Mela, a Hindu festival, is the largest gathering of humans on Earth.",
    "India is home to the world's only floating post office, located in Srinagar on Dal Lake.",
    "The Indian national Kabaddi team has won all World Cups held so far.",
    "The world's highest cricket ground is in Chail, Himachal Pradesh, situated at an altitude of 2,444 meters.",
    "India was the first country to mine diamonds, with mining dating back to 4th century BC."
];

const globalFacts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
    "A day on Venus is longer than a year on Venus. It takes Venus 243 Earth days to rotate once, but only 225 Earth days to orbit the Sun.",
    "Bananas are berries, but strawberries aren't. In botanical terms, a berry is a fruit produced from a single ovary, which makes bananas a berry and strawberries not.",
    "The Eiffel Tower can be 15 cm taller during the summer. When a substance is heated up, its particles move more and it takes up a larger volume – this is known as thermal expansion.",
    "Octopuses have three hearts and blue blood. Two hearts pump blood to the gills, while the third pumps it to the rest of the body.",
    "Cows have best friends and get stressed when they are separated. Studies have shown that cows can form strong bonds with each other.",
    "The world's oldest wooden wheel has been around for more than 5,000 years. It was found in Slovenia and is approximately 5,200 years old.",
    "A single cloud can weigh more than a million pounds. Clouds are composed of tiny water droplets, which can add up to an enormous weight.",
    "Human teeth are as strong as shark teeth. Our teeth can withstand about the same amount of force as a shark's teeth, despite their size difference."
];

const allFacts = [...indianFacts, ...globalFacts];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * allFacts.length);
    const factDisplay = document.getElementById('fact-display');
    factDisplay.textContent = allFacts[randomIndex];
    factDisplay.classList.add('highlight-fact');
    setTimeout(() => {
        factDisplay.classList.remove('highlight-fact');
    }, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    initializeFacts();
});

function initializeFacts() {
    const firstFactIndex = Math.floor(Math.random() * allFacts.length);
    const factDisplay = document.getElementById('fact-display');
    factDisplay.textContent = allFacts[firstFactIndex];
}

function addNewFact(fact) {
    allFacts.push(fact);
}

function removeFact(index) {
    if (index >= 0 && index < allFacts.length) {
        allFacts.splice(index, 1);
    }
}

function shuffleFacts() {
    for (let i = allFacts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allFacts[i], allFacts[j]] = [allFacts[j], allFacts[i]];
    }
}

function searchFact(keyword) {
    return allFacts.filter(fact => fact.toLowerCase().includes(keyword.toLowerCase()));
}

const style = document.createElement('style');
style.innerHTML = `
.highlight-fact {
    color: #007bff;
    font-weight: 700;
    transition: color 0.3s ease, font-weight 0.3s ease;
}`;
document.head.appendChild(style);

function toggleFactHighlight() {
    const factDisplay = document.getElementById('fact-display');
    if (factDisplay.classList.contains('highlight-fact')) {
        factDisplay.classList.remove('highlight-fact');
    } else {
        factDisplay.classList.add('highlight-fact');
    }
}

setInterval(toggleFactHighlight, 2000);
