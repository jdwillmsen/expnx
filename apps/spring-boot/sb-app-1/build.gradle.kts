import com.google.cloud.tools.jib.api.buildplan.ImageFormat

plugins {
	java
	id("org.springframework.boot") version "3.2.2"
	id("io.spring.dependency-management") version "1.1.4"
	id("com.google.cloud.tools.jib") version "3.4.0"
	id("com.diffplug.spotless") version "6.25.0"
	id("maven-publish")
}

group = "com.expnx"
version = "0.0.1-SNAPSHOT"

java {
	sourceCompatibility = JavaVersion.VERSION_21
	targetCompatibility = JavaVersion.VERSION_21
}

configurations {
	compileOnly {
		extendsFrom(configurations.annotationProcessor.get())
	}
}

spotless {
	format("misc") {
		target("*.gradle", ".gitattributes", ".gitignore")

		trimTrailingWhitespace()
		indentWithTabs()
		endWithNewline()
	}

	java {
		googleJavaFormat()
		formatAnnotations()
	}
}

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-security")
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("org.springframework.boot:spring-boot-starter-data-jpa")
	implementation("org.springframework.boot:spring-boot-starter-actuator")
	compileOnly("org.projectlombok:lombok")
	runtimeOnly("io.micrometer:micrometer-registry-prometheus")
	runtimeOnly("com.h2database:h2")
	annotationProcessor("org.projectlombok:lombok")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
	testImplementation("org.springframework.boot:spring-boot-testcontainers")
	testImplementation("org.springframework.security:spring-security-test")
	testImplementation("org.testcontainers:junit-jupiter")
}

tasks.withType<Test> {
	useJUnitPlatform()
}

springBoot {
	buildInfo()
}

jib {
	from {
		image = "azul/zulu-openjdk-alpine:21-jre"
		auth {
			username = property("dockerUsername").toString()
			password = property("dockerPassword").toString()
		}
	}
	to {
		image = "jdwillmsen/sb-app-1"
		auth {
			username = property("dockerUsername").toString()
			password = property("dockerPassword").toString()
		}
		tags = setOf("latest", "${project.version}")
	}
	container {
		format = ImageFormat.OCI
	}
}

publishing {
	publications {
		create<MavenPublication>("mavenJava") {
			artifact(tasks.getByName("bootJar"))
		}
	}
}