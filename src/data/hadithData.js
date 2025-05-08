// /src/data/hadithData.js
const hadithData = [
  {
    category: "🕌 Faith & Belief (Iman)",
    title: "Definition of Faith",
    text: "Faith is to believe in Allah, His angels, His books, His messengers, the Last Day, and destiny — the good and the bad of it. (Muslim)"
  },
  {
    category: "🕌 Faith & Belief (Iman)",
    title: "Sweetness of Faith",
    text: "Whoever possesses three qualities will taste the sweetness of faith: loving Allah and His Messenger more than anyone else, loving a person only for the sake of Allah, and hating to return to disbelief. (Bukhari & Muslim)"
  },
  {
    category: "🕋 Worship & Rituals (Ibadah)",
    title: "Pillar of Islam: Salah",
    text: "The first matter that the slave will be brought to account for on the Day of Judgment is the prayer. (Tirmidhi)"
  },
  {
    category: "🕋 Worship & Rituals (Ibadah)",
    title: "Virtue of Tahajjud",
    text: "The best prayer after the obligatory prayers is the night prayer. (Muslim)"
  },
  {
    category: "💰 Charity & Zakat",
    title: "Importance of Zakat",
    text: "Protect your wealth by giving Zakat, treat your sick by giving charity. (Tabarani)"
  },
  {
    category: "💰 Charity & Zakat",
    title: "Charity Never Decreases Wealth",
    text: "Charity does not decrease wealth. (Muslim)"
  },
  {
    category: "🌙 Fasting (Sawm)",
    title: "Fasting is for Allah",
    text: "Every act of the son of Adam is for him except fasting; it is for Me, and I will reward it. (Bukhari)"
  },
  {
    category: "🌙 Fasting (Sawm)",
    title: "Fasting as a Shield",
    text: "Fasting is a shield. (Bukhari & Muslim)"
  },
  {
    category: "🕋 Hajj & Umrah",
    title: "Accepted Hajj",
    text: "An accepted Hajj brings no less a reward than Paradise. (Bukhari & Muslim)"
  },
  {
    category: "🕋 Hajj & Umrah",
    title: "Umrah as Expiation",
    text: "From one Umrah to the next is expiation for what comes between them. (Bukhari & Muslim)"
  },
  {
    category: "👨‍👩‍👧‍👦 Family & Relationships",
    title: "Best Among You",
    text: "The best of you is the one who is best to his family. (Tirmidhi)"
  },
  {
    category: "👨‍👩‍👧‍👦 Family & Relationships",
    title: "Gentleness in the Home",
    text: "When Allah wills good for the people of a household, He introduces kindness among them. (Ahmad)"
  },
  {
    category: "❤️ Character & Manners",
    title: "Heaviest on the Scale",
    text: "The heaviest thing to be placed on the scale of a believer on the Day of Judgment will be good character. (Tirmidhi)"
  },
  {
    category: "❤️ Character & Manners",
    title: "Smiling is Charity",
    text: "Your smile to your brother is a charity. (Tirmidhi)"
  },
  {
    category: "📖 Quran & Knowledge",
    title: "Best of You",
    text: "The best among you are those who learn the Qur’an and teach it. (Bukhari)"
  },
  {
    category: "📖 Quran & Knowledge",
    title: "Seeking Knowledge",
    text: "Whoever follows a path in the pursuit of knowledge, Allah will make a path to Paradise easy for him. (Muslim)"
  },
  {
    category: "⚖️ Justice & Rights",
    title: "Support the Oppressed",
    text: "Help your brother whether he is an oppressor or the oppressed. (Bukhari)"
  },
  {
    category: "⚖️ Justice & Rights",
    title: "Beware of Injustice",
    text: "Beware of injustice, for injustice will be darkness on the Day of Judgment. (Muslim)"
  },
  {
    category: "🧠 Wisdom & Reflection",
    title: "Silence is Wisdom",
    text: "Whoever believes in Allah and the Last Day should speak good or remain silent. (Bukhari & Muslim)"
  },
  {
    category: "🧠 Wisdom & Reflection",
    title: "Intentions Matter",
    text: "Actions are judged by intentions. (Bukhari & Muslim)"
  },
  {
    category: "🌍 Society & Community",
    title: "Removing Harm is Charity",
    text: "Removing harmful things from the road is a type of charity. (Bukhari & Muslim)"
  },
  {
    category: "🌍 Society & Community",
    title: "The Strong Believer",
    text: "The strong believer is better and more beloved to Allah than the weak believer. (Muslim)"
  },
  {
    category: "💬 Speech & Etiquette",
    title: "Guard the Tongue",
    text: "A man utters a word thoughtlessly and it throws him into the Fire. (Bukhari)"
  },
  {
    category: "💬 Speech & Etiquette",
    title: "Good Words are Charity",
    text: "A good word is charity. (Bukhari & Muslim)"
  },
  {
    category: "⚠️ Sins & Repentance",
    title: "All Children of Adam Sin",
    text: "Every son of Adam sins, but the best of sinners are those who repent. (Tirmidhi)"
  },
  {
    category: "⚠️ Sins & Repentance",
    title: "Allah Loves Repentance",
    text: "Indeed, Allah is more pleased with the repentance of His servant than one of you who loses his camel in the desert then finds it. (Bukhari & Muslim)"
  },
    // more hadiths
  ];
  const Categories = [
    ...new Set(hadithData.map(h => h.category).filter(Boolean))
  ];

  export { hadithData, Categories };