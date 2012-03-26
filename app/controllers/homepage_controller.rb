class HomepageController < ApplicationController
  layout :aboutme
  
  def index
    response.headers["Cache-Control"] = "public, max-age=86400"
  end
end
