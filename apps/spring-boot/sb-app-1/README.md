# SB App 1

This is an example repository for exploring @nxrocks/nx-spring-boot generators and
how spring boot behaves in a nx monorepo setup. This project makes use of gradle
for its build kit.

## Version Upgrade

In order to preform a version upgrade the follow commands can be run.

```shell
./gradlew release -Prelease.useAutomaticVersion=true
```

This will automatically increment the version and create a release tag.
https://github.com/researchgate/gradle-release

It's similar to the maven-release-plugin, although it does not push the jar to an artifact repo.

## Docker

### Build

In order to build a docker container this project makes user of the jib plugin.

```shell
./gradlew jibDockerBuild
```

### Release

In order to release a docker container this project makes use of the jib plugin.
https://github.com/GoogleContainerTools/jib/blob/master/jib-gradle-plugin/README.md

```shell
bash scripts/remove_snapshot.sh && \
./gradlew jib && \
bash scripts/add_snapshot.sh
```

## Formatting

This project makes use of the spotless plugin for formatting code.
https://github.com/diffplug/spotless/tree/main/plugin-gradle

## Project Info

### Developers

- Jake Willmsen
