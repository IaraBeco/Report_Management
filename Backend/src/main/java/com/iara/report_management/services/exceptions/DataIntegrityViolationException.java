package com.iara.report_management.services.exceptions;

public class DataIntegrityViolationException extends RuntimeException {
	public DataIntegrityViolationException(String message, Throwable cause) {
		super(message, cause);
	}

	public DataIntegrityViolationException(String message) {
		super(message);
	}

	private static final long serialVersionUID = 1L;

}
