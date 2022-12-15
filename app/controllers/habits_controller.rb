class HabitsController < ApplicationController
    def index
        habits = Habit.all
        render json: habits, status: :ok
    end

    def destroy
        habit = Habit.find(params[:id])
        habit.destroy
        head :no_content
    end


    def create
        habit = Habit.create(habit_params)
        if habit.valid?
          render json: habit, status: :created
        else
          render json: { errors: habit.errors.full_messages }, status: :unprocessable_entity
        end
    end
    
    private
    def habit_params
        params.permit(:name, :user_id, :id)
    end
end
