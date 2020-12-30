class ChangeDataTypeForSalary < ActiveRecord::Migration[6.0]
  def change
    change_column(:applications, :salary, :string)
  end
end
