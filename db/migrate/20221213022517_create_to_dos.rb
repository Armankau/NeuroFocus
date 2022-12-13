class CreateToDos < ActiveRecord::Migration[7.0]
  def change
    create_table :to_dos do |t|
      t.string :name
      t.belongs_to :user
      t.boolean :task_done
      t.timestamps
    end
  end
end
