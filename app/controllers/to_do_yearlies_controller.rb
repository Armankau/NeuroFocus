class ToDoYearliesController < ApplicationController
    def index
        todo = ToDoYearly.all
        render json: todo, status: :ok
    end

    def destroy
        weekly = ToDoYearly.find(params[:id])
        weekly.destroy
        head :no_content
    end
end
