const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

const translateBtn = document.getElementById("translateBtn");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");

const emojiMap = {
    love: "❤️",
    heart: "❤️",
    happy: "😊",
    smile: "😄",
    sad: "😢",
    angry: "😡",
    laugh: "😂",
    laughing: "😂",

    pizza: "🍕",
    burger: "🍔",
    coffee: "☕",
    food: "🍴",
    apple: "🍎",
    cake: "🎂",
    icecream: "🍦",

    dog: "🐶",
    cat: "🐱",
    lion: "🦁",
    monkey: "🐒",
    fish: "🐟",

    sun: "☀️",
    moon: "🌙",
    star: "⭐",
    fire: "🔥",
    rain: "🌧️",
    snow: "❄️",

    car: "🚗",
    bike: "🚲",
    plane: "✈️",
    rocket: "🚀",

    home: "🏠",
    school: "🏫",
    office: "🏢",

    music: "🎵",
    movie: "🎬",
    game: "🎮",
    book: "📖",

    yes: "✅",
    no: "❌",
    good: "👍",
    bad: "👎",
    cool: "😎",
    wow: "😮",
    hello: "👋",
    bye: "👋",

    money: "💰",
    work: "💼",
    sleep: "😴",
    birthday: "🎂",
    gift: "🎁",
    party: "🎉"
};

translateBtn.addEventListener("click", translateText);

function translateText() {
    const text = inputText.value;

    if (text.trim() === "") {
        outputText.textContent = "Please type something first! 😊";
        return;
    }

    const words = text.split(" ");

    const translatedWords = words.map(word => {

        const cleanWord = word
            .toLowerCase()
            .replace(/[.,!?]/g, "");

        if (emojiMap[cleanWord]) {
            return emojiMap[cleanWord];
        }

        return word;
    });

    outputText.textContent = translatedWords.join(" ");
}

clearBtn.addEventListener("click", () => {
    inputText.value = "";
    outputText.textContent = "Your translated text will appear here...";
});

copyBtn.addEventListener("click", async () => {
    const result = outputText.textContent;

    if (
        result === "Your translated text will appear here..." ||
        result === ""
    ) {
        return;
    }

    await navigator.clipboard.writeText(result);

    copyBtn.textContent = "✅ Copied!";

    setTimeout(() => {
        copyBtn.textContent = "📋 Copy Result";
    }, 1500);
});
