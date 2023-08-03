package com.lucas.crudspring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lucas.crudspring.model.Course;
import com.lucas.crudspring.repository.CourseRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {
    
    private CourseRepository courseRepository;

    /*usando o @AllArgsConstructor não precisa fazer o construtor
    //public CourseController(CourseRepository courseRepository) {
    //    this.courseRepository = courseRepository;
    }*/
    
    @GetMapping //indica que será uma requisicao get, vindo do requestmapping
    public List<Course> list(){
        return courseRepository.findAll();
    }
}
