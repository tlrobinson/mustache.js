require 'rake'
require 'rake/testtask'

task :default => :test

task :test do
  Rake::TestTask.new do |t|
    Dir.glob("examples/*.html") do |file|
      test = File.basename(file, ".html")
      cmd = "ruby test/mustache_test.rb #{test}"
      print `#{cmd}`
    end
  end
end

task :commonjs do
  print "Packaging for CommonJS\n"
  File.open(File.join("mustache-commonjs", "mustache.js"), "w") do |f|
    f.puts "// This file is generated, edit mustache.js instead."
    f.puts File.read("mustache.js")
    f.puts "for (var prop in Mustache) exports[prop] = Mustache[prop];"
  end
end

task :jquery do
  print "Packaging for jQuery\n"
  target = "mustache-jquery/"
  target_jq = "#{target}/jquery.mustache.js"
  `cat #{target_jq}.tpl.pre mustache.js #{target_jq}.tpl.post > #{target_jq}`
  copy_distfiles(target);
  print "Done, see ./#{target}\n"
end

private
def copy_distfiles(target)
  files = "LICENSE README.md test examples"
  `cp -r #{files} #{target}`
end
