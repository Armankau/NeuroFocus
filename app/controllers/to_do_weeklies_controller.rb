class ToDoWeekliesController < ApplicationController
    def index
        todo = ToDoWeekly.all
        render json: todo, status: :ok
    end

    def destroy
        weekly = ToDoWeekly.find(params[:id])
        weekly.destroy
        head :no_content
    end

end
