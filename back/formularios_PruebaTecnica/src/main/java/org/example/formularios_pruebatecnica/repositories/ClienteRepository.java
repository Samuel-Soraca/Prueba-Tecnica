package org.example.formularios_pruebatecnica.repositories;

import org.example.formularios_pruebatecnica.models.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}