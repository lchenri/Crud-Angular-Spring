package com.lucas.crudspring.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Entity //especificando a classe como uma entidade que vai fazer o mapeamento com o bd
//nome da tabela != do padrao(nome da classe) @Table(name = "cursos")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty("_id")
    private Long id;

    @Column(length = 210, nullable = false) //nullable = false -> não aceita a coluna vazia
    private String name;

    @Column(length = 10, nullable = false)
    private String category;
}
