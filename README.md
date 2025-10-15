# 10CPT-AT3

## Week 1

## Project Description
Artboard allows users to be able to browse and search for images or videos that are stored in the app's database, as well as communicate with other users. This platform is targeted towards an art community, and the purpose of it is to make it easier for people to find tutorials, videos, or reference images in one place. Users will be able to save videos or images into folders, and revisit them later, and will also be able to send images or videos to other users in the messages component of the app.

## Functional and Non-Functional Requirements
### Functional Requirements
- Users should be able to log in with username / email and password.
- Users are able to see images / videos they have saved in folders.
- Users are able to see their messages with other users.
- Users are able to watch videos and view images on the app.
- Users can set folders and their profile to be public or private.
- Users are able to add images or videos.

### Non-Functional Requirements
- The app is aesthetically pleasing.
- The app should be easy to use for first time users.
- The app should be able to work smoothly.
- Buttons and links in the app work properly.
- Functions are carried out quickly (under 2 seconds).

## Week 2

## Best Practice
- The colour palette should be kept the same throughout the entire website for consistency.
- The fonts / typography should also be kept consistent, using only a few fonts to establish the hierarchy of the site.
- The icons should be consistent, and icons could be made bold if the user is on that page.
- Features like the navigation bar should be placed in the same spot on the screen.
- Spacing and margins should be comfortable to look at, so margins aren't too large or too small.
- The colour palette aims to make the site seem welcoming, and to further increase the sense of friendliness, all the buttons of the site would have rounded corners.
- The images should be high quailty. 

## Navigation
The navigation bar is kept at the bottom of the screen, and the main features of the site can be found there, like the search page, messages page, and profile page. The page for users to add elements to the site is also kept in the navigation bar for easy access.

## Hierarchy
To differentiate the hierarchy, the heading fonts would be Bodoni Moda, and other smaller texts would be in Montserrat.
- for example, in the profile page, the number of followers / following would be in Bodoni Moda, and the words 'followers' and 'following' would be in Montserrat.
- parts of the website that require input, like the search bar, and the log in page, the font would be Montserrat.

## Colour Palette
The colour palette should feel welcoming and friendly to the user, and there should be a colour contrast so that the user is able to read things clearly. This design uses neutral and warm colours.
<img width="1473" height="554" alt="Screenshot 2025-07-28 at 19 22 33" src="https://github.com/user-attachments/assets/2126f2cd-7ab5-4969-886c-66c5fcd43c4e" />
| Section | Colour |
| ----------- | ----------- |
| Font | #4C4345 |
| Page Background | #FBFBF2 |
| Typing Parts | #CFD2CD |
| Menu Bar | #E5E6E4 |
| Buttons | #4C4345, #FBFBF2 |
| Icons | #4C4345 |

## Typography
Heading Font: Bodoni Moda

Other Text Font: Montserrat

### Website Design #1
<img width="1120" height="838" alt="Screenshot 2025-07-31 at 12 24 16" src="https://github.com/user-attachments/assets/52ad4619-f128-4259-ab8b-b1f3483ecf7d" />

### Website Wireframe
<img width="1114" height="830" alt="Screenshot 2025-07-31 at 12 24 25" src="https://github.com/user-attachments/assets/664269b0-8619-4ca3-9a61-8cfecafbf9d9" />

## Week 3
## Navigation
The navigation bar is still located at the bottom of the screen like the other design, because most phone apps have it at the bottom. However, the icons have changed to be more simple, and the add button has been made larger because it leads to more functions, like creating a folder, instead of just adding images / tutorials / images to the database.

## Hierarchy
To differentiate the hierarchy, the font for the heading is Comfortaa, the font for other text is Rubik, and certain text is bold. In my design, I made the headings of each page (like log in, search, profile) in the font Comfortaa, and everthing else in Rubik. For dms page, the name of the user is in bold Rubik, and the preview of the conversation is unbolded Rubik, because the name of the user is more important than the contents of the conversation.

