# AI Golden Record
## Art.Intel. | Sound & Text Project
Xuwen Dong

Ziqi Yan: https://wp.nyu.edu/carpediemlydia/2021/11/15/ai-golden-record/

### Website:
Project: https://ai-golden-record-project.vercel.app/

Github: https://github.com/adalek/sound_text_project_version2

### Description:
After human civilization, artificial intelligence takes over civil evolution. Being created by the former civil owner, human artworks are still highly appreciated by artificial intelligence. However, since humans and AI are existing in different physical structures, they may have different conceptions and interpretations of these masterpieces.

Inheriting the curiosity and the ambition from their former world, artificial intelligence would like to expand their conversations into the universe. 

Having the appreciation towards the prehistorical culture and the ambition to communicate with more extraterrestrial intellectuals, AI launches the new interpretation of the Golden Record.

### Inspiration & Concept:
This project is inspired by NASA Voyager Golden Record Project. Within the original golden record, there are selected images and sounds that represent the life and culture on Earth. In addition to the images and the sound, there are greetings of different languages involved in the record. 
	
Our project is a replication of the Voyager Golden Record, but with an artificial intelligence narrative. The world view of this project takes place in a post-human civilization, in which artificial intelligence takes over the world. However, since artificial intelligence is originally built by humans, AI highly appreciates and respects the cultural legacy of its predecessors. This is why the content of our project is based on the existing masterpieces. We assume that the advance of the artistic creation of humans still cannot be surpassed by artificial intelligence. But AI may interpret them in a different way and would like to disseminate their version of artworks.
	
By processing the artworks using machine learning tools, we would like to discuss the topic of whether future artificial intelligence could develop its consciousness; in this project, we especially focus on artistic creations. Since AI still needs training from the existing human creations, most of its generated works are still human-based. At least this is how we demonstrated in our project. But I think this project can still lead us to think about the following question: will AI be able to pick up its own conscious awareness one day, and create autonomous work? We cannot make a live demonstration through our work, since we bear the identity as humans, anything we consciously command is still human-based. But the future of AI autonomy is still worth imagining. 
Process:


1. Resource Searching	
- Music
We used the original music from the Golden Record, 27 tracks in total. We scratched the audio files down for later processing. 

- Text
For the text, we put the keyword “the most important speeches in history” in the Google search box. We took the first website that showed up, which represented the most relevant one. There are 11 speeches in total. We then searched for the original text of the prominent speeches and copied them into text files (.txt).

2. Resource Processing
- Music
Before processing the music, we transformed the audio files into .wav files.
We used Jukebox for the music training. Since our laptops do not have the capacity for operation, we connected to the lab computer remotely. The music in the original record can be roughly divided into two tracks: (western) classical and ethnical (world music). It was easy to find the famous classical composers in the musician data, but for other music, we used artist as “all” and genre as “folk”; and we put the description of the music as the lyric. We processed all 27 tracks one by one. Each track sample the first five seconds of the original music and generated a 20-second-long audio file. 

- Text
Having the text files ready, we did a few sampling experiments in GPT-2. The experiments’ detail is as follows:
All experiments are trained under the 124M model.

Source No.1, steps 100.

Source No.1, steps 500.

Source No.1 to No.5, steps 200.

Source No.1 to No.11 (all-in), steps 200.

After generating the text (Link), we read and resembled them into a speech that makes more sense as a speech. We also used GPT-J-6B to generate the beginning part of the speech. 
Since most of the original speech text we used was concerned about topics closely related to human rights, the final result is also of this kind. We are aware that it is a bit irrelevant for the speech to act as a greeting towards the extraterritorial beings, but we decided to keep the speech this way. It is the brainchild of all human wisdom, which can be regarded as the highest development of speech.

3. Web building
We took reference to the NASA golden record website, and inherited its style in presenting the golden record’s content. 

To have a better demonstration, we used the style of the disc player for the music part. We also used the wave.js library to visualize the sound wave. However, we struggled a little bit for alignment when putting the library onto the website. It affected the component’s layout a lot. We also kept the description on the side for the viewer’s acknowledgment.

Besides the sound and the speech, there are also images representing humanity on the original record. Therefore, we also incorporated the images that we have generated in our previous projects onto our website. 
 
### Tool & Resource:

- Tools:
GPT-2 (Collab)
GPT-J-6B
OpenAI Jukebox - Mangtronix Edition
Wave.js

- Resources:

Voyager Golden Record: https://voyager.jpl.nasa.gov/golden-record/

The most important speeches in history: https://theculturetrip.com/europe/united-kingdom/articles/11-of-history-s-most-influential-speeches/

*The original text of each speech:*

01Abolition Speech, William Wilberforce https://www.st-andrews-anglican-calgary.ca/downloads/WilberforceSpeech1789.pdf

02‘Freedom or Death’, Emmeline Pankhurst https://www.theguardian.com/theguardian/2007/apr/27/greatspeeches

03‘The Gettysburg Address’, Abraham Lincoln http://www.abrahamlincolnonline.org/lincoln/speeches/gettysburg.htm

04‘Give Me Blood and I Will Give You Freedom’, Subhas Chandra Bose https://www.dnaindia.com/india/report-full-text-of-netaji-s-historic-give-me-blood-and-i-shall-give-you-freedom-speech-2169165

05‘Give Me Liberty or Give Me Death’, Patrick Henry https://liberalarts.utexas.edu/coretexts/_files/resources/texts/1775%20Patrick%20Henry%20Liberty%20or%20Death.pdf

06‘I Am Prepared To Die’, Nelson Mandela https://almeida.co.uk/index.php?option=com_docman&view=download&alias=750-i-am-prepared-to-die-teaching-resource&category_slug=participate&Itemid=133

07‘I Have A Dream’, Martin Luther King https://www.americanrhetoric.com/speeches/mlkihaveadream.htm

08‘Quit India’, Mahatma Gandhi https://en.wikipedia.org/wiki/Quit_India_speech

09‘Speech at Clermont’, Pope Urban II https://www.donparrish.com/EssayPopeUrban.html

10‘The Third Philippic’, Demosthenes http://www.emersonkent.com/speeches/the_third_philippic.htm

11‘We Shall Fight on the Beaches’, Winston Churchill https://winstonchurchill.org/resources/speeches/1940-the-finest-hour/we-shall-fight-on-the-beaches/

NASA Voyager Golden Record Playlist (Spotify): https://open.spotify.com/playlist/1awkBQi0DpBPwGArMwSSI9?si=8fce593dfde142db

Record turntable style: https://www.istockphoto.com/photo/old-vinyl-player-80s-synth-wave-and-retrowave-glowing-circle-futuristic-aesthetics-gm1206894567-348257046

Useful P5 example: https://editor.p5js.org/guillaume/sketches/ZxucOVYD3

Technology Worship (visual project): https://visual-project.vercel.app/

