class CreateToDoMonthlies < ActiveRecord::Migration[7.0]
  def change
    create_table :to_do_monthlies do |t|
      t.string :name
      t.belongs_to :user
      t.timestamps
    end
  end
end
