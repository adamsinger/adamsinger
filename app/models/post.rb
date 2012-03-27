class Post < ActiveRecord::Base
  extend FriendlyId
  friendly_id :title, use: :slugged

  belongs_to :user

  before_save :markdown_to_html

  validates :title,         presence: true
  validates :body_markdown, presence: true

  scope :public, where("is_draft = ?", false)
  scope :newest, order("display_date DESC")

  def self.for_index
    self.public.newest.all
  end

  private

  def markdown_to_html
    if body_markdown_changed?
      markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
      self.body_html = markdown.render(self.body_markdown)
    end
  end
end
