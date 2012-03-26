class Post < ActiveRecord::Base
  belongs_to :user

  before_save :markdown_to_html

  validates :title,         presence: true
  validates :body_markdown, presence: true

  scope :public, where(is_draft: false)
  scope :newest, order(display_date: :desc)

  def self.for_index
    self.all.public.newest
  end

  private

  def markdown_to_html
    if body_markdown_changed?
      markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
      self.body_html = markdown.render(self.body_markdown)
    end
  end
end
