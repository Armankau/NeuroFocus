Rails.application.routes.draw do
  resources :to_do_yearlies
  resources :to_do_monthlies
  resources :to_do_weeklies
  resources :puzzles
  resources :calendars
  resources :scores
  resources :to_dos
  resources :habits
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  #sessions routes
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  #users routes
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  #todo daily routes
  get "/todos", to: "to_dos#index"
  delete "/deleteToDo/:id", to: "to_dos#destroy"
  post "/todo", to: "to_dos#create"

  #todo weekly routes
  get "weeklyToDo", to: "to_do_weeklies#index"
  delete "/deleteToDoWeekly/:id", to: "to_do_weeklies#destroy"
  post "/weeklyToDo", to: "to_do_weeklies#create"

  #todo monthly routes
  get "/to_do_monthlies", to: "to_do_monthlies#index"
  delete "/to_do_monthlies/:id", to: "to_do_monthlies#destroy"
  post "/monthlyToDo", to: "to_do_monthlies#create"

  #todo yearly routes
  get "/to_do_yearlies", to: "to_do_yearlies#index"
  delete "/to_do_yearlies/:id", to: "to_do_yearlies#destroy"

end
