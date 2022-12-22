# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_15_205855) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "calendars", force: :cascade do |t|
    t.string "event_name"
    t.string "event_date"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_calendars_on_user_id"
  end

  create_table "habit_dates", force: :cascade do |t|
    t.string "date"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_habit_dates_on_user_id"
  end

  create_table "habits", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id"
    t.integer "completed"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_habits_on_user_id"
  end

  create_table "puzzles", force: :cascade do |t|
    t.boolean "puzzle_done"
    t.string "date"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_puzzles_on_user_id"
  end

  create_table "scores", force: :cascade do |t|
    t.integer "daily_score"
    t.integer "monthly_score"
    t.integer "weekly_score"
    t.integer "yearly_score"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_scores_on_user_id"
  end

  create_table "to_do_monthlies", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_to_do_monthlies_on_user_id"
  end

  create_table "to_do_weeklies", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_to_do_weeklies_on_user_id"
  end

  create_table "to_do_yearlies", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_to_do_yearlies_on_user_id"
  end

  create_table "to_dos", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id"
    t.boolean "task_done"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_to_dos_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.string "image"
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.string "sex"
    t.integer "score"
    t.integer "task_score"
    t.integer "habit_score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
