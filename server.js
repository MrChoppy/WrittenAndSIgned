const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

const uri = "mongodb+srv://admin:admin@cluster0.epf65kl.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });


  app.get('/poem/random', async (req, res) => {
    try {
      await client.connect();
      
      const database = client.db("WrittenAndSigned");
      const collection = database.collection("Poems");
  
      // Count the total number of documents in the collection
      const totalDocuments = await collection.countDocuments();
  
      // Generate a random index within the range of the total documents
      const randomIndex = Math.floor(Math.random() * totalDocuments);
  
      // Find one poem document using the random index
      const randomPoem = await collection.findOne({}, { skip: randomIndex });
  
      res.json(randomPoem); // Send the random poem as a JSON response
    } catch (error) {
      console.error('Failed to connect to database:', error);
      res.status(500).send('Failed to connect to the database');
    } finally {
      await client.close();
    }
  });
  
app.get('/poem/add', async (req, res) => {
    try {
      await client.connect();
      
      const database = client.db("WrittenAndSigned");
      const collection = database.collection("Poems");
  

      const documents = [{

        title: "The Road Not Taken",
        poet: "Robert Frost",
        lines: [
          "Two roads diverged in a yellow wood",
          "And sorry I could not travel both",
          "And be one traveler, long I stood",
          "And looked down one as far as I could",
          "To where it bent in the undergrowth;",
          "Then took the other, as just as fair,",
          "And having perhaps the better claim,",
          "Because it was grassy and wanted wear;",
          "Though as for that the passing there,",
          "Had worn them really about the same,",
          "And both that morning equally lay",
          "In leaves no step had trodden black.",
          "Oh, I kept the first for another day!",
          "Yet knowing how way leads on to way,",
          "I doubted if I should ever come back.",
          "I shall be telling this with a sigh",
          "Somewhere ages and ages hence:",
          "Two roads diverged in a wood, and I—",
          "I took the one less traveled by,",
          "And that has made all the difference."
        ]
      },
      {
        title: "Sonnet 18",
        poet: "William Shakespeare",
        lines: [
          "Shall I compare thee to a summer's day?",
          "Thou art more lovely and more temperate:",
          "Rough winds do shake the darling buds of May,",
          "And summer's lease hath all too short a date:",
          "Sometime too hot the eye of heaven shines,",
          "And often is his gold complexion dimmed;",
          "And every fair from fair sometime declines,",
          "By chance or nature's changing course untrimmed;",
          "But thy eternal summer shall not fade",
          "Nor lose possession of that fair thou owest;",
          "Nor shall Death brag thou wanderest in his shade,",
          "When in eternal lines to time thou growest:",
          "So long as men can breathe or eyes can see,",
          "So long lives this, and this gives life to thee."
        ]
      },
      {
        title: "I Carry Your Heart with Me",
        poet: "E.E. Cummings",
        lines: [
          "i carry your heart with me(i carry it in",
          "my heart)i am never without it(anywhere",
          "i go you go,my dear;and whatever is done",
          "by only me is your doing,my darling)",
          "i fear",
          "no fate(for you are my fate,my sweet)i want",
          "no world(for beautiful you are my world,my true)",
          "and it’s you are whatever a moon has always meant",
          "and whatever a sun will always sing is you",
          "here is the deepest secret nobody knows",
          "(here is the root of the root and the bud of the bud",
          "and the sky of the sky of a tree called life;which grows",
          "higher than soul can hope or mind can hide)",
          "and this is the wonder that's keeping the stars apart",
          "i carry your heart(i carry it in my heart)"
        ]
      },
      {
       title: "The Raven",
       poet: "Edgar Allan Poe",
       lines: [
        "Once upon a midnight dreary, while I pondered, weak and weary,",
        "Over many a quaint and curious volume of forgotten lore—",
        "While I nodded, nearly napping, suddenly there came a tapping,",
        "As of some one gently rapping, rapping at my chamber door.",
        '"’Tis some visitor," I muttered, "tapping at my chamber door—',
        'Only this and nothing more."',
        "Ah, distinctly I remember it was in the bleak December;",
        "And each separate dying ember wrought its ghost upon the floor.",
        "From my books surcease of sorrow—sorrow for the lost Lenore—",
        "For the rare and radiant maiden whom the angels name Lenore—",
        "Nameless here for evermore.",
        "And the silken, sad, uncertain rustling of each purple curtain",
        "Thrilled me—filled me with fantastic terrors never felt before;",
        "So that now, to still the beating of my heart, I stood repeating",
        '"’Tis some visitor entreating entrance at my chamber door—',
        'Some late visitor entreating entrance at my chamber door;—',
        'This it is and nothing more."'
      ]
    }
    ,
    {
      title: "If",
      poet: "Rudyard Kipling",
      lines: [
        "If you can keep your head when all about you",
        "Are losing theirs and blaming it on you,",
        "If you can trust yourself when all men doubt you,",
        "But make allowance for their doubting too;",
        "If you can wait and not be tired by waiting,",
        "Or being lied about, don’t deal in lies,",
        "Or being hated, don’t give way to hating,",
        "And yet don’t look too good, nor talk too wise:",
        "If you can dream—and not make dreams your master;",
        "If you can think—and not make thoughts your aim;",
        "If you can meet with Triumph and Disaster",
        "And treat those two impostors just the same;",
        "If you can bear to hear the truth you’ve spoken",
        "Twisted by knaves to make a trap for fools,",
        "Or watch the things you gave your life to, broken,",
        "And stoop and build ’em up with worn-out tools:",
        "If you can make one heap of all your winnings",
        "And risk it on one turn of pitch-and-toss,",
        "And lose, and start again at your beginnings",
        "And never breathe a word about your loss;",
        "If you can force your heart and nerve and sinew",
        "To serve your turn long after they are gone,",
        "And so hold on when there is nothing in you",
        "Except the Will which says to them: 'Hold on!'",
        "If you can talk with crowds and keep your virtue,",
        "Or walk with Kings—nor lose the common touch,",
        "If neither foes nor loving friends can hurt you,",
        "If all men count with you, but none too much;",
        "If you can fill the unforgiving minute",
        "With sixty seconds’ worth of distance run,",
        "Yours is the Earth and everything that’s in it,",
        "And—which is more—you’ll be a Man, my son!"
      ]}
    ,
        
      ];
  
      
      // Insert the array of documents into the collection
      const result = await collection.insertMany(documents);
      console.log(`${result.insertedCount} documents inserted.`);
  


      // Fetch data from the collection
      const data = await collection.find({}).toArray();
        
      console.log(data)
      res.json(data); // Send the data as a JSON response
    } catch (error) {
      console.error('Failed to connect to database:', error);
      res.status(500).send('Failed to connect to the database');
    } finally {
      await client.close();
    }
  });

  


