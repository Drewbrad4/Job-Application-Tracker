class ChangeDataTypeForFollowUp < ActiveRecord::Migration[6.0]
  def change
    change_column(:applications, :follow_up, :string)
  end
end