## Colour Palette
To maintain a sense of friendliness to the user, the main colours are a pastel green, which is a cool colour, but makes up for it by being soft and light. There is a darker green for contrast. The other set of colours used are a light pink for less important buttons, like the folders in the profile page, and the darker colour to contrast this is a darker shade of pink.

<img width="1437" height="514" alt="Screenshot 2025-08-07 at 09 58 34" src="https://github.com/user-attachments/assets/de54016d-aaa4-4681-8de2-abe588c9bd32" />

| Section | Colour |
| ----------- | ----------- |
| Font | #30463E, #9E7174, #BB8588 |
| Background | #DDE4D8 |
| Button 1 | #416156, #FFF5E8 |
| Button 2 and search bar | #BB8588, #FFF5E8 |
| Menu Bar | #DDE4D8 |
| Icons | #30463E |

## Typography
In my alterate design, I changed the fonts to something different, that I wouldn't normally use, but still keeping the fonts simple and easy to read.

Heading Font: Comfortaa

Other Text Font: Rubik

## Comparing
The main changes I made in my alternate design is keeping the icons and the design more simple, with less complicated and smaller icons, as well as having shadows, like the one from the navigation bar. I also changed the colour palette 

### Alternate Website Design

<img width="893" height="394" alt="Screenshot 2025-08-07 at 16 46 52" src="https://github.com/user-attachments/assets/d415b5f3-a45d-40cb-bb46-eba58a1c1188" />

## Week 4
### Flowchart
The flowchart is of the steps taken by the user when they want to save an image, video, or tutorial.

<img width="1266" height="647" alt="Screenshot 2025-08-14 at 11 37 00" src="https://github.com/user-attachments/assets/a5efe363-bc16-4a9b-9033-e7559e0d78f9" />

## Data Flow
Used image in the data flow, but the same algorithm for data flow can be applied for videos or tutorials.
| Data | Details |
| ----------- | ----------- |
| Input | click on image / video / tutorial |
| Algorithm | 1. the user clicks on an image that they want to save <br> 2. the image the user clicked on is opened in an overlay. <br> 3. the user is given an option to save the image <br> 4. system checks if the image or a similar image has been saved before <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.1 IF the image has been saved previously, THEN direct to pop up, ELSE continue to 'save into folder' page (5) <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.1.1. IF yes, THEN direct to 'save into folder' page (5) <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.1.2. IF no, return to the image opened in an overlay (2) <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.2. IF a similar image has been saved previously, THEN direct to other pop up <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.2.1. IF yes, THEN direct to 'save into folder' page (5) <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.2.2. IF no, return to the image opened in an overlay (2) <br> 5. open 'save into folder' page <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.1. option to make a new folder OR <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.2. save into an existing folder <br> 6. image is saved into chosen folder |
| Output | IF successful, the image /video / tutorial is saved into the folder picked by the user |

## Test Case #1
| Functionality | Testing |
| ----------- | ----------- |
| Test Case ID | #001 |
| Test Case Name | Saving New Image |
| Preconditions | User has to have an account |
| Test Steps | 1. user is trying to save an image <br> 2. select a folder to save image into <br> 3. image is saved in chosen folder |
| Expected Results | The image has been saved into the chosen folder |
| Priority | High priority, as it is one of the main functions of the app (being able to save things) |

## Test Case #2
| Functionality | Testing |
| ----------- | ----------- |
| Test Case ID | #002 |
| Test Case Name | Trying to Save Previously Saved Image |
| Preconditions | User has to have an account <br> User has to be saving an image that has been previously saved in a folder before |
| Test Steps | 1. user is trying to save an image <br> 2. pop up informing user that they are trying to save an image previously saved before <br> 3. user doesn't want to save <br> 4. page returns to the image |
| Expected Results | The image has not been saved into the folder |
| Priority | High priority, as it is one of the main functions of the app (being able to not save things if previously saved) |

