class ApplicationsController < ApplicationController
    def index
        applications = Application.all
        render json: applications
    end

    def show
        application = Application.find(params[:id])
        render json: application
    end

    def create
        application = Application.create(application_params)
        if application.valid?
            render json: application
        else
            render json: application.errors, status: :unprocessable_entity
        end
    end

    def update
        application = Application.find(params[:id])
        application.update(application_params)
        if application.valid?
          render json: application
        else
          render json: application.errors, status: :unprocessable_entity
        end
    end

    private
    def application_params
        params.require(:application).permit(:company, :position, :listing, :salary, :contact, :contact_email, :date_applied, :summary, :interview, :follow_up, :status, :notes)
    end
end
