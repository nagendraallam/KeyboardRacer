export const getPara = (difficulty) => {
  switch (difficulty) {
    case 1: {
      console.log("easy");
      return data.easy[Math.round(Math.random() * (data.easy.length - 1))];
    }
    case 2: {
      console.log("medium");
      return data.medium[Math.round(Math.random() * (data.medium.length - 1))];
    }
    case 3: {
      console.log("hard");
      return data.hard[Math.round(Math.random() * (data.hard.length - 1))];
    }
  }
};

const data = {
  easy: [
    "Purana tigrina is a species of cicada found in Southeast Asia. This adult male was photographed in Kadavoor, Kerala, in southern India, and is about one inch (25 mm) in length. The mouthparts are adapted to piercing plant tissues and sucking sap; the male abdomen houses the tymbal, an organ used in the production of song, while the female abdomen is tipped by a large, saw-edged ovipositor.",
    "Whenever I smell strong tobacco smoke when I'm in an enclosed space such as a room, train, or aircraft, I begin to get angry. There are several reasons. First, medical researchers have shown that secondhand smoke, that is, the smoke from other people's cigarettes, causes cancer and other health problems. If the smoke were car exhaust or burning trash, we would put out the fire and open the windows to get rid of the smoke.",
    "The Ramayana is a story of Lord Rama written by the SageValmiki. Lord Rama, the prince of Ayodhya, in order to help his father Dasharatha went to exile for fourteen years. His wife, Sita and his younger brother Lakshmana also went with him. He went through many difficulties in the forest. One day Ravana, the king of Lanka carried away Sita with him. Then, Lord Rama, with the help of Hanumana, defeated and killed Ravana; Sita, Rama and Lakshmana returned to Ayod hya after their exile.",
    "A snake charmer is a person who moves the streets with different types of the banks of the river Yamuna. It is snakes in his basket. He goes from one place to another to show various types of snakes and their tricks. He carries a pipe with which he plays music and snakes dance to his tune. He usually wears a colourful dress. The job of a snake charmer is quite dangerous. Some snakes are quite poisonous and can even bite him. It is not an easy task to catch and train them for the shows.",
    "The doctor is a person who looks after the sick people and prescribes medicines so that the patient recovers fast. In order to become a doctor, a person has to study medicine. Doctors lead a hard life. Their life is very busy. They get up early in the morning and go to the hospital. They work without taking a break. They always remain polite so that patients feel comfortable with them. Since doctors work so hard we must realise their value.",
  ],
  medium: [
    "Purana tigrina is a species of cicada found in Southeast Asia. This adult male was photographed in Kadavoor, Kerala, in southern India, and is about one inch (25 mm) in length. The mouthparts are adapted to piercing plant tissues and sucking sap; the male abdomen houses the tymbal, an organ used in the production of song, while the female abdomen is tipped by a large, saw-edged ovipositor.",
    "Whenever I smell strong tobacco smoke when I'm in an enclosed space such as a room, train, or aircraft, I begin to get angry. There are several reasons. First, medical researchers have shown that secondhand smoke, that is, the smoke from other people's cigarettes, causes cancer and other health problems. If the smoke were car exhaust or burning trash, we would put out the fire and open the windows to get rid of the smoke.",
    "The Ramayana is a story of Lord Rama written by the SageValmiki. Lord Rama, the prince of Ayodhya, in order to help his father Dasharatha went to exile for fourteen years. His wife, Sita and his younger brother Lakshmana also went with him. He went through many difficulties in the forest. One day Ravana, the king of Lanka carried away Sita with him. Then, Lord Rama, with the help of Hanumana, defeated and killed Ravana; Sita, Rama and Lakshmana returned to Ayod hya after their exile.",
    "A snake charmer is a person who moves the streets with different types of the banks of the river Yamuna. It is snakes in his basket. He goes from one place to another to show various types of snakes and their tricks. He carries a pipe with which he plays music and snakes dance to his tune. He usually wears a colourful dress. The job of a snake charmer is quite dangerous. Some snakes are quite poisonous and can even bite him. It is not an easy task to catch and train them for the shows.",
    "The doctor is a person who looks after the sick people and prescribes medicines so that the patient recovers fast. In order to become a doctor, a person has to study medicine. Doctors lead a hard life. Their life is very busy. They get up early in the morning and go to the hospital. They work without taking a break. They always remain polite so that patients feel comfortable with them. Since doctors work so hard we must realise their value.",
  ],

  hard: [
    "Purana tigrina is a species of cicada found in Southeast Asia. This adult male was photographed in Kadavoor, Kerala, in southern India, and is about one inch (25 mm) in length. The mouthparts are adapted to piercing plant tissues and sucking sap; the male abdomen houses the tymbal, an organ used in the production of song, while the female abdomen is tipped by a large, saw-edged ovipositor.",
    "Whenever I smell strong tobacco smoke when I'm in an enclosed space such as a room, train, or aircraft, I begin to get angry. There are several reasons. First, medical researchers have shown that secondhand smoke, that is, the smoke from other people's cigarettes, causes cancer and other health problems. If the smoke were car exhaust or burning trash, we would put out the fire and open the windows to get rid of the smoke.",
    "The Ramayana is a story of Lord Rama written by the SageValmiki. Lord Rama, the prince of Ayodhya, in order to help his father Dasharatha went to exile for fourteen years. His wife, Sita and his younger brother Lakshmana also went with him. He went through many difficulties in the forest. One day Ravana, the king of Lanka carried away Sita with him. Then, Lord Rama, with the help of Hanumana, defeated and killed Ravana; Sita, Rama and Lakshmana returned to Ayod hya after their exile.",
    "A snake charmer is a person who moves the streets with different types of the banks of the river Yamuna. It is snakes in his basket. He goes from one place to another to show various types of snakes and their tricks. He carries a pipe with which he plays music and snakes dance to his tune. He usually wears a colourful dress. The job of a snake charmer is quite dangerous. Some snakes are quite poisonous and can even bite him. It is not an easy task to catch and train them for the shows.",
    "The doctor is a person who looks after the sick people and prescribes medicines so that the patient recovers fast. In order to become a doctor, a person has to study medicine. Doctors lead a hard life. Their life is very busy. They get up early in the morning and go to the hospital. They work without taking a break. They always remain polite so that patients feel comfortable with them. Since doctors work so hard we must realise their value.",
  ],
};
