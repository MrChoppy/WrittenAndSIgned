import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  getRandomDocument(collectionName: string): Observable<any> {
    const collection = this.firestore.collection<any>(collectionName);
    return collection.valueChanges().pipe(
      map((documents) => {
        const randomIndex = Math.floor(Math.random() * documents.length);
        return documents[randomIndex];
      })
    );
  }

  getRandomQuote(): Observable<any> {
    //    this.addQuotesToCollection();
    const collectionName = 'Quotes';
    return this.getRandomDocument(collectionName);
  }

  getRandomPoem(): Observable<any> {
    //    this.addPoemsToCollection();
    const collectionName = 'Poems';
    return this.getRandomDocument(collectionName);
  }

  addQuotesToCollection(): void {
    const collectionName = 'Quotes';
    const collection = this.firestore.collection<any>(collectionName);
    const batch = this.firestore.firestore.batch();

    const documents = [
      // Add the new quotes here
      {
        quote:
          'Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.',
        author: 'Celine Dion',
      },
      {
        quote:
          'Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty.',
        author: 'John F. Kennedy (JFK Quotes)',
      },
      {
        quote: 'Live for each second without hesitation.',
        author: 'Elton John',
      },
      {
        quote:
          'Life is like riding a bicycle. To keep your balance, you must keep moving.',
        author: 'Albert Einstein',
      },
      {
        quote:
          'Life is really simple, but men insist on making it complicated.',
        author: 'Confucius',
      },
      {
        quote:
          'Life is a succession of lessons which must be lived to be understood.',
        author: 'Helen Keller',
      },
      {
        quote:
          "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
        author: 'Steve Jobs',
      },
      {
        quote:
          "My mama always said, life is like a box of chocolates. You never know what you're gonna get.",
        author: 'Forrest Gump (Forrest Gump Quotes)',
      },
      {
        quote:
          'Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.',
        author: 'Lao-Tze',
      },
      {
        quote:
          'When we do the best we can, we never know what miracle is wrought in our life or the life of another.',
        author: 'Helen Keller',
      },
      {
        quote: 'The healthiest response to life is joy.',
        author: 'Deepak Chopra',
      },
      {
        quote:
          'Life is like a coin. You can spend it any way you wish, but you only spend it once.',
        author: 'Lillian Dickson',
      },
      {
        quote:
          "The best portion of a good man's life is his little nameless, unencumbered acts of kindness and of love.",
        author: 'Wordsworth',
      },
      {
        quote:
          "In three words I can sum up everything I've learned about life: It goes on.",
        author: 'Robert Frost',
      },
      {
        quote:
          'Life is ten percent what happens to you and ninety percent how you respond to it.',
        author: 'Charles Swindoll',
      },
      {
        quote: 'Keep calm and carry on.',
        author: 'Winston Churchill',
      },
      {
        quote:
          'Maybe that’s what life is… a wink of the eye and winking stars.',
        author: 'Jack Kerouac',
      },
      {
        quote: 'Life is a flower of which love is the honey.',
        author: 'Victor Hugo',
      },
      {
        quote:
          'Keep smiling, because life is a beautiful thing and there’s so much to smile about.',
        author: 'Marilyn Monroe',
      },
      {
        quote:
          'Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.',
        author: 'Buddha',
      },
      {
        quote:
          'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.',
        author: 'Dr. Seuss',
      },
      {
        quote:
          'Good friends, good books, and a sleepy conscience: this is the ideal life.',
        author: 'Mark Twain',
      },
      {
        quote: 'Life would be tragic if it weren’t funny.',
        author: 'Stephen Hawking',
      },
      {
        quote: 'Live in the sunshine, swim the sea, drink the wild air.',
        author: 'Ralph Waldo Emerson',
      },
      {
        quote: 'The greatest pleasure of life is love.',
        author: 'Euripides',
      },
      {
        quote: 'Life is what we make it, always has been, always will be.',
        author: 'Grandma Moses',
      },
      {
        quote: 'Life’s tragedy is that we get old too soon and wise too late.',
        author: 'Benjamin Franklin',
      },
      {
        quote: 'Life is about making an impact, not making an income.',
        author: 'Kevin Kruse',
      },
      {
        quote:
          "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
        author: 'Michael Jordan',
      },
      {
        quote: 'Every strike brings me closer to the next home run.',
        author: 'Babe Ruth',
      },
      {
        quote:
          'The two most important days in your life are the day you are born and the day you find out why.',
        author: 'Mark Twain',
      },
      {
        quote: "Life shrinks or expands in proportion to one's courage.",
        author: 'Anais Nin',
      },
      {
        quote:
          'When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.',
        author: 'John Lennon',
      },
      {
        quote:
          'Too many of us are not living our dreams because we are living our fears.',
        author: 'Les Brown',
      },
      {
        quote:
          "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
        author: 'Neil Armstrong',
      },
      {
        quote:
          'Live as if you were to die tomorrow. Learn as if you were to live forever.',
        author: 'Mahatma Gandhi',
      },
      {
        quote:
          "If you live long enough, you'll make mistakes. But if you learn from them, you'll be a better person.",
        author: 'Bill Clinton',
      },
      {
        quote: 'Life is short, and it is here to be lived.',
        author: 'Kate Winslet',
      },
      {
        quote: 'The longer I live, the more beautiful life becomes.',
        author: 'Frank Lloyd Wright',
      },
      {
        quote: 'Every moment is a fresh beginning.',
        author: 'T.S. Eliot',
      },
      {
        quote: 'When you cease to dream you cease to live.',
        author: 'Malcolm Forbes',
      },
      {
        quote:
          "If you spend your whole life waiting for the storm, you'll never enjoy the sunshine.",
        author: 'Morris West',
      },
      {
        quote: "Don't cry because it's over, smile because it happened.",
        author: 'Dr. Seuss',
      },
      {
        quote:
          "If you can do what you do best and be happy, you're further along in life than most people.",
        author: 'Leonardo DiCaprio',
      },
      {
        quote:
          'We should remember that just as a positive outlook on life can promote good health, so can everyday acts of kindness.',
        author: 'Hillary Clinton',
      },
      {
        quote:
          "Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
        author: 'Mary Kay Ash',
      },
      {
        quote:
          'It is our choices that show what we truly are, far more than our abilities.',
        author: 'J. K. Rowling',
      },
      {
        quote:
          "If you're not stubborn, you'll give up on experiments too soon. And if you're not flexible, you'll pound your head against the wall and you won't see a different solution to a problem you're trying to solve.",
        author: 'Jeff Bezos',
      },
      {
        quote: 'The best way to predict your future is to create it.',
        author: 'Abraham Lincoln',
      },
      {
        quote:
          'You must expect great things of yourself before you can do them.',
        author: 'Michael Jordan',
      },
      {
        quote:
          'Identity is a prison you can never escape, but the way to redeem your past is not to run from it, but to try to understand it, and use it as a foundation to grow.',
        author: 'Jay-Z',
      },
      {
        quote: 'There are no mistakes, only opportunities.',
        author: 'Tina Fey',
      },
      {
        quote:
          "It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you'll do things differently.",
        author: 'Warren Buffett',
      },
      {
        quote:
          'As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others.',
        author: 'Audrey Hepburn',
      },
      {
        quote:
          "Sometimes you can't see yourself clearly until you see yourself through the eyes of others.",
        author: 'Ellen DeGeneres',
      },
      {
        quote:
          'You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.',
        author: 'Mahatma Gandhi',
      },
      {
        quote:
          'All life is an experiment. The more experiments you make, the better.',
        author: 'Ralph Waldo Emerson',
      },
      {
        quote:
          'Here’s to the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes … the ones who see things differently — they’re not fond of rules … You can quote them, disagree with them, glorify or vilify them, but the only thing you can’t do is ignore them because they change things … They push the human race forward, and while some may see them as the crazy ones, we see genius …',
        author: 'Steve Jobs',
      },
      {
        quote:
          'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.',
        author: 'Leonardo Da Vinci',
      },
      {
        quote:
          'Throughout life people will make you mad, disrespect you and treat you bad. But in the end, you’ll thank them both.',
        author: 'Anonymous',
      },
      {
        quote:
          'My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.',
        author: 'Maya Angelou',
      },
      {
        quote:
          'If we don’t change, we don’t grow. If we don’t grow, we aren’t really living.',
        author: 'Gail Sheehy',
      },
      {
        quote:
          'You choose the life you live. If you don’t like it, it’s on you to change it because no one else is going to do it for you.',
        author: 'Kim Kiyosaki',
      },
      {
        quote:
          'You’re only human. You live once and life is wonderful, so eat the damned red velvet cupcake.',
        author: 'Emma Stone',
      },
      {
        quote:
          'A lot of people give up just before they’re about to make it. You know you never know when that next obstacle is going to be the last one.',
        author: 'Chuck Norris',
      },
      {
        quote:
          'Be nice to people on the way up, because you may meet them on the way down.',
        author: 'Jimmy Durante',
      },
      {
        quote:
          'I believe you make your day. You make your life. So much of it is all perception, and this is the form that I built for myself. I have to accept it and work within those compounds, and it’s up to me.',
        author: 'Brad Pitt',
      },
      {
        quote: 'The minute that you’re not learning I believe you’re dead.',
        author: 'Jack Nicholson',
      },
      {
        quote: 'Life’s tough, but it’s tougher when you’re stupid.',
        author: 'John Wayne',
      },
      {
        quote:
          'There’s more to life than basketball. The most important thing is your family and taking care of each other and loving each other no matter what.',
        author: 'Stephen Curry',
      },
      {
        quote: 'Today, you have 100% of your life left.',
        author: 'Tom Landry (Football Quotes)',
      },
      {
        quote: 'Nobody who ever gave his best regretted it.',
        author: 'George Halas',
      },
      {
        quote: 'Make each day your masterpiece.',
        author: 'John Wooden',
      },
      {
        quote:
          'You can’t put a limit on anything. The more you dream, the farther you get.',
        author: 'Michael Phelps',
      },
      {
        quote:
          'To live is the rarest thing in the world. Most people exist, that is all.',
        author: 'Oscar Wilde',
      },
      {
        quote:
          'Life is a journey that must be traveled no matter how bad the roads and accommodations.',
        author: 'Oliver Goldsmith',
      },
      {
        quote:
          'I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself.',
        author: 'Albert Einstein',
      },
      {
        quote: 'Life is a progress, and not a station.',
        author: 'Ralph Waldo Emerson',
      },
      {
        quote: 'Life is what happens when you’re busy making other plans.',
        author: 'John Lennon',
      },
      {
        quote:
          'Too many of us are not living our dreams because we are living our fears.',
        author: 'Les Brown',
      },
      {
        quote:
          "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
        author: 'Neil Armstrong',
      },
      {
        quote:
          'Live as if you were to die tomorrow. Learn as if you were to live forever.',
        author: 'Mahatma Gandhi',
      },
      {
        quote:
          "If you live long enough, you'll make mistakes. But if you learn from them, you'll be a better person.",
        author: 'Bill Clinton',
      },
      {
        quote: 'Life is short, and it is here to be lived.',
        author: 'Kate Winslet',
      },
      {
        quote: 'The longer I live, the more beautiful life becomes.',
        author: 'Frank Lloyd Wright',
      },
      {
        quote: 'Every moment is a fresh beginning.',
        author: 'T.S. Eliot',
      },
      {
        quote: 'When you cease to dream you cease to live.',
        author: 'Malcolm Forbes',
      },
      {
        quote:
          "If you spend your whole life waiting for the storm, you'll never enjoy the sunshine.",
        author: 'Morris West',
      },
      {
        quote: "Don't cry because it's over, smile because it happened.",
        author: 'Dr. Seuss',
      },
      {
        quote:
          "If you can do what you do best and be happy, you're further along in life than most people.",
        author: 'Leonardo DiCaprio',
      },
      {
        quote:
          'We should remember that just as a positive outlook on life can promote good health, so can everyday acts of kindness.',
        author: 'Hillary Clinton',
      },
      {
        quote:
          "Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
        author: 'Mary Kay Ash',
      },
      {
        quote:
          'It is our choices that show what we truly are, far more than our abilities.',
        author: 'J. K. Rowling',
      },
      {
        quote:
          "If you're not stubborn, you'll give up on experiments too soon. And if you're not flexible, you'll pound your head against the wall and you won't see a different solution to a problem you're trying to solve.",
        author: 'Jeff Bezos',
      },
      {
        quote: 'The best way to predict your future is to create it.',
        author: 'Abraham Lincoln',
      },
      {
        quote:
          'You must expect great things of yourself before you can do them.',
        author: 'Michael Jordan',
      },
      {
        quote:
          'Identity is a prison you can never escape, but the way to redeem your past is not to run from it, but to try to understand it, and use it as a foundation to grow.',
        author: 'Jay-Z',
      },
      {
        quote: 'There are no mistakes, only opportunities.',
        author: 'Tina Fey',
      },
      {
        quote:
          "It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you'll do things differently.",
        author: 'Warren Buffett',
      },
      {
        quote:
          'As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others.',
        author: 'Audrey Hepburn',
      },
      {
        quote:
          "Sometimes you can't see yourself clearly until you see yourself through the eyes of others.",
        author: 'Ellen DeGeneres',
      },
      {
        quote:
          'You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.',
        author: 'Mahatma Gandhi',
      },
      {
        quote:
          'All life is an experiment. The more experiments you make, the better.',
        author: 'Ralph Waldo Emerson',
      },
      {
        quote:
          'Here’s to the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes … the ones who see things differently — they’re not fond of rules … You can quote them, disagree with them, glorify or vilify them, but the only thing you can’t do is ignore them because they change things … They push the human race forward, and while some may see them as the crazy ones, we see genius …',
        author: 'Steve Jobs',
      },
      {
        quote:
          'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.',
        author: 'Leonardo Da Vinci',
      },
      {
        quote:
          'Throughout life people will make you mad, disrespect you and treat you bad. But in the end, you’ll thank them both.',
        author: 'Anonymous',
      },
      {
        quote:
          'My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.',
        author: 'Maya Angelou',
      },
      {
        quote:
          'If we don’t change, we don’t grow. If we don’t grow, we aren’t really living.',
        author: 'Gail Sheehy',
      },
      {
        quote:
          'You choose the life you live. If you don’t like it, it’s on you to change it because no one else is going to do it for you.',
        author: 'Kim Kiyosaki',
      },
      {
        quote:
          'You’re only human. You live once and life is wonderful, so eat the damned red velvet cupcake.',
        author: 'Emma Stone',
      },
      {
        quote:
          'A lot of people give up just before they’re about to make it. You know you never know when that next obstacle is going to be the last one.',
        author: 'Chuck Norris',
      },
      {
        quote:
          'Be nice to people on the way up, because you may meet them on the way down.',
        author: 'Jimmy Durante',
      },
      {
        quote:
          'I believe you make your day. You make your life. So much of it is all perception, and this is the form that I built for myself. I have to accept it and work within those compounds, and it’s up to me.',
        author: 'Brad Pitt',
      },
      {
        quote: 'The minute that you’re not learning I believe you’re dead.',
        author: 'Jack Nicholson',
      },
      {
        quote: 'Life’s tough, but it’s tougher when you’re stupid.',
        author: 'John Wayne',
      },
      {
        quote:
          'There’s more to life than basketball. The most important thing is your family and taking care of each other and loving each other no matter what.',
        author: 'Stephen Curry',
      },
      {
        quote: 'Today, you have 100% of your life left.',
        author: 'Tom Landry (Football Quotes)',
      },
      {
        quote: 'Nobody who ever gave his best regretted it.',
        author: 'George Halas',
      },
      {
        quote: 'Make each day your masterpiece.',
        author: 'John Wooden',
      },
      {
        quote:
          'You can’t put a limit on anything. The more you dream, the farther you get.',
        author: 'Michael Phelps',
      },
      {
        quote:
          'To live is the rarest thing in the world. Most people exist, that is all.',
        author: 'Oscar Wilde',
      },
      {
        quote:
          'Life is a journey that must be traveled no matter how bad the roads and accommodations.',
        author: 'Oliver Goldsmith',
      },
      {
        quote:
          'I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself.',
        author: 'Albert Einstein',
      },
      {
        quote: 'Life is a progress, and not a station.',
        author: 'Ralph Waldo Emerson',
      },
      {
        quote: 'Life is what happens when you’re busy making other plans.',
        author: 'John Lennon',
      },
      {
        quote: 'The only way to do great work is to love what you do.',
        author: 'Steve Jobs',
      },
      {
        quote: 'In the middle of difficulty lies opportunity.',
        author: 'Albert Einstein',
      },
      {
        quote: "Believe you can and you're halfway there.",
        author: 'Theodore Roosevelt',
      },
      {
        quote:
          'The future belongs to those who believe in the beauty of their dreams.',
        author: 'Eleanor Roosevelt',
      },
      {
        quote:
          'Success is not final, failure is not fatal: It is the courage to continue that counts.',
        author: 'Winston Churchill',
      },
      {
        quote:
          'Happiness is not something ready-made. It comes from your own actions.',
        author: 'Dalai Lama',
      },
      {
        quote:
          'The only limit to our realization of tomorrow will be our doubts of today.',
        author: 'Franklin D. Roosevelt',
      },
      {
        quote: 'The best way to predict the future is to create it.',
        author: 'Peter Drucker',
      },
      {
        quote: 'The purpose of our lives is to be happy.',
        author: 'Dalai Lama',
      },
      {
        quote:
          'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        author: 'Nelson Mandela',
      },
      {
        quote:
          'Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.',
        author: 'Lao-Tze',
      },
      {
        quote:
          'When we do the best we can, we never know what miracle is wrought in our life or the life of another.',
        author: 'Helen Keller',
      },
      {
        quote: 'The healthiest response to life is joy.',
        author: 'Deepak Chopra',
      },
      {
        quote:
          'Life is like a coin. You can spend it any way you wish, but you only spend it once.',
        author: 'Lillian Dickson',
      },
      {
        quote:
          "The best portion of a good man's life is his little nameless, unencumbered acts of kindness and of love.",
        author: 'Wordsworth',
      },
      {
        quote:
          "In three words I can sum up everything I've learned about life: It goes on.",
        author: 'Robert Frost',
      },
      {
        quote:
          'Life is ten percent what happens to you and ninety percent how you respond to it.',
        author: 'Charles Swindoll',
      },
      {
        quote: 'Keep calm and carry on.',
        author: 'Winston Churchill',
      },
      {
        quote:
          'Maybe that’s what life is… a wink of the eye and winking stars.',
        author: 'Jack Kerouac',
      },
      {
        quote: 'Life is a flower of which love is the honey.',
        author: 'Victor Hugo',
      },
      {
        quote:
          'Keep smiling, because life is a beautiful thing and there’s so much to smile about.',
        author: 'Marilyn Monroe',
      },
      {
        quote:
          'Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.',
        author: 'Buddha',
      },
      {
        quote:
          'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.',
        author: 'Dr. Seuss',
      },
      {
        quote:
          'Good friends, good books, and a sleepy conscience: this is the ideal life.',
        author: 'Mark Twain',
      },
      {
        quote: 'Life would be tragic if it weren’t funny.',
        author: 'Stephen Hawking',
      },
      {
        quote: 'Live in the sunshine, swim the sea, drink the wild air.',
        author: 'Ralph Waldo Emerson',
      },
      {
        quote: 'The greatest pleasure of life is love.',
        author: 'Euripides',
      },
      {
        quote: 'Life is what we make it, always has been, always will be.',
        author: 'Grandma Moses',
      },
      {
        quote: 'Life’s tragedy is that we get old too soon and wise too late.',
        author: 'Benjamin Franklin',
      },
      {
        quote: 'Life is about making an impact, not making an income.',
        author: 'Kevin Kruse',
      },
      {
        quote: 'Life is short, and it is up to you to make it sweet.',
        author: 'Sarah Louise Delany',
      },
      {
        quote: 'Life is either a daring adventure or nothing at all.',
        author: 'Helen Keller',
      },
      {
        quote: 'The purpose of our lives is to be happy.',
        author: 'Dalai Lama',
      },
      {
        quote:
          'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        author: 'Nelson Mandela',
      },
      {
        quote:
          'Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.',
        author: 'Lao-Tze',
      },
      {
        quote:
          'When we do the best we can, we never know what miracle is wrought in our life or the life of another.',
        author: 'Helen Keller',
      },
      {
        quote: 'The healthiest response to life is joy.',
        author: 'Deepak Chopra',
      },
      {
        quote:
          'Life is like a coin. You can spend it any way you wish, but you only spend it once.',
        author: 'Lillian Dickson',
      },
      {
        quote:
          "The best portion of a good man's life is his little nameless, unencumbered acts of kindness and of love.",
        author: 'Wordsworth',
      },
      {
        quote:
          "In three words I can sum up everything I've learned about life: It goes on.",
        author: 'Robert Frost',
      },
      {
        quote:
          'Life is ten percent what happens to you and ninety percent how you respond to it.',
        author: 'Charles Swindoll',
      },
      {
        quote: 'Keep calm and carry on.',
        author: 'Winston Churchill',
      },
      {
        quote:
          'Maybe that’s what life is… a wink of the eye and winking stars.',
        author: 'Jack Kerouac',
      },
      {
        quote: 'Life is a flower of which love is the honey.',
        author: 'Victor Hugo',
      },
      {
        quote:
          'Keep smiling, because life is a beautiful thing and there’s so much to smile about.',
        author: 'Marilyn Monroe',
      },
      {
        quote:
          'Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.',
        author: 'Buddha',
      },
      {
        quote:
          'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.',
        author: 'Dr. Seuss',
      },
      {
        quote:
          'Good friends, good books, and a sleepy conscience: this is the ideal life.',
        author: 'Mark Twain',
      },
      {
        quote: 'Life would be tragic if it weren’t funny.',
        author: 'Stephen Hawking',
      },
      {
        quote: 'Live in the sunshine, swim the sea, drink the wild air.',
        author: 'Ralph Waldo Emerson',
      },
      {
        quote: 'The greatest pleasure of life is love.',
        author: 'Euripides',
      },
      {
        quote: 'Life is what we make it, always has been, always will be.',
        author: 'Grandma Moses',
      },
      {
        quote: 'Life’s tragedy is that we get old too soon and wise too late.',
        author: 'Benjamin Franklin',
      },
      {
        quote: 'Life is about making an impact, not making an income.',
        author: 'Kevin Kruse',
      },
      {
        quote: 'Life is short, and it is up to you to make it sweet.',
        author: 'Sarah Louise Delany',
      },
      {
        quote: 'Life is either a daring adventure or nothing at all.',
        author: 'Helen Keller',
      },
      {
        quote: 'Life is what we make it, always has been, always will be.',
        author: 'Grandma Moses',
      },
      {
        quote: 'Life’s tragedy is that we get old too soon and wise too late.',
        author: 'Benjamin Franklin',
      },
      {
        quote: 'Life is about making an impact, not making an income.',
        author: 'Kevin Kruse',
      },
      {
        quote: 'Life is short, and it is up to you to make it sweet.',
        author: 'Sarah Louise Delany',
      },
      {
        quote: 'Life is either a daring adventure or nothing at all.',
        author: 'Helen Keller',
      },
    ];

    documents.forEach((document) => {
      const documentRef = collection.doc();
      batch.set(documentRef.ref, document);
    });

    batch
      .commit()
      .then(() => {
        console.log('Documents added to the Quotes collection successfully.');
      })
      .catch((error) => {
        console.error(
          'Error adding documents to the Quotes collection:',
          error
        );
      });
  }

  addPoemsToCollection(): void {
    const collectionName = 'Poems';
    const collection = this.firestore.collection<any>(collectionName);
    const batch = this.firestore.firestore.batch();

    const documents = [
      {
        title: 'The Road Not Taken',
        poet: 'Robert Frost',
        lines: [
          'Two roads diverged in a yellow wood',
          'And sorry I could not travel both',
          'And be one traveler, long I stood',
          'And looked down one as far as I could',
          'To where it bent in the undergrowth;',
          'Then took the other, as just as fair,',
          'And having perhaps the better claim,',
          'Because it was grassy and wanted wear;',
          'Though as for that the passing there,',
          'Had worn them really about the same,',
          'And both that morning equally lay',
          'In leaves no step had trodden black.',
          'Oh, I kept the first for another day!',
          'Yet knowing how way leads on to way,',
          'I doubted if I should ever come back.',
          'I shall be telling this with a sigh',
          'Somewhere ages and ages hence:',
          'Two roads diverged in a wood, and I—',
          'I took the one less traveled by,',
          'And that has made all the difference.',
        ],
      },
      {
        title: 'Sonnet 18',
        poet: 'William Shakespeare',
        lines: [
          "Shall I compare thee to a summer's day?",
          'Thou art more lovely and more temperate:',
          'Rough winds do shake the darling buds of May,',
          "And summer's lease hath all too short a date:",
          'Sometime too hot the eye of heaven shines,',
          'And often is his gold complexion dimmed;',
          'And every fair from fair sometime declines,',
          "By chance or nature's changing course untrimmed;",
          'But thy eternal summer shall not fade',
          'Nor lose possession of that fair thou owest;',
          'Nor shall Death brag thou wanderest in his shade,',
          'When in eternal lines to time thou growest:',
          'So long as men can breathe or eyes can see,',
          'So long lives this, and this gives life to thee.',
        ],
      },
      {
        title: 'I Carry Your Heart with Me',
        poet: 'E.E. Cummings',
        lines: [
          'i carry your heart with me(i carry it in',
          'my heart)i am never without it(anywhere',
          'i go you go,my dear;and whatever is done',
          'by only me is your doing,my darling)',
          'i fear',
          'no fate(for you are my fate,my sweet)i want',
          'no world(for beautiful you are my world,my true)',
          'and it’s you are whatever a moon has always meant',
          'and whatever a sun will always sing is you',
          'here is the deepest secret nobody knows',
          '(here is the root of the root and the bud of the bud',
          'and the sky of the sky of a tree called life;which grows',
          'higher than soul can hope or mind can hide)',
          "and this is the wonder that's keeping the stars apart",
          'i carry your heart(i carry it in my heart)',
        ],
      },
      {
        title: 'The Raven',
        poet: 'Edgar Allan Poe',
        lines: [
          'Once upon a midnight dreary, while I pondered, weak and weary,',
          'Over many a quaint and curious volume of forgotten lore—',
          'While I nodded, nearly napping, suddenly there came a tapping,',
          'As of some one gently rapping, rapping at my chamber door.',
          '"’Tis some visitor," I muttered, "tapping at my chamber door—',
          'Only this and nothing more."',
          'Ah, distinctly I remember it was in the bleak December;',
          'And each separate dying ember wrought its ghost upon the floor.',
          'From my books surcease of sorrow—sorrow for the lost Lenore—',
          'For the rare and radiant maiden whom the angels name Lenore—',
          'Nameless here for evermore.',
          'And the silken, sad, uncertain rustling of each purple curtain',
          'Thrilled me—filled me with fantastic terrors never felt before;',
          'So that now, to still the beating of my heart, I stood repeating',
          '"’Tis some visitor entreating entrance at my chamber door—',
          'Some late visitor entreating entrance at my chamber door;—',
          'This it is and nothing more."',
        ],
      },
      {
        title: 'If',
        poet: 'Rudyard Kipling',
        lines: [
          'If you can keep your head when all about you',
          'Are losing theirs and blaming it on you,',
          'If you can trust yourself when all men doubt you,',
          'But make allowance for their doubting too;',
          'If you can wait and not be tired by waiting,',
          'Or being lied about, don’t deal in lies,',
          'Or being hated, don’t give way to hating,',
          'And yet don’t look too good, nor talk too wise:',
          'If you can dream—and not make dreams your master;',
          'If you can think—and not make thoughts your aim;',
          'If you can meet with Triumph and Disaster',
          'And treat those two impostors just the same;',
          'If you can bear to hear the truth you’ve spoken',
          'Twisted by knaves to make a trap for fools,',
          'Or watch the things you gave your life to, broken,',
          'And stoop and build ’em up with worn-out tools:',
          'If you can make one heap of all your winnings',
          'And risk it on one turn of pitch-and-toss,',
          'And lose, and start again at your beginnings',
          'And never breathe a word about your loss;',
          'If you can force your heart and nerve and sinew',
          'To serve your turn long after they are gone,',
          'And so hold on when there is nothing in you',
          "Except the Will which says to them: 'Hold on!'",
          'If you can talk with crowds and keep your virtue,',
          'Or walk with Kings—nor lose the common touch,',
          'If neither foes nor loving friends can hurt you,',
          'If all men count with you, but none too much;',
          'If you can fill the unforgiving minute',
          'With sixty seconds’ worth of distance run,',
          'Yours is the Earth and everything that’s in it,',
          'And—which is more—you’ll be a Man, my son!',
        ],
      },
      {
        title: 'The New Colossus',
        poet: 'Emma Lazarus',
        lines: [
          'Not like the brazen giant of Greek fame,',
          'With conquering limbs astride from land to land;',
          'Here at our sea-washed, sunset gates shall stand',
          'A mighty woman with a torch, whose flame',
          'Is the imprisoned lightning, and her name',
          'Mother of Exiles. From her beacon-hand',
          'Glows world-wide welcome; her mild eyes command',
          'The air-bridged harbor that twin cities frame.',
          '“Keep, ancient lands, your storied pomp!” cries she',
          'With silent lips. “Give me your tired, your poor,',
          'Your huddled masses yearning to breathe free,',
          'The wretched refuse of your teeming shore.',
          'Send these, the homeless, tempest-tost to me,',
          'I lift my lamp beside the golden door!”',
        ],
      },
      {
        title: 'Because I could not stop for Death',
        poet: 'Emily Dickinson',
        lines: [
          'Because I could not stop for Death,',
          'He kindly stopped for me;',
          'The carriage held but just ourselves',
          'And Immortality.',
        ],
      },
      {
        title: 'Kubla Khan',
        poet: 'Samuel Taylor Coleridge',
        lines: [
          'And all should cry, Beware! Beware!',
          'His flashing eyes, his floating hair!',
          'Weave a circle round him thrice,',
          'And close your eyes with holy dread',
          'For he on honey-dew hath fed,',
          'And drunk the milk of Paradise.',
        ],
      },
      {
        title: 'The Second Coming',
        poet: 'William Butler Yeats',
        lines: [
          'Turning and turning in the widening gyre',
          'The falcon cannot hear the falconer;',
          'Things fall apart; the centre cannot hold;',
          'Mere anarchy is loosed upon the world,',
          'The blood-dimmed tide is loosed, and everywhere',
          'The ceremony of innocence is drowned;',
          'The best lack all conviction, while the worst',
          'Are full of passionate intensity.',
        ],
      },
      {
        title: 'The Lady of Shalott',
        poet: 'Alfred, Lord Tennyson',
        lines: [
          'Willows whiten, aspens shiver.',
          'The sunbeam showers break and quiver',
          'In the stream that runneth ever',
          'By the island in the river',
          'Flowing down to Camelot.',
          'Four gray walls, and four gray towers',
          'Overlook a space of flowers,',
          'And the silent isle imbowers',
          'The Lady of Shalott.',
        ],
      },
      {
        title: 'She Walks in Beauty',
        poet: 'Lord Byron',
        lines: [
          'She walks in beauty, like the night',
          'Of cloudless climes and starry skies;',
          'And all that’s best of dark and bright',
          'Meet in her aspect and her eyes;',
          'Thus mellowed to that tender light',
          'Which heaven to gaudy day denies.',
        ],
      },
      {
        title: 'O Captain! My Captain!',
        poet: 'Walt Whitman',
        lines: [
          'But O heart! heart! heart!',
          'O the bleeding drops of red,',
          'Where on the deck my Captain lies,',
          'Fallen cold and dead.',
          'O Captain! my Captain! rise up and hear the bells;',
          'Rise up—for you the flag is flung—for you the bugle trills;',
          'For you bouquets and ribbon’d wreaths—for you the shores a-crowding;',
          'For you they call, the swaying mass, their eager faces turning.',
        ],
      },
      {
        title: 'I Have a Rendezvous With Death',
        poet: 'Alan Seeger',
        lines: [
          'I have a rendezvous with Death',
          'At some disputed barricade',
          'When Spring comes back with rustling shade',
          'And apple blossoms fill the air.',
          'I have a rendezvous with Death',
          'When Spring brings back blue days and fair',
        ],
      },
      {
        title: "I'm nobody! Who are you?",
        poet: 'Emily Dickinson',
        lines: [
          "I'm nobody! Who are you?",
          'Are you nobody, too?',
          "Then there's a pair of us — don't tell!",
          "They'd banish us, you know.",
          'How dreary to be somebody!',
          'How public, like a frog',
          'To tell your name the livelong day',
          'To an admiring bog!',
        ],
      },
      {
        title: 'Ode to a Nightingale',
        poet: 'John Keats',
        lines: [
          'Away! away! for I will fly to thee,',
          'Not charioted by Bacchus and his pards,',
          'But on the viewless wings of Poesy,',
          'Though the dull brain perplexes and retards:',
          'Already with thee! tender is the night,',
          'And haply the Queen-Moon is on her throne,',
          'Clustered around by all her starry Fays;',
          'But here there is no light,',
          'Save what from heaven is with the breezes blown',
          'Through verdurous glooms and winding mossy ways.',
        ],
      },
      {
        title: 'The Waste Land',
        poet: 'T.S. Eliot',
        lines: [
          'April is the cruellest month, breeding',
          'Lilacs out of the dead land, mixing',
          'Memory and desire, stirring',
          'Dull roots with spring rain.',
          'Winter kept us warm, covering',
          'Earth in forgetful snow, feeding',
          'A little life with dried tubers.',
        ],
      },
      {
        title: "Paul Revere's Ride",
        poet: 'Henry Wadsworth Longfellow',
        lines: [
          'But mostly he watched with eager search',
          'The belfry tower of the Old North Church,',
          'As it rose above the graves on the hill,',
          'Lonely and spectral and sombre and still.',
          "And lo! as he looks, on the belfry's height",
          'A glimmer, and then a gleam of light!',
          'He springs to the saddle, the bridle he turns,',
          'But lingers and gazes, till full on his sight',
          'A second lamp in the belfry burns.',
        ],
      },
      {
        title: 'The Red Wheelbarrow',
        poet: 'William Carlos Williams',
        lines: [
          'so much depends',
          'upon',
          'a red wheel',
          'barrow',
          'glazed with rain',
          'water',
          'beside the white',
          'chickens',
        ],
      },
      {
        title: 'Fire and Ice',
        poet: 'Robert Frost',
        lines: [
          'Some say the world will end in fire,',
          'Some say in ice.',
          'From what I’ve tasted of desire',
          'I hold with those who favor fire.',
          'But if it had to perish twice,',
          'I think I know enough of hate',
          'To say that for destruction ice',
          'Is also great',
          'And would suffice',
        ],
      },
      {
        title: 'Ozymandias',
        poet: 'Percy Bysshe Shelley',
        lines: [
          '“My name is Ozymandias, king of kings:',
          'Look on my works, ye Mighty, and despair!”',
          'Nothing beside remains. Round the decay',
          'Of that colossal wreck, boundless and bare',
          'The lone and level sands stretch far away.',
        ],
      },
      {
        title: 'We Wear the Mask',
        poet: 'Paul Laurence Dunbar',
        lines: [
          'We wear the mask that grins and lies,',
          'It hides our cheeks and shades our eyes,—',
          'This debt we pay to human guile;',
          'With torn and bleeding hearts we smile,',
          'And mouth with myriad subtleties.',
        ],
      },
    ];

    documents.forEach((document) => {
      const documentRef = collection.doc();
      batch.set(documentRef.ref, document);
    });

    batch
      .commit()
      .then(() => {
        console.log('Documents added to the Poems collection successfully.');
      })
      .catch((error) => {
        console.error('Error adding documents to the Poems collection:', error);
      });
  }
}
