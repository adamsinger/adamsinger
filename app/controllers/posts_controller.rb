class PostsController < ApplicationController
  respond_to :html

  before_filter :authenticate_user!, only: [:edit, :destroy, :update, :new]
  before_filter :find_post, only: [:show, :edit, :destroy, :update]

  def index
    @posts = Post.for_index 
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
  
  def update
    @post.update_attributes params[:post]
    respond_with @post
  end

  def destroy
  end

  private

  def find_post
    @post = Post.find params[:id]
  end
end
