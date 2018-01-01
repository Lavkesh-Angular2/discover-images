# Create project build
if [ "$#" -ne 1 ]; then
    echo "Image tag version not found...."
    exit 1
fi

npm run build

sh ./run.sh $#
