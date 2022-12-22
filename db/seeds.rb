puts "seeding user"

User_1 = User.create(name: "Armandeep Kaur", age: 21, username: "Arman", password: "password", email: "akaur@ucsd.edu", sex: "female", score:0, task_score: 0, habit_score: 0, image: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg")
User_2 = User.create(name: "Rajdeep Kaur", age: 17, username: "Raj", password: "password", email: "akaur@ucsd.edu", sex: "female", score: 5,task_score: 0, habit_score: 0, image: "https://cdn.shopify.com/s/files/1/0850/2114/files/tips_to_help_heighten_senses_480x480.png?v=1624399167")


puts "seeding habit"
Habit.create(name: "exercise", user: User_2, completed: 1)
Habit.create(name: "Jog", user: User_1, completed: 1)
Habit.create(name: "exercise", user: User_2, completed: 2)
Habit.create(name: "Jog", user: User_1, completed: 1)
Habit.create(name: "exercise", user: User_2, completed: 2)
Habit.create(name: "Jog", user: User_1, completed: 1)

puts "seeding todo"
ToDo.create(name: "Clean Room", user: User_1, task_done: true)
ToDo.create(name: "Clean Kitchen", user: User_2, task_done: false)

puts "seeding todo weekly"
ToDoWeekly.create(name: "Make appt", user: User_1)

puts "seeding todo montly"
ToDoMonthly.create(name: "nails appt", user: User_1)

puts "seeding todo montly"
ToDoYearly.create(name: "nails appt", user: User_1)

