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
end
