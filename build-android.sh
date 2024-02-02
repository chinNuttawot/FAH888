#!/bin/bash

## single build : ./build-android.sh qa
## multiple build : ./build-android.sh qa,develop,uat,production

npx jetify

IN=$1
apk_path="/Users/chin/FAH888"

envs=$(echo $IN | tr "," "\n")

for env in $envs
do
    rm -r $(echo "android/app/build/outputs/apk/release/app-release.apk")
    cd android
    ./gradlew clean
    ./gradlew $(echo "assembleRelease")
    cd ..
    appVersion="1.0.0"
    buildTime="$(date +'%d.%b.%y-%H.%M')"
    cp -f $(echo "android/app/build/outputs/apk/release/app-release.apk")  $(echo "$apk_path/fah888-${appVersion}-${buildTime}.apk")
done