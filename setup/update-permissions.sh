#!/bin/bash
set -e


infoPlistFile="../app/App_Resources/iOS/Info.plist"
manifestFile="../app/App_Resources/Android/AndroidManifest.xml"
manifestFileTemp="../app/App_Resources/Android/AndroidManifest.xml.tmp"

echo "Update AndroidManifest.xml"
sed 's/.*android.permission.INTERNET.*/<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"\/>&/' $manifestFile > $manifestFileTemp
rm -rf $manifestFile
cp $manifestFileTemp $manifestFile
rm -rf $manifestFileTemp
sed 's/.*android.permission.INTERNET.*/<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"\/>&/' $manifestFile > $manifestFileTemp
rm -rf $manifestFile
cp $manifestFileTemp $manifestFile
rm -rf $manifestFileTemp

echo "Update Info.plist"
sed -i -e '/^<\/dict>/i \
<key>NSAppTransportSecurity<\/key>\
<dict>\
<key>NSAllowsArbitraryLoads<\/key>\
<true\/>\
<\/dict>\
' $infoPlistFile
