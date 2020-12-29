class RenameCompanyNameToCompany < ActiveRecord::Migration[6.0]
  def change
    rename_column :applications, :company_name, :company
  end
end
