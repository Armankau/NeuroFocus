class ToDosController < ApplicationController
    def index
        todo = ToDo.all
        render json: todo, status: :ok
    end

    def destroy
        todo = ToDo.find(params[:id])
        todo.destroy
        head :no_content
    end

    def create
        todo = ToDo.create(todo_params)
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
