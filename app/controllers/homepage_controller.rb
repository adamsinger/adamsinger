class HomepageController < ApplicationController
  layout "aboutme"

  
  def index
    response.headers["Cache-Control"] = "public, max-age=31556926"
  end
end
