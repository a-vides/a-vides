document.addEventListener('DOMContentLoaded', () => {
  const mapElement = document.getElementById('map');
  if (!mapElement) {
    return;
  }

  function initMap() {
    const map = L.map('map').setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const cities = [
        { name: 'Boston', coords: [42.3601, -71.0589] },
        { name: 'New York', coords: [40.7128, -74.0060] },
        { name: 'Washington DC', coords: [38.9072, -77.0369] },
        { name: 'Philadelphia', coords: [39.9526, -75.1652] },
        { name: 'Asheville', coords: [35.5951, -82.5515] },
        { name: 'Savannah', coords: [32.0809, -81.0912] },
        { name: 'Charleston', coords: [32.7765, -79.9311] },
        { name: 'Orlando', coords: [28.5383, -81.3792] },
        { name: 'Miami', coords: [25.7617, -80.1918] },
        { name: 'Key West', coords: [24.5551, -81.7800] },
        { name: 'Atlanta', coords: [33.7490, -84.3880] },
        { name: 'Dallas', coords: [32.7767, -96.7970] },
        { name: 'Chicago', coords: [41.8781, -87.6298] },
        { name: 'San Francisco', coords: [37.7749, -122.4194] },
        { name: 'Mexico City', coords: [19.4326, -99.1332] },
        { name: 'San Miguel de Allende', coords: [20.9143, -100.7436] },
        { name: 'Santo Domingo', coords: [18.4861, -69.9312] },
        { name: 'San Salvador', coords: [13.6929, -89.2182] },
        { name: 'San Jose', coords: [9.9281, -84.0907] },
        { name: 'London', coords: [51.5074, -0.1278] },
        { name: 'Brighton', coords: [50.8225, -0.1372] },
        { name: 'Brussels', coords: [50.8503, 4.3517] },
        { name: 'Antwerp', coords: [51.2194, 4.4025] },
        { name: 'Rotterdam', coords: [51.9244, 4.4777] },
        { name: 'Amsterdam', coords: [52.3676, 4.9041] },
        { name: 'Berlin', coords: [52.5200, 13.4050] },
        { name: 'Munich', coords: [48.1351, 11.5820] },
        { name: 'Prague', coords: [50.0755, 14.4378] },
        { name: 'Salzburg', coords: [47.8095, 13.0550] },
        { name: 'Zurich', coords: [47.3769, 8.5417] },
        { name: 'Lucerne', coords: [47.0502, 8.3093] },
        { name: 'Bordeaux', coords: [44.8378, -0.5792] },
        { name: 'Biarritz', coords: [43.4832, -1.5586] },
        { name: 'Paris', coords: [48.8566, 2.3522] },
        { name: 'Nice', coords: [43.7102, 7.2620] },
        { name: 'Monaco', coords: [43.7384, 7.4246] },
        { name: 'Madrid', coords: [40.4168, -3.7038] },
        { name: 'Barcelona', coords: [41.3851, 2.1734] },
        { name: 'San Sebastian', coords: [43.3183, -1.9812] },
        { name: 'Agadir', coords: [30.4278, -9.5981] },
        { name: 'Taghazout', coords: [30.5453, -9.7114] },
        { name: 'Portofino', coords: [44.3043, 9.2089] },
        { name: 'Como', coords: [45.8080, 9.0852] },
        { name: 'Catania', coords: [37.5079, 15.0830] },
        { name: 'Siracusa', coords: [37.0691, 15.2875] },
        { name: 'Malta', coords: [35.9375, 14.3754] },
        { name: 'Athens', coords: [37.9838, 23.7275] },
        { name: 'Paros', coords: [37.0853, 25.1534] },
        { name: 'Milos', coords: [36.7460, 24.4445] },
        { name: 'Amorgos', coords: [36.8333, 25.9000] },
        { name: 'Ragusa', coords: [36.9250, 14.7300] },
        { name: 'Hengelo', coords: [52.2650, 6.7938] },
        { name: 'La Libertad', coords: [13.4833, -89.3167] },
        { name: 'Montreal', coords: [45.5017, -73.5673] }
    ];

    cities.forEach(city => {
      L.marker(city.coords).addTo(map)
        .bindPopup(city.name);
    });
  }

  if (typeof L !== 'undefined') {
    initMap();
  } else {
    setTimeout(() => {
      if (typeof L !== 'undefined') {
        initMap();
      }
    }, 500);
  }
});