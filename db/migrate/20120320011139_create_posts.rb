class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.references :user
      t.text :body_markdown
      t.text :body_html
      t.string :title

      t.timestamps
    end
    add_index :posts, :user_id
  end
end
