class PostsController < ApplicationController
  respond_to :html
  before_filter :find_post, only: [:show, :edit, :destroy]

  def index
    
  end

  def show
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.create params[:post]
    respond_with @post
  end

  def edit

  end

  def destroy
  end

  private

  def find_post
    @post = Post.find params[:id]
  end
end
