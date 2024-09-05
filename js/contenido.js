const videoContainer = document.getElementById('video-container');

// Aquí agregamos todos los videos que quieras
const videos = [
    {
        url: 'https://cdn.pixabay.com/video/2019/10/26/28320-369325356_large.mp4',
        title: 'Desarrollo Web'
    },
    {
        url: 'https://cdn.pixabay.com/video/2019/10/09/27693-365890966_large.mp4',
        title: 'Programación'
    },
    {
        url: 'https://media.istockphoto.com/id/1193269492/es/v%C3%ADdeo/el-programador-escribe-el-c%C3%B3digo-para-el-desarrollo-de-la-p%C3%A1gina-web-en-el-fondo-de-una.mp4?s=mp4-640x640-is&k=20&c=hMZe7sgZYjbyuNOPyLOH8yAGanBpPNzTlMSasBleRDQ=',
        title: 'Programación'
    },
    {
        url: 'https://cdn.pixabay.com/video/2016/08/22/4733-179738669_large.mp4',
        title: 'Programación'
    },
    {
        url: 'https://media.istockphoto.com/id/1338914269/es/v%C3%ADdeo/retrato-en-primer-plano-del-ingeniero-de-software-que-trabaja-en-la-computadora-l%C3%ADnea-de.mp4?s=mp4-640x640-is&k=20&c=Ji6p_MY1xawjB5qAEicfC_EAWKyuFiDGdWp5CRpSOcw=',
        title: 'Programación'
    },
    {
        url: 'https://media.istockphoto.com/id/1334309482/es/v%C3%ADdeo/ingeniero-masculino-adulto-joven-que-utiliza-una-interfaz-de-software-futurista-de-realidad.mp4?s=mp4-640x640-is&k=20&c=TF5gM-kSNnu893LSdk-rmsttxnUgF8J1KAL4VnpfQ34=',
        title: 'Programación'
    }
];

// Función para agregar múltiples videos al contenedor
videos.forEach(video => {
    const videoWrapper = document.createElement('div'); // Creamos un contenedor para cada video y sus íconos
    videoWrapper.classList.add('video-wrapper');
    
    const videoElement = document.createElement('video');
    videoElement.src = video.url;
    videoElement.controls = true;

    const iconsContainer = document.createElement('div');
    iconsContainer.classList.add('icons');
    iconsContainer.innerHTML = `
        <img src="https://i.postimg.cc/pXRbt92j/asssssss.png" alt="Like">
        <img src="https://i.postimg.cc/WpfrBZmW/12.png" alt="Comment">
        <img src="https://i.postimg.cc/LX55DyWH/13.png" alt="Share">
    `;

    videoWrapper.appendChild(videoElement);
    videoWrapper.appendChild(iconsContainer);

    videoContainer.appendChild(videoWrapper); // Agregamos el contenedor del video y sus íconos 
});
