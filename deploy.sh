echo "Adding to git ....."
git add .
echo "Add commit message ....."
read msg
git commit -m "$msg"
git push -u origan master
echo "Commit added ....."