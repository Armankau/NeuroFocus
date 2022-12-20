class HabitSerializer < ActiveModel::Serializer
  attributes :id, :name, :completed, :user
end
