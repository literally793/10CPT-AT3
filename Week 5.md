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
### Query 1
![alt text](<Screenshot 2025-08-24 at 10.09.04.png>)
This query can be used to see the number of files saved on a certain date.
### Query 2
![alt text](<Screenshot 2025-08-24 at 10.29.11.png>)
This query can be used to show patterns of which file are saved by users.
### Query 3
![alt text](<Screenshot 2025-08-24 at 10.30.28.png>)
This query can be used to show specific tags users have saved.
### Query 4
![alt text](<Screenshot 2025-08-24 at 10.31.40.png>)
The select from query can be used to gather the files which users saved.
### Query 5
The between query can be used to find the number of files saved by users during a specific period of time.
