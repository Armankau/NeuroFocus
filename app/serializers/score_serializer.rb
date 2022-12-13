class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :daily_score, :monthly_score, :weekly_score, :yearly_score, :user
end
