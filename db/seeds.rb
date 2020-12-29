# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

applications = Application.create([
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
        follow_up: false,
        status: "In Process",
        notes: "The sandwiches are just okay"
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
        interview: "2021-01-10T11:45",
        follow_up: false,
        status: "In Process",
        notes: ""
    }
])