package com.expnx.main.controllers;

import lombok.AllArgsConstructor;
import org.springframework.boot.info.BuildProperties;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/system")
@AllArgsConstructor
public class SystemController {
  private final BuildProperties buildProperties;

  @GetMapping
  public BuildProperties getAppProperties() {
    return buildProperties;
  }

  @GetMapping("/version")
  public String getAppVersion() {
    return buildProperties.getVersion();
  }

  @GetMapping("/name")
  public String getAppName() {
    return buildProperties.getName();
  }

  @GetMapping("/time")
  public String getAppCreationTime() {
    return buildProperties.getTime().toString();
  }

  @GetMapping("/artifact")
  public String getAppArtifact() {
    return buildProperties.getArtifact();
  }

  @GetMapping("/group")
  public String getAppGroup() {
    return buildProperties.getGroup();
  }

  @GetMapping("/health")
  public String getHealthCheck() {
    return String.format(
        "%s is up and running v%s", buildProperties.getName(), buildProperties.getVersion());
  }
}
