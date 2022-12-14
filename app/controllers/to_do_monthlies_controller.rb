class ToDoMonthliesController < ApplicationController
    def index
        todo = ToDoMonthly.all
        render json: todo, status: :ok
    end
    def destroy
        weekly = ToDoMonthly.find(params[:id])
        weekly.destroy
        head :no_content
    end
end
