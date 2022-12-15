class User < ApplicationRecord
    has_secure_password
    has_many :habits
    has_many :to_dos
    has_many :calendars
    has_many :puzzles
    has_many :to_do_weeklies
    has_many :to_do_monthlies
    has_many :to_do_yearlies
end