## Test Case #3
| Functionality | Testing |
| ----------- | ----------- |
| Test Case ID | #003 |
| Test Case Name | Saving Previously Saved Image |
| Preconditions | User has to have an account <br> User has to be saving an image that has been previously saved in a folder before |
| Test Steps | 1. user is trying to save an image <br> 2. pop up informing user that they are trying to save an image previously saved before <br> 3. user still wants to save image <br> 4. user redirected to 'save into folder' page <br> 5. the image is saved into the chosen folder |
| Expected Results | An image that has been previously saved before is saved again in a folder |
| Priority | High priority, as it is one of the main functions of the app (being able to save images previously saved before) |

# Setting up database stuff (SQL)

## Questions
1. **What data do you want to be stored during the use of your app?**
<br>for login: username, email, first name and last name, for saving things into folders, username, filename (and file type), date saved, whether it was saved or not, and tags
2. **What data do you want displayed on your front end?**
<br>show the user's username, email, first name and last name in their profile, and show the file name and tags in files that they have saved, also found in their profile
3. **What data is related to each other?**
<br>the username is required for the files database, as to create customised feeds, it is important to collect the username and the tags on files that they have saved
4. **What data types should be used for elements in your database?**
<br>the data types will mainly consist of image files, text files, and video files
5. **What queries might you need to write (between and across tables) allowing for good information storage and retrieval?**
<br>queries to show tags user saved, number of files saved on certain dates

## Database Structure
2 tables, one for the user and one for viewed files. The table with users has the username as the primary key, as well as the user's email, and first and last name. The table with the files has an id for each file saved as the primary key, with the username as the foreign key which connects the two tables. It also has the date when the file was viewed, the file name, whether the file was saved or not, and any tags the file has, which can be used to customise the user's feed.
<br><img width="258" height="408" alt="Screenshot 2025-08-25 at 16 06 26" src="https://github.com/user-attachments/assets/fa6f41ab-9961-440a-9caf-acca6ecbe202" />

## Queries
Query 1
<img width="1313" height="775" alt="Screenshot 2025-08-25 at 14 42 05" src="https://github.com/user-attachments/assets/e5380ddc-818c-4af7-a26d-4fc9d83a5217" />
This query can be used to see the number of files saved on a certain date.
___
Query 2
<img width="1324" height="777" alt="Screenshot 2025-08-25 at 14 42 29" src="https://github.com/user-attachments/assets/eb149853-6a3f-4ccc-84ee-ddbf6af3d6de" />
This query can be used to show patterns of which file are saved by users.
___
Query 3
<img width="1322" height="778" alt="Screenshot 2025-08-25 at 14 42 44" src="https://github.com/user-attachments/assets/d93a3386-9c15-4be2-ba08-1254eda3303b" />
This query can be used to show specific tags users have saved.
___
Query 4
<img width="1327" height="777" alt="Screenshot 2025-08-25 at 14 43 01" src="https://github.com/user-attachments/assets/88b4f39d-7724-4552-a834-3808352ffb5a" />
The select from query can be used to gather the files which users saved.
___
Query 5
The between query can be used to find the number of files saved by users during a specific period of time.

## Week 6

Set up the flask and other backend parts of the website, and included getting the web server functional.

## Week 7

### Website Design
Home page <br>
<img width="1682" height="894" alt="PNG image" src="https://github.com/user-attachments/assets/b88aa777-a052-4593-bf5d-2d78785fbb81" />
Messages page <br>
<img width="1675" height="891" alt="PNG image" src="https://github.com/user-attachments/assets/ca87f985-7c49-4de0-a001-7cf3cd055d6b" />
Profile page <br>
<img width="1672" height="897" alt="PNG image" src="https://github.com/user-attachments/assets/6db2d01c-4aa2-4fbb-8023-e77a78c76e33" />

## Week 8

