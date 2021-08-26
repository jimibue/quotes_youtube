class QuotesController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    render component: "Quotes", props: {user: @user, quotes: @user.quotes}
  end

  def show
    @user = User.find(params[:user_id])
    @quote = @user.quotes.find(params[:id])
    render component: "Quote", props:{user:@user, quote:@quote}
  end
end
