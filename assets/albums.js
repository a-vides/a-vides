// Album data - exactly 15 albums for 3x5 grid
const albums = [
  { artist: 'Pink Floyd', album: 'The Wall' },
  { artist: 'Radiohead', album: 'OK Computer' },
  { artist: 'Aphex Twin', album: 'Selected Ambient Works 85-92' },
  { artist: 'Bob Dylan', album: 'Highway 61 Revisited' },
  { artist: 'Fred again..', album: 'USB' },
  { artist: 'Beatles', album: "Sgt. Pepper's Lonely Hearts Club Band" },
  { artist: 'The Doors', album: 'The Doors' },
  { artist: 'Led Zeppelin', album: 'Led Zeppelin III' },
  { artist: 'Beastie Boys', album: 'Licensed to Ill' },
  { artist: 'Bob Dylan', album: 'Blood on the Tracks' },
  { artist: 'Pink Floyd', album: 'Wish You Were Here' },
  { artist: 'John Lennon', album: 'Imagine' },
  { artist: 'The Beach Boys', album: 'Pet Sounds' },
  { artist: 'Manu Chao', album: 'Clandestino' },
  { artist: 'Billy Joel', album: 'The Stranger' }
];

async function fetchAlbumCover(artist, album) {
  try {
    const query = encodeURIComponent(`${artist} ${album}`);
    const response = await fetch(`https://itunes.apple.com/search?term=${query}&entity=album&limit=1`);
    const data = await response.json();
    
    if (data.results && data.results.length > 0) {
      // Get high resolution artwork (600x600)
      return data.results[0].artworkUrl100.replace('100x100', '600x600');
    }
  } catch (error) {
    console.error(`Failed to fetch cover for ${artist} - ${album}:`, error);
  }
  return null;
}

async function loadAlbums() {
  const collage = document.querySelector('.album-collage');
  
  if (!collage) return;
  
  // Clear placeholder content
  collage.innerHTML = '';
  
  // Load all albums
  for (const album of albums) {
    const coverUrl = await fetchAlbumCover(album.artist, album.album);
    
    // Only add albums that have valid cover URLs
    if (coverUrl) {
      const img = document.createElement('img');
      img.src = coverUrl;
      img.alt = `${album.artist} - ${album.album}`;
      img.title = `${album.artist} - ${album.album}`;
      img.className = 'album-cover';
      collage.appendChild(img);
    }
  }
}

document.addEventListener('DOMContentLoaded', loadAlbums);
