class CreateContentParts < ActiveRecord::Migration
  def change
    create_table :content_parts do |t|
      t.string :type
      t.string :file
      t.references :post

      t.timestamps
    end

    add_index :content_parts, :post_id
  end
end
