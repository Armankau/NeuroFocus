puts "seeding user"

User_1 = User.create(name: "Armandeep Kaur", age: 21, username: "Arman", password: "password", email: "akaur@ucsd.edu", sex: "female")
User_2 = User.create(name: "Rajdeep Kaur", age: 17, username: "Raj", password: "password", email: "akaur@ucsd.edu", sex: "female")


puts "seeding score"
Score.create(daily_score: 10, monthly_score: 20, weekly_score: 11, yearly_score: 40, user: User_1)
Score.create(daily_score: 10, monthly_score: 20, weekly_score: 11, yearly_score: 40, user: User_2)

puts "seeding habit"
Habit.create(name: "exercise", user: User_2 )
Habit.create(name: "Jog", user: User_1 )

puts "seeding todo"
ToDo.create(name: "Clean Room", user: User_1, task_done: true)
ToDo.create(name: "Clean Kitchen", user: User_2, task_done: false)

puts "seeding todo weekly"
ToDoWeekly.create(name: "Make appt", user: User_1)

puts "seeding todo montly"
ToDoMonthly.create(name: "nails appt", user: User_1)