cat > README.md <<EOF
# Bookmarklets
Here are the bookmarklets
EOF
for script in *.js
do
    LINK=$(node_modules/.bin/uglifyjs $script |node -p "'javascript:'+encodeURIComponent(require('fs').readFileSync(0))+'\\n'")
cat >>README.md <<EOF
## $script
Source:

\`\`\`js
$(cat $script)
\`\`\`

Minfied:

\`\`\`
$LINK
\`\`\`

[Link]($LINK)
EOF
done
lowdown README.md > index.html
