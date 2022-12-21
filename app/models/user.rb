class User < ApplicationRecord
    has_secure_password
    has_many :habits
    has_many :to_dos
    has_many :calendars
    has_many :puzzles
    has_many :to_do_weeklies
    has_many :to_do_monthlies
    has_many :to_do_yearlies

    validates :name, :age, :sex, :image, :username, presence: true
    validates :username, uniqueness: true
    validates :age, numericality: { only_integer: true }
    validates :age, numericality: {greater_than_or_equal_to: 13}
    validates :age, numericality: {less_than_or_equal_to: 110}

end
