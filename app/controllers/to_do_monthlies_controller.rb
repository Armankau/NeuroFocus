class ToDoMonthliesController < ApplicationController
    def index
        todo = ToDoMonthly.all
        render json: todo, status: :ok
    end
end
