class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :title
      t.string :thumbnail
      t.string :screenshot
      t.string :summary
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
