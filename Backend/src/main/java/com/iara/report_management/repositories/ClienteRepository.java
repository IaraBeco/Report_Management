package com.iara.report_management.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iara.report_management.domain.Cliente;

public interface ClienteRepository extends JpaRepository <Cliente, Integer>{

}
