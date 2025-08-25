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
<br>whats a query

## Database Structure
2 tables, one for the user and one for viewed files. The table with users has the username as the primary key, as well as the user's email, and first and last name. The table with the files has an id for each file saved as the primary key, with the username as the foreign key which connects the two tables. It also has the date when the file was viewed, the file name, whether the file was saved or not, and any tags the file has, which can be used to customise the user's feed.

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
