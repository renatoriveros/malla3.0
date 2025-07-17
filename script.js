document.addEventListener('DOMContentLoaded', function() {
    // Datos de la malla curricular
    const curriculum = [
        // Año 1
        {
            semester: 1,
            year: 1,
            courses: [
                {
                    code: "PSI101",
                    name: "Introducción a la psicología",
                    unlocks: ["PSI201", "TIN101", "TEP101", "TEP102"],
                    requirements: []
                },
                {
                    code: "PSI102",
                    name: "Fundamentos Socioculturales de la psicología",
                    unlocks: ["PSI202", "TIN101", "TEP101", "TEP102"],
                    requirements: []
                },
                {
                    code: "PSI103",
                    name: "Fundamentos biológicos del comportamiento humano",
                    unlocks: ["PSI203", "TIN101", "TEP101", "TEP102"],
                    requirements: []
                },
                {
                    code: "PSI104",
                    name: "Filosofía y psicología",
                    unlocks: ["TIN101", "TEP101", "TEP102"],
                    requirements: []
                },
                {
                    code: "ING101",
                    name: "Inglés 1",
                    unlocks: ["ING102", "TIN101", "TEP101", "TEP102"],
                    requirements: []
                },
                {
                    code: "HFI101",
                    name: "Habilidades de formación inicial",
                    unlocks: ["TIN101", "TEP101", "TEP102"],
                    requirements: []
                }
            ]
        },
        {
            semester: 2,
            year: 1,
            courses: [
                {
                    code: "PSI201",
                    name: "Procesos Psicológicos",
                    unlocks: ["PSI301", "PSI302", "TIN101", "TEP101", "TEP102"],
                    requirements: ["PSI101"]
                },
                {
                    code: "PSI202",
                    name: "Teoría de Psicología social",
                    unlocks: ["PSI303", "TEP101", "TEP102"],
                    requirements: ["PSI102"]
                },
                {
                    code: "PSI203",
                    name: "Neurociencia cognitiva y del desarrollo",
                    unlocks: ["PSI304", "TEP101", "TEP102"],
                    requirements: ["PSI103"]
                },
                {
                    code: "PSI204",
                    name: "Modelos sistémicos",
                    unlocks: ["TIN101", "TEP101", "TEP102"],
                    requirements: []
                },
                {
                    code: "MET101",
                    name: "Metodología de la investigación",
                    unlocks: ["PSI501", "TIN101", "TEP101", "TEP102"],
                    requirements: []
                },
                {
                    code: "ING102",
                    name: "Inglés 2",
                    unlocks: ["ING103", "TIN101", "TEP101", "TEP102"],
                    requirements: ["ING101"]
                }
            ]
        },
        // Año 2
        {
            semester: 3,
            year: 2,
            courses: [
                {
                    code: "PSI301",
                    name: "Personalidad",
                    unlocks: ["PSI401", "PSI402", "TIN101", "TEP101", "TEP102"],
                    requirements: ["PSI201"]
                },
                {
                    code: "PSI302",
                    name: "Psicología del desarrollo",
                    unlocks: ["PSI403", "TIN101", "TEP101", "TEP102"],
                    requirements: ["PSI201"]
                },
                {
                    code: "PSI303",
                    name: "Psicología social aplicada",
                    unlocks: ["PSI404", "PSI405", "PSI406", "TEP101", "TEP102"],
                    requirements: ["PSI202"]
                },
                {
                    code: "PSI304",
                    name: "Neurociencias afectiva y social",
                    unlocks: ["TIN101"],
                    requirements: ["PSI203"]
                },
                {
                    code: "MOD301",
                    name: "Modelos cognitivos conductual",
                    unlocks: ["TIN101", "TEP101", "TEP102"],
                    requirements: []
                },
                {
                    code: "ING103",
                    name: "Inglés 3",
                    unlocks: ["TIN101", "TEP101", "TEP102"],
                    requirements: ["ING102"]
                }
            ]
        },
        {
            semester: 4,
            year: 2,
            courses: [
                {
                    code: "PSI401",
                    name: "Psicopatología",
                    unlocks: ["PSI502", "TEP101", "TEP102"],
                    requirements: ["PSI301"]
                },
                {
                    code: "PSI402",
                    name: "Técnicas de evaluación psicológica",
                    unlocks: ["PSI503", "TEP101", "TEP102"],
                    requirements: ["PSI301"]
                },
                {
                    code: "PSI403",
                    name: "Psicología del desarrollo 2",
                    unlocks: ["PSI504", "TEP101", "TEP102"],
                    requirements: ["PSI302"]
                },
                {
                    code: "MOD401",
                    name: "Modelos psicoanalíticos",
                    unlocks: ["TEP101", "TEP102"],
                    requirements: []
                },
                {
                    code: "MOD402",
                    name: "Modelo humanista experiencial",
                    unlocks: ["TEP101", "TEP102"],
                    requirements: []
                },
                {
                    code: "TIN101",
                    name: "Taller de integración 1",
                    unlocks: ["TEP101", "TEP102"],
                    requirements: ["PSI101", "PSI102", "PSI103", "PSI104", "ING101", "HFI101", "PSI201", "PSI202", "PSI203", "PSI204", "MET101", "ING102"]
                },
                {
                    code: "EFI101",
                    name: "Electivo de formación integral 1",
                    unlocks: ["EFI102", "TEP101", "TEP102"],
                    requirements: []
                }
            ]
        },
        // Año 3
        {
            semester: 5,
            year: 3,
            courses: [
                {
                    code: "PSI501",
                    name: "Métodos cuantitativos en psicología",
                    unlocks: ["PSI602", "TEP101", "TEP102"],
                    requirements: ["MET101"]
                },
                {
                    code: "PSI502",
                    name: "Psiquiatría",
                    unlocks: ["TEP101", "TEP102"],
                    requirements: ["PSI401"]
                },
                {
                    code: "PSI503",
                    name: "Diagnóstico clínico adulto 1",
                    unlocks: ["PSI701", "PSI703", "TEP101", "TEP102"],
                    requirements: ["PSI402"]
                },
                {
                    code: "PSI504",
                    name: "Clínica infanto juvenil",
                    unlocks: ["PSI702", "TEP101", "TEP102"],
                    requirements: ["PSI403"]
                },
                {
                    code: "PSI505",
                    name: "Psicología del trabajo y las organizaciones",
                    unlocks: ["PSI506", "TEP101", "TEP102"],
                    requirements: ["PSI303"]
                },
                {
                    code: "PSI506",
                    name: "Intervenciones en contextos organizacionales",
                    unlocks: ["TIN201", "TEP101", "TEP102"],
                    requirements: ["PSI505"]
                },
                {
                    code: "PSI507",
                    name: "Psicología educacional",
                    unlocks: ["PSI603", "TEP101", "TEP102"],
                    requirements: ["PSI303"]
                },
                {
                    code: "EFI102",
                    name: "Electivo de formación integral 2",
                    unlocks: ["TEP101", "TEP102"],
                    requirements: ["EFI101"]
                }
            ]
        },
        {
            semester: 6,
            year: 3,
            courses: [
                {
                    code: "PSI601",
                    name: "Intervención en psicología educativa",
                    unlocks: ["TIN201", "TEP101", "TEP102"],
                    requirements: ["PSI507"]
                },
                {
                    code: "PSI602",
                    name: "Métodos cualitativos en psicología",
                    unlocks: ["PSI801", "TEP101", "TEP102"],
                    requirements: ["PSI501"]
                },
                {
                    code: "PSI603",
                    name: "Psicodiagnóstico infanto juvenil",
                    unlocks: ["PSI802", "TIN201", "TEP101", "TEP102"],
                    requirements: ["PSI504"]
                },
                {
                    code: "PSI604",
                    name: "Introducción a la psicología clínica",
                    unlocks: ["PSI803", "TIN201", "TEP101", "TEP102"],
                    requirements: ["PSI503"]
                },
                {
                    code: "PSI605",
                    name: "Diagnóstico clínico adulto 2",
                    unlocks: ["TIN201", "TEP101", "TEP102"],
                    requirements: ["PSI503"]
                }
            ]
        },
        // Año 4
        {
            semester: 7,
            year: 4,
            courses: [
                {
                    code: "PSI701",
                    name: "Psicología jurídica",
                    unlocks: ["TEP101", "TEP102"],
                    requirements: ["PSI503"]
                },
                {
                    code: "PSI702",
                    name: "Psicoterapia infanto juvenil",
                    unlocks: ["TEP101", "TEP102"],
                    requirements: ["PSI603"]
                },
                {
                    code: "PSI703",
                    name: "Intervenciones en psicología clínica",
                    unlocks: ["TIN201", "TEP101", "TEP102"],
                    requirements: ["PSI604"]
                },
                {
                    code: "PSI704",
                    name: "Psicología comunitaria",
                    unlocks: ["TEP101", "TEP102"],
                    requirements: []
                },
                {
                    code: "ESE101",
                    name: "Electivo de especialidad 1",
                    unlocks: ["TEP101", "TEP102"],
                    requirements: []
                },
                {
                    code: "TIN201",
                    name: "Taller de integración 2",
                    unlocks: ["TEP101", "TEP102"],
                    requirements: ["PSI506", "PSI601", "PSI603", "PSI604", "PSI605", "PSI703"]
                }
            ]
        },
        {
            semester: 8,
            year: 4,
            courses: [
                {
                    code: "PSI801",
                    name: "Seminario de investigación 1",
                    unlocks: ["PSI901", "EGR101", "TEP101", "TEP102"],
                    requirements: ["PSI602"]
                },
                {
                    code: "PSI802",
                    name: "Examen de grado",
                    unlocks: ["PPR101"],
                    requirements: ["PSI801"]
                },
                {
                    code: "ESE102",
                    name: "Electivo de especialidad 2",
                    unlocks: ["TEP101", "TEP102"],
                    requirements: []
                }
            ]
        },
        // Año 5
        {
            semester: 9,
            year: 5,
            courses: [
                {
                    code: "PSI901",
                    name: "Seminario de investigación 2",
                    unlocks: ["PPR101"],
                    requirements: ["PSI801"]
                },
                {
                    code: "TEP101",
                    name: "Taller de especialización 1",
                    unlocks: ["PPR101"],
                    requirements: [] // Se manejará especial en el código
                },
                {
                    code: "TEP102",
                    name: "Taller de especialización 2",
                    unlocks: ["PPR101"],
                    requirements: [] // Se manejará especial en el código
                },
                {
                    code: "EGR101",
                    name: "Examen de grado",
                    unlocks: ["PPR101"],
                    requirements: ["PSI801"]
                }
            ]
        },
        {
            semester: 10,
            year: 5,
            courses: [
                {
                    code: "PPR101",
                    name: "Práctica profesional",
                    unlocks: [],
                    requirements: ["TEP101", "TEP102", "EGR101", "PSI901"]
                },
                {
                    code: "ETI101",
                    name: "Examen de título",
                    unlocks: [],
                    requirements: ["PPR101"]
                }
            ]
        }
    ];

    // Estado de la aplicación
    const state = {
        completedCourses: JSON.parse(localStorage.getItem('completedCourses')) || [],
        viewMode: 'semester'
    };

    // Elementos del DOM
    const yearsContainer = document.getElementById('years-container');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const viewBtn = document.getElementById('view-btn');
    const resetBtn = document.getElementById('reset-btn');
    const courseModal = document.getElementById('course-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalSemester = document.getElementById('modal-semester');
    const modalRequirements = document.getElementById('modal-requirements');
    const modalUnlocks = document.getElementById('modal-unlocks');
    const modalStatus = document.getElementById('modal-status');
    const toggleCourseBtn = document.getElementById('toggle-course');
    const closeModalBtn = document.querySelector('.close-modal');

    // Variables temporales
    let currentCourse = null;

    // Inicializar la aplicación
    function init() {
        renderYears();
        updateProgress();
        setupEventListeners();
    }

    // Renderizar por años y semestres
    function renderYears() {
        yearsContainer.innerHTML = '';
        
        // Agrupar por años
        const years = {};
        curriculum.forEach(semesterData => {
            if (!years[semesterData.year]) {
                years[semesterData.year] = [];
            }
            years[semesterData.year].push(semesterData);
        });
        
        // Crear columnas por año
        for (const [year, semesters] of Object.entries(years)) {
            const yearColumn = document.createElement('div');
            yearColumn.className = 'year-column';
            
            const titleEl = document.createElement('h3');
            titleEl.className = 'year-title';
            titleEl.textContent = `Año ${year}`;
            yearColumn.appendChild(titleEl);
            
            // Agregar semestres
            semesters.forEach(semesterData => {
                const semesterEl = document.createElement('div');
                semesterEl.className = 'semester';
                
                const semesterTitleEl = document.createElement('h4');
                semesterTitleEl.className = 'semester-title';
                semesterTitleEl.textContent = `Semestre ${semesterData.semester}`;
                semesterEl.appendChild(semesterTitleEl);
                
                const coursesListEl = document.createElement('div');
                coursesListEl.className = 'courses-list';
                
                semesterData.courses.forEach(course => {
                    const courseEl = document.createElement('div');
                    courseEl.className = 'course';
                    
                    // Verificar si el curso está completado
                    const isCompleted = state.completedCourses.includes(course.code);
                    if (isCompleted) {
                        courseEl.classList.add('completed');
                    }
                    
                    // Verificar si el curso está bloqueado
                    const isLocked = !isCourseUnlocked(course);
                    if (isLocked && !isCompleted) {
                        courseEl.classList.add('locked');
                    }
                    
                    courseEl.innerHTML = `
                        <div class="course-name">${course.name}</div>
                        <div class="course-code">${course.code}</div>
                    `;
                    
                    // Solo agregar evento click si no está bloqueado o ya está completado
                    if (!isLocked || isCompleted) {
                        courseEl.addEventListener('click', () => openCourseModal(course, semesterData));
                    } else {
                        courseEl.title = "Curso bloqueado - Completa los requisitos primero";
                    }
                    
                    coursesListEl.appendChild(courseEl);
                });
                
                semesterEl.appendChild(coursesListEl);
                yearColumn.appendChild(semesterEl);
            });
            
            yearsContainer.appendChild(yearColumn);
        }
    }

    // Verificar si un curso está desbloqueado
    function isCourseUnlocked(course) {
        // Los talleres de especialización tienen requisitos especiales
        if (course.code === 'TEP101' || course.code === 'TEP102') {
            return areAllCoursesCompleted();
        }
        
        if (course.requirements.length === 0) return true;
        
        return course.requirements.every(req => 
            state.completedCourses.includes(req)
        );
    }

    // Verificar si todos los cursos hasta el semestre 8 están completados (para TEP)
    function areAllCoursesCompleted() {
        const coursesUntilSemester8 = [];
        
        curriculum.forEach(semester => {
            if (semester.semester <= 8) {
                semester.courses.forEach(course => {
                    coursesUntilSemester8.push(course.code);
                });
            }
        });
        
        return coursesUntilSemester8.every(code => 
            state.completedCourses.includes(code)
        );
    }

    // Abrir el modal del curso
    function openCourseModal(course, semesterData) {
        currentCourse = course;
        
        modalTitle.textContent = course.name;
        modalSemester.textContent = `Año ${semesterData.year} - Semestre ${semesterData.semester}`;
        
        // Mostrar requisitos
        if (course.requirements.length > 0) {
            const reqNames = course.requirements.map(code => {
                const reqCourse = findCourseByCode(code);
                return reqCourse ? reqCourse.name : code;
            });
            modalRequirements.textContent = reqNames.join(', ');
        } else {
            modalRequirements.textContent = 'Ninguno';
        }
        
        // Mostrar cursos que desbloquea
        if (course.unlocks.length > 0) {
            const unlockNames = course.unlocks.map(code => {
                const unlockCourse = findCourseByCode(code);
                return unlockCourse ? unlockCourse.name : code;
            });
            modalUnlocks.textContent = unlockNames.join(', ');
        } else {
            modalUnlocks.textContent = 'Ninguno';
        }
        
        // Mostrar estado
        const isCompleted = state.completedCourses.includes(course.code);
        modalStatus.textContent = isCompleted ? 'Aprobado' : 'Pendiente';
        modalStatus.style.color = isCompleted ? 'var(--completed-color)' : '#ff6b9d';
        
        // Configurar botón
        toggleCourseBtn.textContent = isCompleted ? 'Marcar como pendiente' : 'Marcar como aprobado';
        toggleCourseBtn.style.backgroundColor = isCompleted ? '#f44336' : 'var(--primary-color)';
        
        // Mostrar modal
        courseModal.classList.add('active');
    }

    // Encontrar curso por código
    function findCourseByCode(code) {
        for (const semester of curriculum) {
            for (const course of semester.courses) {
                if (course.code === code) {
                    return course;
                }
            }
        }
        return null;
    }

    // Actualizar barra de progreso
    function updateProgress() {
        const totalCourses = curriculum.reduce((acc, semester) => acc + semester.courses.length, 0);
        const completedCount = state.completedCourses.length;
        const percentage = Math.round((completedCount / totalCourses) * 100);
        
        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${percentage}% completado (${completedCount}/${totalCourses} cursos)`;
    }

    // Configurar event listeners
    function setupEventListeners() {
        // Cerrar modal
        closeModalBtn.addEventListener('click', () => {
            courseModal.classList.remove('active');
        });
        
        // Cerrar modal al hacer clic fuera
        courseModal.addEventListener('click', (e) => {
            if (e.target === courseModal) {
                courseModal.classList.remove('active');
            }
        });
        
        // Alternar estado del curso
        toggleCourseBtn.addEventListener('click', toggleCourseStatus);
        
        // Cambiar vista
        viewBtn.addEventListener('click', () => {
            alert('Actualmente solo disponible vista por años');
        });
        
        // Reiniciar progreso
        resetBtn.addEventListener('click', () => {
            if (confirm('¿Estás seguro de que quieres reiniciar todo tu progreso?')) {
                state.completedCourses = [];
                localStorage.setItem('completedCourses', JSON.stringify(state.completedCourses));
                renderYears();
                updateProgress();
            }
        });
    }

    // Función para alternar el estado del curso
    function toggleCourseStatus() {
        if (!currentCourse) return;
        
        const index = state.completedCourses.indexOf(currentCourse.code);
        
        if (index === -1) {
            // Agregar a completados
            state.completedCourses.push(currentCourse.code);
        } else {
            // Quitar de completados
            state.completedCourses.splice(index, 1);
        }
        
        // Guardar en localStorage
        localStorage.setItem('completedCourses', JSON.stringify(state.completedCourses));
        
        // Actualizar UI
        renderYears();
        updateProgress();
        courseModal.classList.remove('active');
    }

    // Iniciar la aplicación
    init();
});