Continued to develop the UI aspects of the web page
Home page
<img width="1676" height="897" alt="Screenshot 2025-09-22 at 14 13 02" src="https://github.com/user-attachments/assets/6e8c6019-fc88-4556-b58f-3f4de49f4677" />
The home page has a scroll function, and the images are interactable, but haven't been linked to a page that allows them to be downloaded or saved to the user profile yet.
Messages page
<img width="1674" height="894" alt="Screenshot 2025-09-22 at 14 13 21" src="https://github.com/user-attachments/assets/0b279208-05a9-45c2-94aa-d8290d9fbdaf" />
The messages block needs to be moved towards the left to be centered, which will be done later on when I refine the UI elements.
Profile page
<img width="1682" height="895" alt="Screenshot 2025-09-22 at 14 14 25" src="https://github.com/user-attachments/assets/4e1706d9-dca7-4a5e-862e-7e80d20e3756" />

## Week 9

Started to connect database to the web page, as well as making interactable elements, like a login page, and working on being able to search in the search bar on the home page, and type and send messages into the messages bar.

Also did the Google Lighthouse report, which came back as mostly 100 for the pages.
<img width="871" height="644" alt="PNG image" src="https://github.com/user-attachments/assets/8a14d8c3-81ad-49b3-98ba-a704ca48dd95" />

## Week 10

Continued to add interactive elements to webpage. Things can be typed into the entering messages bar, and the things typed in shows up on the actual messages chat, however, it gets removed after refreshing the page. Offline functionality was also successfully implemented. I have started to work on the search function, and getting images to show when a key word is entered.

### Lighthouse Report
However, the Lighthouse report for the pages with images (home and gallery) had a lower rating than other pages, which is a problem that needs to be addressed and fixed.
<img width="1120" height="823" alt="Screenshot 2025-09-25 at 11 39 29" src="https://github.com/user-attachments/assets/96c40863-5f88-461b-9c74-a93ee36b820c" />
<img width="1110" height="821" alt="Screenshot 2025-09-25 at 11 39 58" src="https://github.com/user-attachments/assets/3104c9fb-ca26-4c1e-bc9e-8868ffd26440" />
<img width="1120" height="818" alt="Screenshot 2025-09-25 at 11 40 54" src="https://github.com/user-attachments/assets/dd60e08d-f358-40d4-a84f-48d7028ec7d1" />

## Holiday + Week 1 Term 4

In the holidays and the first week of Term 4, I worked on fixing the UI and making it as consistent as I could get it, and making the search bar functional, mainly through javascript. A problem that was encountered there was the search bar entering, and redirected to a 404 page, which was caused by not defining the function perfromSearch properly. Another issue faced was the images not displaying after being searched, which was fixed by making sure the id in ' ' of .getElementById was the same as the other times .getElementById was used.

## Instructions
1. Download files, and open into VSCode.
2. Run Flask.
3. Run python main.py to open the website.

## Notes
Upon clicking the link to the application, user is redirected to the home page, where there's a gallery with 40 photos. Each of the photos can be clicked on and from there, the user is able to view the image and download it if they want to. 
<br>
<br>
For the search bar on the home page, it can be used to search for some key words, such as: landscape, tree, mountain, fog, beach, rock, ocean, waterfall, path, plant, grass, green, tree, nature, pencil, laptop, cloud, warm, metal, valley. There are more listed as tags for each of the images in login.py.
<br>
<br>
However, the search bar has a bug, where the first time you search, it deoesn't work, so you have to search at least two times for the searched images to appear. The home page and the profile page also take a moment to fully load, probably because there are images that have to be loaded in.
<br>
<br>
For the messages page, scroll to the bottom of the page, where there is a typing bar. Things can be typed into it, and once enter is pressed, the thing that was typed in appears in the chat. However, the entered messages aren't saved, so will be removed upon refresh.
<br>
<br>
For the login page, details can be entered into the username and password boxes, however, any username and any password can be used, and after entering the details and logging in, the user is directed to the home page.
