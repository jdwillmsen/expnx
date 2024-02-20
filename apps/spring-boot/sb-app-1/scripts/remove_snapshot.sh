#!/bin/bash

file="gradle.properties"
version=$(grep "^version=" "$file" | cut -d= -f2 | tr -d '\r')

# Remove "-SNAPSHOT" if present
new_version=$(echo "$version" | sed 's/-SNAPSHOT//')

# Replace the version line in the file
sed -i "s/^version=.*/version=$new_version/" "$file"