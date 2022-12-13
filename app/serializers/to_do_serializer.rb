class ToDoSerializer < ActiveModel::Serializer
  attributes :id, :name, :user, :task_done
end
