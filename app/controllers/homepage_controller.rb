class HomepageController < ApplicationController
  def index
    response.headers["Cache-Control"] = "public, max-age=86400"
  end
end
