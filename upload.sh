#!/bin/upload.sh
comment=$1
echo Commit comment: \"$comment\"
# upload in this folder
echo "============ Uploading to GitHub ============"
git add \.
git status
git commit -m "$comment"
git push
# add stuff to
echo "============ Uploading to Heroku ============"
git push heroku master