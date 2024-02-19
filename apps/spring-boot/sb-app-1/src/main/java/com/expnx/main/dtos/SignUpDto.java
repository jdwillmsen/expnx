package com.expnx.main.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class SignUpDto {
    private String name;
    private String username;
    private String email;
    private String password;
}
