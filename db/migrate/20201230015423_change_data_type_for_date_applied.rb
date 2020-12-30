class ChangeDataTypeForDateApplied < ActiveRecord::Migration[6.0]
  def change
    change_column( :applications, :date_applied, :datetime)
  end
end
