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

    def update
        habit = Habit.find(params[:id])
        if habit
          habit.update(habit_params)
          render json: habit
        else
          render json: { error: "Habit not found" }, status: :not_found
        end
     end
    
    private
    def habit_params
        params.permit(:name, :user_id, :id, :completed)
    end
end
