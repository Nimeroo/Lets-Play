class AddGenresToGames < ActiveRecord::Migration[6.1]
  def change
    add_column :games, :genres, :text, array: true, default: []
  end
end
