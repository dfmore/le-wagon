# test the basics of running irb

require 'date'
name = "Slim Shady"

def say_hello(name)
  puts "Hi!"
  i=0
  until i==3
    puts "My name is (#{i+1})"
    i=i+1
  end
  puts name
end

say_hello("<turntable scratch> #{name}")

puts Date.new
