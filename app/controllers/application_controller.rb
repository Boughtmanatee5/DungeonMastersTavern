class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  def Hello
    render html: "Look at me!"
  end
end
