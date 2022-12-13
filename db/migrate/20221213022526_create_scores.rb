class CreateScores < ActiveRecord::Migration[7.0]
  def change
    create_table :scores do |t|
      t.integer :daily_score
      t.integer :monthly_score
      t.integer :weekly_score
      t.integer :yearly_score
      t.belongs_to :user
      t.timestamps
    end
  end
end
