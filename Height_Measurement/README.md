# Height Measurement
Link: https://editor.p5js.org/LydiaYan628/full/-Cxk9G8oh

Height Measurement is an interactive ml5.js sketch that can predict the user’s height. The user needs to stretch their arms as far apart as they can, and make two red circles appear in their hands. Then, by saying “stop”, their measured height will be shown on the webpage. 

Human arm span is similar to their height. Therefore, the height shown on the page is actually the arm span detected by ml5.js using [PoseNet](https://learn.ml5js.org/#/reference/posenet?id=posenet) model. Since the interacting distance may vary from each test, the arm span measurement is mapped with the user’s pupil distance. The pupil distance in this project defaults as 6.3 centimeters, which is the average pupillary distance of adults. While interacting with the PoseNet, the user is not able to control the computer through physical contact, therefore Height Measurement uses [SoundClassifier](https://learn.ml5js.org/#/reference/sound-classifier) to detect and record the user’s intention by listening to the command “stop”. 

The user should make their back, their neck, and the computer webcam vertical to the ground in order to have an accurate measurement.
