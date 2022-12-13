class CreatePuzzles < ActiveRecord::Migration[7.0]
  def change
    create_table :puzzles do |t|
      t.boolean :puzzle_done
      t.string :date 
      t.belongs_to :user
      t.timestamps
    end
  end
end
