class UsersController < ApplicationController

    def create
        user = User.create!(create_params)
        if user.valid?
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

    def show
      user = User.find_by(id: session[:user_id])
      if user
        render json: user, status: :ok
      else
        render json: {error: "not authorized"}, status: :unauthorized
      end
    end

    def update
      user = User.find_by(id: session[:user_id])
      if user
        user.update!(update_params)
        render json: user
      else
        render json: { error: "User not found" }, status: :not_found
      end
    end

    private
    def update_params
      params.permit(:score, :username, :name, :age, :sex, :task_score, :habit_score)
    end

    def create_params
      params.permit(:name, :age, :username, :password, :email, :sex, :score, :image, :task_score, :habit_score)
    end

end
