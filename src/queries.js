// src/queries.js
import pool from './db';
import queries from './queries.json';

async function agregarEstudiante(nombre, rut, curso, nivel) {
    const query = {
        text: queries.agregarEstudiante.text,
        values: [nombre, rut, curso, nivel]
    };

    try {
        const client = await pool.connect();
        const result = await client.query(query);
        client.release();
        return result.rows[0];
    } catch (error) {
        console.error('Error en agregarEstudiante:', error.message);
        throw error;
    }
}

async function consultarEstudiantes() {
    const query = {
        text: queries.consultarEstudiantes.text
    };

    try {
        const client = await pool.connect();
        const result = await client.query(query);
        client.release();
        return result.rows; // Devuelve un arreglo con todos los estudiantes
    } catch (error) {
        console.error('Error en consultarEstudiantes:', error.message);
        throw error;
    }
}

// Implementa las demás funciones de consulta de manera similar

export {
    agregarEstudiante,
    consultarEstudiantes,
    /* otras funciones */
};
