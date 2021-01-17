# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create!([
    {
        id: 1,
        email: "test@example.com",
        password: "test123",
        password_confirmation: "test123",
    }
])

applications = Application.create!([
    {
        company: "Subway",
        position: "Sandwich Clerk",
        listing: "www.subway.com",
        salary: "$75K/year",
        contact: "Jared",
        contact_email: "jared@subway.com",
        date_applied: "2020-12-30T14:32",
        summary: "Sent in resume and cover letter. Spoke to Jared about company culture.",
        interview: "2021-01-08T15:45",
        follow_up: "No",
        status: "In Process",
        notes: "The sandwiches are just okay",
        user_id: 1
    },
    {
        company: "Legoland",
        position: "Lego Friend",
        listing: "www.legoland.com",
        salary: "$200K/year",
        contact: "Emma",
        contact_email: "emma@lego.com",
        date_applied: "2020-11-25T12:32",
        summary: "Sent in resume and cover letter. Spoke to Emma about company culture.",
        interview: "",
        follow_up: "No",
        status: "In Process",
        notes: "",
        user_id: 1
    }
])