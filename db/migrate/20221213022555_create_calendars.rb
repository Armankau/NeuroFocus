class CreateCalendars < ActiveRecord::Migration[7.0]
  def change
    create_table :calendars do |t|
      t.string :event_name
      t.string :event_date
      t.belongs_to :user
      t.timestamps
    end
  end
end
