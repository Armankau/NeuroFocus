class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :username, :email, :sex
end
