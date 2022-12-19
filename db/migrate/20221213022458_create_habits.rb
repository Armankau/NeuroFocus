class CreateHabits < ActiveRecord::Migration[7.0]
  def change
    create_table :habits do |t|
      t.string :name
      t.belongs_to :user
      t.integer :completed 
      t.timestamps
    end
  end
end
