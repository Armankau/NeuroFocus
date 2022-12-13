class PuzzleSerializer < ActiveModel::Serializer
  attributes :id, :puzzle_done, :date, :user
end
