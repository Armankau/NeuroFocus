Rails.application.routes.draw do
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
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
end
