package com.iara.report_management.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iara.report_management.domain.Chamado;

public interface ChamadoRepository extends JpaRepository <Chamado, Integer>{

}
