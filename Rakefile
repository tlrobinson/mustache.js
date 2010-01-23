require 'rake'
require 'spec/rake/spectask'

task :default => :spec

Spec::Rake::SpecTask.new(:spec) do |t|
  #t.spec_opts = ['--options', "\"#{File.dirname(__FILE__)}/spec/spec.opts\""]
  t.spec_files = FileList['test/*_spec.rb']
end

desc "Run all specs"
task :spec do
end

task :commonjs do
  print "Packaging for CommonJS\n"
  source = "mustache-commonjs"
  target = "lib/mustache.js"
  `mkdir -p lib`
  `cat #{source}/mustache.js.tpl.pre mustache.js #{source}/mustache.js.tpl.post > #{target}`
  print "Done.\n"
end

task :jquery do
  print "Packaging for jQuery\n"
  source = "mustache-jquery"
  target_jq = "jquery.mustache.js"
  `cat #{source}/#{target_jq}.tpl.pre mustache.js #{source}/#{target_jq}.tpl.post > #{target_jq}`
  print "Done, see ./#{target_jq}\n"
end


task :dojo do
  print "Packaging for dojo\n"
  source = "mustache-dojo"
  target_js = "mustache.js"
  `mkdir -p dojox; mkdir -p dojox/string`
  `cat #{source}/#{target_js}.tpl.pre mustache.js #{source}/#{target_js}.tpl.post > dojox/string/#{target_js}`
  print "Done, see ./dojox/string/#{target_js} Include using dojo.require('dojox.string.mustache.'); \n"
end


task :clean do
  `for file in \`cat .gitignore\`; do rm -rf $file; done`
end
