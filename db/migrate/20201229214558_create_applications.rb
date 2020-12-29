class CreateApplications < ActiveRecord::Migration[6.0]
  def change
    create_table :applications do |t|
      t.string :company_name
      t.string :position
      t.string :listing
      t.integer :salary
      t.string :contact
      t.string :contact_name
      t.date :date_applied
      t.text :summary
      t.date :interview
      t.boolean :follow_up
      t.string :status
      t.text :notes

      t.timestamps
    end
  end
end
