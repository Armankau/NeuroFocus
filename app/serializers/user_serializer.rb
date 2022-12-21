class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :username, :email, :sex, :score, :image
end
