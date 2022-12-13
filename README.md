ProjectPitch: NeuroFocus is an app designed to improve a person's quality of life. NeuroFocus allows a user to improve their personal lives by being able to focus and improve upon their personal goals.

User Stories:

1. A user can create a new account
2. A user can enter their username, email address, name, age, sex, and password to create said account.
3. A user can login using their username and password
4. A user can add add important events  on their calendar [on the calendar page]
5. A user can create a to do list for the day, week, month, and year on the To Do Page
6. The user gains points for each item they finish on their to do list
7. The user can finish a daily puzzle designed to help improve their focus [on the daily puzzle page]
8. The user gains points for each day they finish the puzzle 
9. A calendar keeps track of all the days the user has finished a puzzle [on the daily puzzle page]
10. A user can create a habits and track them daily [on the Habit Tracker page]
11. A progress bar shows the user's daily progress for each habit [on the Habit Tracker page]
12. A user gains points for working on each habit which can be indicated using a checkmark [on the Habit Tracker page]
13. A user can view their own profile on the profile page
14. The profile shows certain information about the user and the user's high scores.

STRETCH GOAL

15. A user can add a friend by searching their name in a searchbar 
16. A user can view their friend's profile

Models:

1. User
- t.string :name
- t.integer :age
- t.string :username
- t.string :password
- t.string :email
- t.string :sex

2. Habit
- t.string :name
- t.belongs_to :user

3. To-Do
- t.string :name
- t.belongs_to :user

4. Score
- t.integer :daily_score
- t.integer :monthly_score
- t.integer :weekly_score
- t.integer :yearly_score
- t.belongs_to :user

5. Calendar
- t.integer :event_name
- t.string :event_date
- t.belongs_to :user

6. Puzzle
- t.boolean :puzzle_done
- t.string :date
- t.belongs_to :user

APIs:

1. Calendar API-> https://developers.google.com/calendar/api
2. Puzzles API-> https://lichess.org/api#tag/TV/operation/tvChannelGames

Wireframe:

![CreateAccount](https://user-images.githubusercontent.com/110696444/207170080-341be7ab-7155-4d4d-8c89-8cf9a54e6450.png)
![LoginPage](https://user-images.githubusercontent.com/110696444/207170036-a20ef1d7-4cc5-4722-82ff-9bdec17087cb.png)
![Calendar](https://user-images.githubusercontent.com/110696444/207170136-23c70fdd-842f-4fd1-af27-fe2fae528ba9.png)
![To_Do](https://user-images.githubusercontent.com/110696444/207170408-83eeb1d8-7044-47b2-a87e-4ef25dd25435.png)
![IMG_0664](https://user-images.githubusercontent.com/110696444/207170682-bba90fd0-2962-4f3d-96a8-d3033c5a7b99.JPG)
![HabitTracker](https://user-images.githubusercontent.com/110696444/207170745-905a8cb7-bbfd-4f91-8214-c94d168f8a41.png)
![IMG_0660](https://user-images.githubusercontent.com/110696444/207171123-691e59b9-344c-4f70-8482-b9fd9239715d.JPG)
![FriendsProfile](https://user-images.githubusercontent.com/110696444/207171176-7afe735e-0948-42aa-b788-a028a2c41364.png)


