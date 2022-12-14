class ToDoWeekliesController < ApplicationController
    def index
        todo = ToDoWeekly.all
        render json: todo, status: :ok
    end

end
