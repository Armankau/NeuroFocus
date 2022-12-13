class CalendarSerializer < ActiveModel::Serializer
  attributes :id, :event_date, :event_name, :user
end
