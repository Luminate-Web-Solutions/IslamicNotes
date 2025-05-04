import FlashCard from '../components/FlashCard';

const categories = [
  {
    title: 'Patience (Sabr)',
    text: 'Indeed, Allah is with the patient.',
    source: 'Qur’an 2:153',
  },
  {
    title: 'Good Character',
    text: 'The best among you are those who have the best manners and character.',
    source: 'Bukhari',
  },
  {
    title: 'Prayer (Salah)',
    text: 'The first matter that the slave will be brought to account for on the Day of Judgment is the prayer.',
    source: 'Tirmidhi',
  },
  {
    title: 'Kindness',
    text: 'He who is not merciful to people, Allah will not be merciful to him.',
    source: 'Bukhari & Muslim',
  },
  {
    title: 'Charity (Sadaqah)',
    text: 'Charity does not decrease wealth.',
    source: 'Muslim',
  },
  {
    title: 'Trust in Allah',
    text: 'If you rely upon Allah with true reliance, He will provide for you as He provides for the birds.',
    source: 'Tirmidhi',
  },
  {
    title: 'Brotherhood',
    text: 'None of you truly believes until he loves for his brother what he loves for himself.',
    source: 'Bukhari & Muslim',
  },
  {
    title: 'Humility',
    text: 'Whoever humbles himself for the sake of Allah, Allah will raise him in status.',
    source: 'Muslim',
  },
  {
    title: 'Truthfulness',
    text: 'Truthfulness leads to righteousness, and righteousness leads to Paradise.',
    source: 'Bukhari & Muslim',
  },
  {
    title: 'Forgiveness',
    text: 'Be merciful to others and you will receive mercy. Forgive and Allah will forgive you.',
    source: 'Musnad Ahmad',
  },
  {
    title: 'Gratitude',
    text: 'Whoever is not grateful to people is not grateful to Allah.',
    source: 'Abu Dawood',
  },
  {
    title: 'Dua (Supplication)',
    text: 'Dua is the essence of worship.',
    source: 'Tirmidhi',
  },
  {
    title: 'Smiling',
    text: 'Your smile for your brother is charity.',
    source: 'Tirmidhi',
  },
  {
    title: 'Seeking Knowledge',
    text: 'Whoever follows a path in pursuit of knowledge, Allah will make easy for him a path to Paradise.',
    source: 'Muslim',
  },
  {
    title: 'Modesty (Haya)',
    text: 'Modesty brings nothing but good.',
    source: 'Bukhari',
  },
  {
    title: 'Backbiting',
    text: 'Do not backbite one another.',
    source: 'Qur’an 49:12',
  },
  {
    title: 'Justice',
    text: 'Help your brother whether he is an oppressor or he is oppressed.',
    source: 'Bukhari',
  },
  {
    title: 'Repentance (Tawbah)',
    text: 'Every son of Adam sins, and the best of those who sin are those who repent.',
    source: 'Tirmidhi',
  },
  {
    title: 'Helping Others',
    text: 'Allah helps the servant as long as he helps his brother.',
    source: 'Muslim',
  },
  {
    title: 'Generosity',
    text: 'The upper hand is better than the lower hand.',
    source: 'Bukhari & Muslim',
  },
  {
    title: 'Contentment',
    text: 'Richness is not having many possessions, but richness is being content.',
    source: 'Bukhari & Muslim',
  },
  {
    title: 'Love for Allah',
    text: 'Whoever loves to meet Allah, Allah loves to meet him.',
    source: 'Bukhari',
  },
  {
    title: 'Intention (Niyyah)',
    text: 'Actions are but by intentions.',
    source: 'Bukhari & Muslim',
  },
  {
    title: 'Qur’an',
    text: 'The best of you are those who learn the Qur’an and teach it.',
    source: 'Bukhari',
  },
  {
    title: 'Fasting (Sawm)',
    text: 'Fasting is a shield.',
    source: 'Bukhari & Muslim',
  },
  {
    title: 'Parents',
    text: 'Paradise lies under the feet of mothers.',
    source: 'Nasa’i',
  },
  {
    title: 'Neighbors',
    text: 'He is not a believer who eats his fill while his neighbor goes hungry.',
    source: 'Musnad Ahmad',
  },
  {
    title: 'Jealousy',
    text: 'Beware of jealousy, for it destroys good deeds like fire destroys wood.',
    source: 'Abu Dawood',
  },
  {
    title: 'Zikr (Remembrance)',
    text: 'The example of the one who remembers Allah and the one who does not is like the living and the dead.',
    source: 'Bukhari',
  },
  {
    title: 'Mercy',
    text: 'Allah will not show mercy to him who is not merciful to people.',
    source: 'Bukhari',
  },
];
const Home = () => {
return (
  <>
    <section id="Home" className="text-center py-20 px-4">
      <h1 className="text-4xl font-bold text-green-700">
        Welcome to Islamic Notes 
      </h1>
      <p className="mt-4 text-black">
        Download, Read, and Upload Authentic Islamic Content.
      </p>
      <div/>
      <div/>  
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>  
      <div/>
      <div/>
      <div/>
      <div/>  
      <div/>
      <div/>
       </section>
    

    <section className="mt-10 px-4 sm:px-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6">Hadith Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((item, index) => (
          <FlashCard
            key={index}
            title={item.title}
            text={item.text}
            source={item.source}
          />
        ))}
      </div>
    </section>
  </>
);
};  



export default Home;
