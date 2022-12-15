class ToDoYearliesController < ApplicationController
    def index
        todo = ToDoYearly.all
        render json: todo, status: :ok
    end
end
