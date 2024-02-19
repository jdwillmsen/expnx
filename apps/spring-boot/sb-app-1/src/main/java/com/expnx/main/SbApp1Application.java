package com.expnx.main;

import com.expnx.main.entities.Role;
import com.expnx.main.models.RoleType;
import com.expnx.main.repositories.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SbApp1Application {

  @Bean
  public CommandLineRunner seedData(RoleRepository roleRepository) {
    return (args -> {
      Role role = new Role();
      role.setName(RoleType.ROLE_ADMIN.name());
      roleRepository.save(role);
    });
  }

  public static void main(String[] args) {
    SpringApplication.run(SbApp1Application.class, args);
  }
}
