class AddColumnToApplications < ActiveRecord::Migration[6.0]
  def change
    add_column :applications, :user_id, :integer
  end
end
