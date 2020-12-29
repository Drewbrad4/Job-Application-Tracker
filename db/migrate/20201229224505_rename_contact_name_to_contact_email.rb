class RenameContactNameToContactEmail < ActiveRecord::Migration[6.0]
  def change
    rename_column :applications, :contact_name, :contact_email
  end
end
