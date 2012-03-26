class AddIsDraftToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :is_draft, :boolean
    add_column :posts, :display_date, :datetime
    add_index  :posts, [:is_draft, :display_date], :order => {:display_date => :desc}
  end
end
