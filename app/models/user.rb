class User < ApplicationRecord
    has_secure_password
    has_many :habits
    has_many :scores
    has_many :to_dos
    has_many :calendars
    has_many :puzzles
end
