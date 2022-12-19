puts "seeding user"

User_1 = User.create(name: "Armandeep Kaur", age: 21, username: "Arman", password: "password", email: "akaur@ucsd.edu", sex: "female", score:0)
User_2 = User.create(name: "Rajdeep Kaur", age: 17, username: "Raj", password: "password", email: "akaur@ucsd.edu", sex: "female", score: 5)


puts "seeding habit"
Habit.create(name: "exercise", user: User_2, completed: false)
Habit.create(name: "Jog", user: User_1, completed: false)
Habit.create(name: "exercise", user: User_2, completed: false)
Habit.create(name: "Jog", user: User_1, completed: false)
Habit.create(name: "exercise", user: User_2, completed: false)
Habit.create(name: "Jog", user: User_1, completed: false)

puts "seeding todo"
ToDo.create(name: "Clean Room", user: User_1, task_done: true)
ToDo.create(name: "Clean Kitchen", user: User_2, task_done: false)

puts "seeding todo weekly"
ToDoWeekly.create(name: "Make appt", user: User_1)

puts "seeding todo montly"
ToDoMonthly.create(name: "nails appt", user: User_1)

puts "seeding todo montly"
ToDoYearly.create(name: "nails appt", user: User_1)

