Rails.application.routes.draw do
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
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  get "/todos", to: "to_dos#index"
  delete "/deleteToDo/:id", to: "to_dos#destroy"
  post "/todo", to: "to_dos#create"

  get "weeklyToDo", to: "to_do_weeklies#index"
  delete "/deleteToDoWeekly/:id", to: "to_do_weeklies#destroy"

  get "/to_do_monthlies", to: "to_do_monthlies#index"

end
