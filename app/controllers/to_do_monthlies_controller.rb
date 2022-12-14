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

    def create
        todo = ToDoMonthly.create(todo_params)
        if todo.valid?
          render json: todo, status: :created
        else
          render json: { errors: todo.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
    def todo_params
        params.permit(:name, :user_id)
    end
end
