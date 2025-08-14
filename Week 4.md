## Flowchart
Flowchart showing the algorithm for saving an image, video, or tutorial into a folder.
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
