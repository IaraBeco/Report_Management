package com.iara.report_management.domain;

import java.time.LocalDate;

import com.iara.report_management.domain.enums.Prioridade;
import com.iara.report_management.domain.enums.Status;

public class Chamado {
	
	private Integer id;
	private LocalDate dataAbertura = LocalDate.now();
	private LocalDate dataFechamento;
	private Prioridade prioridade;
	private Status status;
	private String titulo;
	private String observacoes;

}
