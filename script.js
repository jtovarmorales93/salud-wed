function mostrarRecomendacion() {
    const sleepOption = document.querySelector('input[name="sleep"]:checked');
    const waterOption = document.querySelector('input[name="water"]:checked');
    const resultadoDiv = document.getElementById('resultado');
    let recomendacion = "";

    if (!sleepOption || !waterOption) {
        recomendacion = "Por favor, responde ambas preguntas.";
    } else {
        const sleepValue = sleepOption.value;
        const waterValue = waterOption.value;

        if (sleepValue === 'less' && waterValue === 'no') {
            recomendacion = "Prioriza el descanso y la hidratación. Intenta dormir más y bebe más agua.";
        } else if (sleepValue === 'less') {
            recomendacion = "Tu cuerpo necesita más descanso. Intenta establecer una rutina de sueño más larga.";
  } else if (waterValue === 'no') {
            recomendacion = "Mantenerte hidratado es clave. Lleva contigo una botella de agua y bebe regularmente.";
        } else if (sleepValue === 'more' && waterValue === 'yes') {
            recomendacion = "¡Excelente! Estás cuidando bien tu descanso e hidratación. ¡Sigue así!";
        } else if (sleepValue === 'normal' && waterValue === 'yes') {
            recomendacion = "Muy bien por mantener un buen equilibrio de sueño e hidratación.";
        } else if (sleepValue === 'normal' && waterValue === 'no') {
            recomendacion = "Estás durmiendo bien, pero no olvides la importancia de una buena hidratacion.";
        } else if (sleepValue === 'more' && waterValue === 'no') {
            recomendacion = "Aunque duermes suficiente, intenta aumentar tu consumo de agua diario.";
        }
    }

    resultadoDiv.textContent = recomendacion;
}