class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :age
      t.string :image
      t.string :username
      t.string :password_digest 
      t.string :email
      t.string :sex 
      t.integer :score
      t.integer :task_score
      t.integer :habit_score
      t.timestamps
    end
  end
end
