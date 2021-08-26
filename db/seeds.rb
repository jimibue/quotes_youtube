# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

br = User.create(name:'Bob Ross', skill:"painting happy trees")
cn = User.create(name:'Chuck Norris', skill:"Kicking ass")
tw = User.create(name:'Tommy Wiseau', skill:"Everything")

br.quotes.create(text:'Lets build some happy little trees',likes:1000)
br.quotes.create(text:'Theres nothing wrong with having a tree as a friend.',likes:10000)

Quote.create(text:'Oh Hi Mark', likes:1000000, user_id:tw.id )
Quote.create(text:'Lisa youre tearing me apart', likes:10000, user_id:tw.id )

p User.all
p Quote.all

