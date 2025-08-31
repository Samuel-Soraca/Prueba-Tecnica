package org.example.formularios_pruebatecnica.controllers;

import org.example.formularios_pruebatecnica.models.Cliente;
import org.example.formularios_pruebatecnica.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/clientes")
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

    @GetMapping
    public List<Cliente> getAllClientes() {
        return clienteRepository.findAll();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Cliente> getClienteById(@PathVariable Long id) {
        Optional<Cliente> cliente = clienteRepository.findById(id);
        return cliente.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PostMapping
    public Cliente createCliente(@RequestBody Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cliente> updateCliente(@PathVariable Long id, @RequestBody Cliente updatedCliente) {
        return clienteRepository.findById(id).map(cliente -> {
            cliente.setTipoIdentificacion(updatedCliente.getTipoIdentificacion());
            cliente.setNumeroIdentificacion(updatedCliente.getNumeroIdentificacion());
            cliente.setNombres(updatedCliente.getNombres());
            cliente.setApellidos(updatedCliente.getApellidos());
            cliente.setFechaNacimiento(updatedCliente.getFechaNacimiento());
            cliente.setDireccion(updatedCliente.getDireccion());
            cliente.setCiudad(updatedCliente.getCiudad());
            cliente.setDepartamento(updatedCliente.getDepartamento());
            cliente.setPais(updatedCliente.getPais());
            cliente.setMarca(updatedCliente.getMarca());
            return ResponseEntity.ok(clienteRepository.save(cliente));
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteCliente(@PathVariable Long id) {
        return clienteRepository.findById(id).map(cliente -> {
            clienteRepository.delete(cliente);
            return ResponseEntity.noContent().build();
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
