class ApplicationsController < ApplicationController
    def index
        applications = Application.all
        render json: applications
    end

    def show
        application = Application.find(params[:id])
        render json: application
    end


end
