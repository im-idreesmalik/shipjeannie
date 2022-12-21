echo "Adding to git ....."
git add .
echo "Add commit message ....."
read msg
git commit -m "$msg"
git push -u origin master
echo "Commit added ............."
