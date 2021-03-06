#!/bin/sh

# Script assumes you are running this from the project root.
# i.e. run this script with ./scripts/build-lambda.sh
LAMBDA_DIR="./lambda"
BUILD_DIR="./lambda-build"
echo $LAMBDA_DIR
echo $BUILD_DIR

if [ -d "$LAMBDA_DIR" ]; then
  echo "Lambda Directory Found..."
else
  echo "Error: Lambda Directory not found at $LAMBDA_DIR :("
  exit 1
fi

if [ -d "$BUILD_DIR" ]; then
  echo "Build Directory Found. Clearing any files in Build Directory"
  rm -r $BUILD_DIR/*
else
  echo "Build Directory Not Found. Making build directory"
  mkdir -p $BUILD_DIR;
fi

echo "Starting Build..."

rsync -av --exclude '**/node_modules/' --exclude '**/*.test*' --exclude '**/*.ts*' --exclude 'tsconfig.json' --exclude 'package.json' --exclude 'package-lock.json' $LAMBDA_DIR/* $BUILD_DIR

echo "Installing Production Dependencies"
for dir in $BUILD_DIR/*/
do
  echo ${dir}
  cp $LAMBDA_DIR/package.json ${dir}
  npm install --production --prefix ${dir}
  # zip -rmj "${dir%/}.zip" "${dir%/}"
  # rmdir ${dir}
done
