package com.expnx.main.controllers;

import com.expnx.main.dtos.LoginDto;
import com.expnx.main.dtos.SignUpDto;
import com.expnx.main.entities.Role;
import com.expnx.main.entities.User;
import com.expnx.main.models.RoleType;
import com.expnx.main.repositories.RoleRepository;
import com.expnx.main.repositories.UserRepository;
import java.util.Collections;
import java.util.Optional;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {
  private AuthenticationManager authenticationManager;
  private UserRepository userRepository;
  private RoleRepository roleRepository;
  private PasswordEncoder passwordEncoder;

  @PostMapping("/login")
  public ResponseEntity<String> authenticateUser(@RequestBody LoginDto loginDto) {
    Authentication authentication =
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                loginDto.getUsername(), loginDto.getPassword()));
    SecurityContextHolder.getContext().setAuthentication(authentication);
    return new ResponseEntity<>("User login successfully!", HttpStatus.OK);
  }

  @PostMapping("/signup")
  public ResponseEntity<?> registerUser(@RequestBody SignUpDto signUpDto) {
    if (userRepository.existsByUsername(signUpDto.getUsername())) {
      return new ResponseEntity<>("Username already exists!", HttpStatus.BAD_REQUEST);
    }
    if (userRepository.existsByEmail(signUpDto.getEmail())) {
      return new ResponseEntity<>("Email already exists!", HttpStatus.BAD_REQUEST);
    }
    Optional<Role> role = roleRepository.findByName(RoleType.ROLE_ADMIN.name());
    if (role.isEmpty()) {
      return new ResponseEntity<>("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR);
    }
    User user =
        User.builder()
            .name(signUpDto.getName())
            .username(signUpDto.getUsername())
            .email(signUpDto.getEmail())
            .password(passwordEncoder.encode(signUpDto.getPassword()))
            .roles(Collections.singleton(role.get()))
            .build();
    userRepository.save(user);
    return new ResponseEntity<>("User is registered successfully!", HttpStatus.CREATED);
  }
}
