package com.iara.report_management.services;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.iara.report_management.domain.Chamado;
import com.iara.report_management.domain.Cliente;
import com.iara.report_management.domain.Tecnico;
import com.iara.report_management.domain.enums.Perfil;
import com.iara.report_management.domain.enums.Prioridade;
import com.iara.report_management.domain.enums.Status;
import com.iara.report_management.repositories.ChamadoRepository;
import com.iara.report_management.repositories.ClienteRepository;
import com.iara.report_management.repositories.TecnicoRepository;

@Service

public class DBService {
	@Autowired
	private TecnicoRepository tecnicoRepository;
	@Autowired
	private ClienteRepository clienteRepository;
	@Autowired
	private ChamadoRepository chamadoRepository;
	@Autowired
	private BCryptPasswordEncoder encoder;
	
	public void instanciaDB() {
		Tecnico tec1 = new Tecnico(null, "Iara Beco", "72293557294", "iarabeco82@gmail.com", encoder.encode("123"));
		tec1.addPerfil(Perfil.ADMIN);
		
		Cliente cli1 = new Cliente(null, "Jose Joao", "73126813607", "josejoao@mail.com", encoder.encode("123"));
		
		Chamado c1 = new Chamado(null, Prioridade.MEDIA, Status.ANDAMENTO, "Chamdo 01", "Primeiro chamado", tec1, cli1);
		
		
		tecnicoRepository.saveAll(Arrays.asList(tec1));
		clienteRepository.saveAll(Arrays.asList(cli1));
		chamadoRepository.saveAll(Arrays.asList(c1));
		
	}

}
