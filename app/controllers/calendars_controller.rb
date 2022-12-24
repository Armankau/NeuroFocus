class CalendarsController < ApplicationController

    def index
        events = Calendar.all
        render json: events, status: :ok
    end


    def create
        event = Calendar.create(event_params)
        if event.valid?
          render json: event, status: :created
        else
          render json: { errors: event.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def event_params
        params.permit(:event_date, :event_name, :user_id)
    end

end
