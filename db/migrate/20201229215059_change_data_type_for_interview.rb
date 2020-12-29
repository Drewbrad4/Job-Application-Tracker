class ChangeDataTypeForInterview < ActiveRecord::Migration[6.0]
  def change
    change_column(:applications, :interview, :datetime)
  end
end
