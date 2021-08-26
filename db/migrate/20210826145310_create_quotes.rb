class CreateQuotes < ActiveRecord::Migration[6.1]
  def change
    create_table :quotes do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :text
      t.integer :likes

      t.timestamps
    end
  end
end
