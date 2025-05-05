import React, { useState } from "react";

import { motion } from 'framer-motion';
import FlashCard from '../components/FlashCard';

    const hadithData = [

        { title: "Iman", text: "The importance of Iman (faith) in Islam is emphasized in various hadiths, which mention its essential role in the heart of a Muslim.", source: "Tirmidhi" },
        { title: "Salah", text: "The importance of Salah (prayer) in Islam is emphasized in various hadiths, which highlight its significance in connecting with Allah and strengthening faith.", source: "Bukhari" },
        { title: "Zakah", text: "The importance of Zakah (charity) is emphasized in various hadiths, which teach the purification of wealth and helping those in need.", source: "Tirmidhi" },
        { title: "Sawm", text: "The importance of Sawm (fasting) is emphasized in various hadiths, which guide Muslims in developing self-control, empathy for the needy, and gratitude.", source: "Bukhari" },
        { title: "Hajj", text: "The importance of Hajj (pilgrimage) is emphasized in various hadiths, which highlight its spiritual significance and its role in uniting Muslims worldwide.", source: "Abu Dawood" },
        { title: "Patience", text: "The importance of patience (Sabr) is emphasized in various hadiths, which describe it as a virtue that strengthens a person’s character in times of hardship.", source: "Ibn Majah" },
        { title: "Gratitude", text: "The importance of gratitude (Shukr) is emphasized in various hadiths, which encourage Muslims to appreciate Allah's blessings and be thankful in all situations.", source: "Abu Dawood" },
        { title: "Truthfulness", text: "The importance of truthfulness (Sidq) is emphasized in various hadiths, which stress its role in developing integrity and trustworthiness in a Muslim.", source: "Tirmidhi" },
        { title: "Brotherhood", text: "The importance of brotherhood (Ukhuwwah) is emphasized in various hadiths, which highlight the bond among Muslims as brothers and sisters in faith.", source: "Abu Dawood" },
        { title: "Kindness", text: "The importance of kindness (Ihsan) is emphasized in various hadiths, which guide Muslims to be gentle, considerate, and merciful to others.", source: "Abu Dawood" },
        { title: "Justice", text: "The importance of justice (Adl) is emphasized in various hadiths, which teach Muslims to treat others fairly and uphold justice in all circumstances.", source: "Muslim" },
        { title: "Mercy", text: "The importance of mercy (Rahmah) is emphasized in various hadiths, which demonstrate Allah’s mercy towards His creation and the need for Muslims to show mercy to others.", source: "Tirmidhi" },
        { title: "Forgiveness", text: "The importance of forgiveness (Maghfirah) is emphasized in various hadiths, which encourage Muslims to forgive others, as it leads to personal peace and divine reward.", source: "Abu Dawood" },
        { title: "Tawheed", text: "The importance of Tawheed (monotheism) is emphasized in various hadiths, which affirm the oneness of Allah and the core belief in Islamic faith.", source: "Bukhari" },
        { title: "Knowledge", text: "The importance of knowledge (Ilm) is emphasized in various hadiths, which stress the need for acquiring beneficial knowledge and passing it on to others.", source: "Muslim" },
        { title: "Repentance", text: "The importance of repentance (Tawbah) is emphasized in various hadiths, which encourage Muslims to seek forgiveness from Allah for their sins and strive to reform.", source: "Bukhari" },
        { title: "Prayer", text: "The importance of prayer (Dua) is emphasized in various hadiths, which highlight its power in seeking Allah's guidance, mercy, and protection.", source: "Bukhari" },
        { title: "Charity", text: "The importance of charity (Sadaqah) is emphasized in various hadiths, which encourage Muslims to share their wealth with the poor and needy to earn rewards.", source: "Bukhari" },
        { title: "Modesty", text: "The importance of modesty (Haya) is emphasized in various hadiths, which guide Muslims to maintain modesty in both actions and appearance.", source: "Tirmidhi" },
        { title: "Sincerity", text: "The importance of sincerity (Ikhlas) is emphasized in various hadiths, which stress the need to perform acts of worship solely for the sake of Allah.", source: "Tirmidhi" },
        { title: "Hope", text: "The importance of hope (Raja) is emphasized in various hadiths, which encourage Muslims to trust in Allah’s mercy and maintain hope even in difficult times.", source: "Bukhari" },
        { title: "Fear", text: "The importance of fear (Khauf) is emphasized in various hadiths, which teach that fearing Allah helps Muslims stay on the righteous path and avoid sin.", source: "Muslim" },
        { title: "Trust", text: "The importance of trust (Tawakkul) is emphasized in various hadiths, which encourage Muslims to trust in Allah’s plan while taking necessary actions.", source: "Tirmidhi" },
        { title: "Guidance", text: "The importance of guidance (Hidayah) is emphasized in various hadiths, which remind Muslims to seek Allah's guidance in all aspects of life.", source: "Ibn Majah" },
        { title: "Wisdom", text: "The importance of wisdom (Hikmah) is emphasized in various hadiths, which show that wisdom is a valuable trait in making sound decisions and guiding others.", source: "Tirmidhi" },
        { title: "Peace", text: "The importance of peace (Salam) is emphasized in various hadiths, which highlight the role of peace in fostering unity and harmony within society.", source: "Tirmidhi" },
        { title: "Compassion", text: "The importance of compassion (Rahmah) is emphasized in various hadiths, which encourage Muslims to be kind and empathetic towards others.", source: "Ibn Majah" },
        { title: "Love", text: "The importance of love (Mahabbah) is emphasized in various hadiths, which teach that love for Allah and His Messenger is central to a Muslim’s faith.", source: "Tirmidhi" },
        { title: "Honesty", text: "The importance of honesty (Sidq) is emphasized in various hadiths, which guide Muslims to always speak the truth, even in challenging situations.", source: "Bukhari" },
        { title: "Respect", text: "The importance of respect (Ihtiram) is emphasized in various hadiths, which teach Muslims to honor and respect others, particularly their elders.", source: "Muslim" },
        { title: "Unity", text: "The importance of unity (Ittihad) is emphasized in various hadiths, which encourage Muslims to remain united and work together for the greater good of the community.", source: "Abu Dawood" },
        { title: "Dua", text: "The importance of Dua (supplication) is emphasized in various hadiths, which highlight its power in seeking Allah’s mercy, blessings, and guidance.", source: "Tirmidhi" },
        { title: "Obedience", text: "The importance of obedience (Itaat) is emphasized in various hadiths, which teach Muslims to obey Allah and His Messenger to achieve success in this life and the hereafter.", source: "Ibn Majah" },
        { title: "Fasting", text: "The importance of fasting (Sawm) is emphasized in various hadiths, which highlight its role in spiritual growth, self-discipline, and empathy for the less fortunate.", source: "Ibn Majah" },
        { title: "Family", text: "The importance of family (A'ilah) is emphasized in various hadiths, which stress the need to maintain strong familial bonds and provide for loved ones.", source: "Muslim" },
        { title: "Neighbors", text: "The importance of neighbors (Jiran) is emphasized in various hadiths, which highlight the rights and duties Muslims have towards their neighbors in the community.", source: "Ibn Majah" },
        { title: "Anger", text: "The importance of controlling anger (Ghadab) is emphasized in various hadiths, which teach Muslims to exercise patience and calmness in difficult situations.", source: "Muslim" },
        { title: "Greed", text: "The importance of avoiding greed (Tama') is emphasized in various hadiths, which warn against being overly attached to wealth and material possessions.", source: "Abu Dawood" },
        { title: "Pride", text: "The importance of humility over pride (Kibr) is emphasized in various hadiths, which stress the need to remain humble and not think of oneself as superior to others.", source: "Bukhari" },
        { title: "Contentment", text: "The importance of contentment (Qana'ah) is emphasized in various hadiths, which encourage Muslims to be satisfied with what they have and trust in Allah’s plan.", source: "Muslim" },
        { title: "Courage", text: "The importance of courage (Shuja'ah) is emphasized in various hadiths, which encourage Muslims to stand up for what is right, even in the face of difficulty.", source: "Bukhari" },
        { title: "Humility", text: "The importance of humility (Tawadhu) is emphasized in various hadiths, which teach Muslims to be modest, kind-hearted, and respectful towards others.", source: "Bukhari" },
        { title: "Cleanliness", text: "The importance of cleanliness (Tahara) is emphasized in various hadiths, which stress that cleanliness is a part of faith and an essential aspect of personal hygiene.", source: "Abu Dawood" },
        { title: "Generosity", text: "The importance of generosity (Karam) is emphasized in various hadiths, which encourage Muslims to be generous and share their wealth with those in need.", source: "Muslim" },
        { title: "Hard Work", text: "The importance of hard work (Juhd) is emphasized in various hadiths, which encourage Muslims to strive and put in effort to achieve success in both worldly and spiritual matters.", source: "Ibn Majah" },
        { title: "Self-Control", text: "The importance of self-control (Ihtisab) is emphasized in various hadiths, which stress the significance of controlling one’s desires and actions for the sake of Allah.", source: "Bukhari" },
        { title: "Accountability", text: "The importance of accountability (Mas'uliyyah) is emphasized in various hadiths, which teach that each individual will be held responsible for their actions in the hereafter.", source: "Abu Dawood" },
        { title: "Time", text: "The importance of time (Waqt) is emphasized in various hadiths, which stress the value of time and the need to make the most of it in performing good deeds.", source: "Ibn Majah" },
        { title: "Good Character", text: "The importance of good character (Akhlaq) is emphasized in various hadiths, which guide Muslims to exhibit moral virtues such as honesty, kindness, and respect.", source: "Tirmidhi" }
      ];
      const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.8, ease: 'easeInOut' } },
      };
      
      const titleVariants = {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      };
      
      const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      };
      
      const Categories = () => {
        const [isDropdownOpen, setDropdownOpen] = useState(false);
        
        const toggleDropdown = () => {
          setDropdownOpen(prev => !prev); // Toggle the dropdown open/close
        };
      
        return (
          <motion.section
            className="min-h-screen px-4 sm:px-10 py-12 bg-white"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-green-800 mb-10 text-center"
              variants={titleVariants}
            >
              Hadith
            </motion.h2>
        
            
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {hadithData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial={{ scale: 0.8, opacity: 0, y: 30 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, boxShadow: "0px 5px 17px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.97 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.06, type: 'spring', stiffness: 100 }}
                >
                  <FlashCard
                    title={item.title}
                    text={item.text}
                    source={item.source}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        );
      };
      
      export default Categories;