//quotes

  app.get('/quote/random', async (req, res) => {
    try {
      await client.connect();
      
      const database = client.db("WrittenAndSigned");
      const collection = database.collection("Quotes");
  
      console.log(collection)
      // Count the total number of documents in the collection
      const totalDocuments = await collection.countDocuments();
  
      // Generate a random index within the range of the total documents
      const randomIndex = Math.floor(Math.random() * totalDocuments);
  
      // Find one poem document using the random index
      const randomPoem = await collection.findOne({}, { skip: randomIndex });
  
      res.json(randomPoem); // Send the random poem as a JSON response
    } catch (error) {
      console.error('Failed to connect to database:', error);
      res.status(500).send('Failed to connect to the database');
    } finally {
      await client.close();
    }
  });



app.get('/quote/add', async (req, res) => {
    try {
      await client.connect();
      
      const database = client.db("WrittenAndSigned");
      const collection = database.collection("Quotes");
  

      const documents = [
        {
          "quote": "The only way to do great work is to love what you do.",
          "author": "Steve Jobs"
        },
        {
          "quote": "In the middle of difficulty lies opportunity.",
          "author": "Albert Einstein"
        },
        {
          "quote": "Believe you can and you're halfway there.",
          "author": "Theodore Roosevelt"
        },
        {
          "quote": "The future belongs to those who believe in the beauty of their dreams.",
          "author": "Eleanor Roosevelt"
        },
        {
          "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          "author": "Winston Churchill"
        },
        {
          "quote": "Happiness is not something ready-made. It comes from your own actions.",
          "author": "Dalai Lama"
        },
        {
          "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
          "author": "Franklin D. Roosevelt"
        },
        {
          "quote": "The best way to predict the future is to create it.",
          "author": "Peter Drucker"
        },
        {
          "quote": "The purpose of our lives is to be happy.",
          "author": "Dalai Lama"
        },
        {
          "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
          "author": "Nelson Mandela"
        }
       
    ,
        
      ];
  
      
      // Insert the array of documents into the collection
      const result = await collection.insertMany(documents);
      console.log(`${result.insertedCount} documents inserted.`);
  


      // Fetch data from the collection
      const data = await collection.find({}).toArray();
        
      console.log(data)
      res.json(data); // Send the data as a JSON response
    } catch (error) {
      console.error('Failed to connect to database:', error);
      res.status(500).send('Failed to connect to the database');
    } finally {
      await client.close();
    }
  });


  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
