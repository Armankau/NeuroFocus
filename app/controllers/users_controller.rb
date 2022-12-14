class UsersController < ApplicationController
    def create
        user = User.create(create_params)
        if user.valid?
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

    def show
      user = User.find_by(id: session[:user_id])
      if user
        render json: user
      else
        render json: { error: "Not authorized" }, status: :unauthorized
      end
    end


    private
    
      def create_params
        params.permit(:name, :age, :username, :password, :email, :sex)
      end
end