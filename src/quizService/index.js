const qBank = [
  {
    question: "How does emissions from fossil fuels affect lakes?   ",
    answers: [
      "They get warmer",
      "They get sour from acidification",
      "They get dirty",
      "No affect"
    ],
    correct: "They get sour from acidification",
    questionId: "099099"
  },
  {
    question:
      "By which year at the latest do we need to stop using all fossil fuels to avoid a global catastrophe? ",
    answers: ["2030", "2040", "2050", "2060"],
    correct: "2050",
    questionId: "183452"
  },
  {
    question: "Which of the following risk is the biggest from global warming?",
    answers: [
      "The light gets brighter outside",
      "Animals need more water",
      "Glaciers starts to melt",
      "No risk"
    ],
    correct: "Glaciers starts to melt",
    questionId: "267908"
  },
  {
    question: "What happens with the sea when glaciers are melting? ",
    answers: [
      "It gets colder",
      "The water level increases",
      "The sea gets polluted",
      "It gets more ice"
    ],
    correct: "The water level increases",
    questionId: "333247"
  },
  {
    question: "What can you do to prevent global warming? ",
    answers: [
      "Drive electric vehicles",
      "Eat more Meat",
      "Use more fossil fuels",
      "Nothing"
    ],
    correct: "Drive electric vehicles",
    questionId: "496293"
  },
  {
    question: "How does emissions from fossil fuels affect the air? ",
    answers: [
      "The air gets cleaner",
      "The air gets polluted",
      "The air destroys our houses",
      "It gets colder"
    ],
    correct: "The air gets polluted",
    questionId: "588909"
  },
  {
    question:
      "What can happen with different countries because of the high sea level? ",
    answers: [
      "They get overpopulated",
      "They get more lakes from the increase of water",
      "They need to build more towers",
      "Nothing"
    ],
    correct: "They get overpopulated",
    questionId: "648452"
  },
  {
    question: "Why should you recycle plastic and clothes? ",
    answers: [
      "Because you can buy more stuff",
      "It stops the manufacturing that causes emissions",
      "It is dangerous to wear the same clothes for a long time",
      "It is good for the retailers"
    ],
    correct: "It stops the manufacturing that causes emissions",
    questionId: "786649"
  },
  {
    question:
      "How can animals get affected by the global warming and melting of glaciers? ",
    answers: [
      "They don’t get affected",
      "They need more food",
      "They can die",
      "They can get dizzy"
    ],
    correct: "They can die",
    questionId: "839754"
  },
  {
    question: "Which is the best way to transport for the nature? ",
    answers: [
      "Drive electric vehicles",
      "Walk or take the bike",
      "Fly with airplanes",
      "Ride the buss"
    ],
    correct: "Walk or take the bike",
    questionId: "98390"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
