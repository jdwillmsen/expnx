#!/bin/bash

file="gradle.properties"
version=$(grep "^version=" "$file" | cut -d= -f2 | tr -d '\r')

# Add "-SNAPSHOT" back to the version if it's not already there
if [[ $version != *"SNAPSHOT"* ]]; then
  new_version="${version}-SNAPSHOT"
else
  new_version="${version}"
fi

# Replace the version line in the file
sed -i "s/^version=.*/version=$new_version/" "$file"