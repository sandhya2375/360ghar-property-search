import React, { useState, useRef } from 'react';

const Property360SearchApp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [propertyDescription, setPropertyDescription] = useState('');
  const [descLoading, setDescLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  // Mock property data
  const mockProperties = [
    {
      id: 1,
      bhk: '2BHK',
      area: '1,200 sqft',
      location: 'Sector 50, Gurgaon',
      price: '₹75 Lakhs',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e8f4f8" width="400" height="300"/%3E%3Crect fill="%2300a8cc" x="50" y="80" width="300" height="150"/%3E%3Ccircle fill="%23ffd60a" cx="150" cy="80" r="20"/%3E%3Crect fill="%23333" x="80" y="120" width="50" height="60"/%3E%3Crect fill="%23333" x="190" y="120" width="50" height="60"/%3E%3C/svg%3E',
      amenities: ['Swimming Pool', 'Gym', 'Kids Play Area'],
      sectors: ['Sector 50'],
      priceRange: [70, 80],
      bhkType: '2BHK',
      sunlight: 'excellent',
      nearSchool: true,
      nearMarket: true
    },
    {
      id: 2,
      bhk: '3BHK',
      area: '1,600 sqft',
      location: 'Sector 57, Gurgaon',
      price: '₹1.1 Cr',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fff3e0" width="400" height="300"/%3E%3Crect fill="%23ff6b35" x="50" y="80" width="300" height="150"/%3E%3Ccircle fill="%23ffd60a" cx="250" cy="80" r="20"/%3E%3Crect fill="%23333" x="80" y="120" width="50" height="60"/%3E%3Crect fill="%23333" x="150" y="120" width="50" height="60"/%3E%3Crect fill="%23333" x="220" y="120" width="50" height="60"/%3E%3C/svg%3E',
      amenities: ['Gym', 'Security', 'Parking'],
      sectors: ['Sector 57'],
      priceRange: [105, 115],
      bhkType: '3BHK',
      sunlight: 'good',
      nearSchool: false,
      nearMarket: true
    },
    {
      id: 3,
      bhk: '2BHK',
      area: '1,100 sqft',
      location: 'Sector 83, Gurgaon',
      price: '₹68 Lakhs',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e8f5e9" width="400" height="300"/%3E%3Crect fill="%232e7d32" x="50" y="80" width="300" height="150"/%3E%3Ccircle fill="%23ffd60a" cx="180" cy="80" r="20"/%3E%3Crect fill="%23333" x="100" y="120" width="50" height="60"/%3E%3Crect fill="%23333" x="200" y="120" width="50" height="60"/%3E%3C/svg%3E',
      amenities: ['Green Space', 'Community Center', 'Play Area'],
      sectors: ['Sector 83'],
      priceRange: [65, 75],
      bhkType: '2BHK',
      sunlight: 'excellent',
      nearSchool: true,
      nearMarket: false
    },
    {
      id: 4,
      bhk: '1BHK',
      area: '750 sqft',
      location: 'Sector 45, Gurgaon',
      price: '₹42 Lakhs',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f3e5f5" width="400" height="300"/%3E%3Crect fill="%236a1b9a" x="50" y="80" width="300" height="150"/%3E%3Ccircle fill="%23ffd60a" cx="120" cy="80" r="20"/%3E%3Crect fill="%23333" x="140" y="120" width="50" height="60"/%3E%3C/svg%3E',
      amenities: ['Security', 'Parking', 'WiFi'],
      sectors: ['Sector 45'],
      priceRange: [40, 50],
      bhkType: '1BHK',
      sunlight: 'good',
      nearSchool: false,
      nearMarket: true
    },
    {
      id: 5,
      bhk: '3BHK',
      area: '1,750 sqft',
      location: 'Sector 85, Gurgaon',
      price: '₹95 Lakhs',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fce4ec" width="400" height="300"/%3E%3Crect fill="%23c2185b" x="50" y="80" width="300" height="150"/%3E%3Ccircle fill="%23ffd60a" cx="200" cy="80" r="20"/%3E%3Crect fill="%23333" x="90" y="120" width="50" height="60"/%3E%3Crect fill="%23333" x="160" y="120" width="50" height="60"/%3E%3Crect fill="%23333" x="230" y="120" width="50" height="60"/%3E%3C/svg%3E',
      amenities: ['Pool', 'Gym', 'Badminton', 'Library'],
      sectors: ['Sector 85'],
      priceRange: [90, 100],
      bhkType: '3BHK',
      sunlight: 'excellent',
      nearSchool: true,
      nearMarket: true
    },
    {
      id: 6,
      bhk: '2BHK',
      area: '1,300 sqft',
      location: 'Sector 79, Gurgaon',
      price: '₹82 Lakhs',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e0f2f1" width="400" height="300"/%3E%3Crect fill="%23009688" x="50" y="80" width="300" height="150"/%3E%3Ccircle fill="%23ffd60a" cx="160" cy="80" r="20"/%3E%3Crect fill="%23333" x="110" y="120" width="50" height="60"/%3E%3Crect fill="%23333" x="210" y="120" width="50" height="60"/%3E%3C/svg%3E',
      amenities: ['Gym', 'Community Hall', 'Parking'],
      sectors: ['Sector 79'],
      priceRange: [80, 90],
      bhkType: '2BHK',
      sunlight: 'good',
      nearSchool: true,
      nearMarket: true
    },
    {
      id: 7,
      bhk: '4BHK',
      area: '2,200 sqft',
      location: 'Sector 52, Gurgaon',
      price: '₹1.4 Cr',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23ffe0b2" width="400" height="300"/%3E%3Crect fill="%23e65100" x="50" y="80" width="300" height="150"/%3E%3Ccircle fill="%23ffd60a" cx="220" cy="80" r="20"/%3E%3Crect fill="%23333" x="80" y="120" width="40" height="60"/%3E%3Crect fill="%23333" x="140" y="120" width="40" height="60"/%3E%3Crect fill="%23333" x="200" y="120" width="40" height="60"/%3E%3Crect fill="%23333" x="260" y="120" width="40" height="60"/%3E%3C/svg%3E',
      amenities: ['Pool', 'Gym', 'Spa', 'Concierge'],
      sectors: ['Sector 52'],
      priceRange: [130, 150],
      bhkType: '4BHK',
      sunlight: 'excellent',
      nearSchool: true,
      nearMarket: true
    },
    {
      id: 8,
      bhk: '2BHK',
      area: '1,150 sqft',
      location: 'Sector 89, Gurgaon',
      price: '₹71 Lakhs',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f1f8e9" width="400" height="300"/%3E%3Crect fill="%23558b2f" x="50" y="80" width="300" height="150"/%3E%3Ccircle fill="%23ffd60a" cx="140" cy="80" r="20"/%3E%3Crect fill="%23333" x="120" y="120" width="50" height="60"/%3E%3Crect fill="%23333" x="200" y="120" width="50" height="60"/%3E%3C/svg%3E',
      amenities: ['Market Nearby', 'Park', 'School Adjacent'],
      sectors: ['Sector 89'],
      priceRange: [68, 78],
      bhkType: '2BHK',
      sunlight: 'excellent',
      nearSchool: true,
      nearMarket: true
    }
  ];

  // Initialize voice recognition
  const initVoiceRecognition = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Voice search not supported in your browser. Please use Chrome, Edge, or Safari.');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = false;
    recognitionRef.current.lang = 'en-IN';

    recognitionRef.current.onstart = () => {
      setIsListening(true);
    };

    recognitionRef.current.onresult = (event) => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript + ' ';
      }
      setSearchQuery(transcript.trim());
      setIsListening(false);
    };

    recognitionRef.current.onerror = () => {
      setIsListening(false);
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
    };
  };

  const startVoiceInput = () => {
    if (!recognitionRef.current) {
      initVoiceRecognition();
    }
    recognitionRef.current?.start();
  };

  // Parse query with OpenRouter LLM
  const parseQueryWithLLM = async (query) => {
    try {
      const parsePrompt = `Parse this property search query into structured filters. Return ONLY valid JSON (no markdown, no explanation):
{
  "bhk": "1BHK|2BHK|3BHK|4BHK|null",
  "location": ["Sector 50", "Sector 57", ...] or null,
  "maxPrice": number (in lakhs) or null,
  "minPrice": number (in lakhs) or null,
  "amenities": ["Swimming Pool", "Gym", ...] or null,
  "sunlight": "excellent|good|any" or null,
  "nearSchool": true|false|null,
  "nearMarket": true|false|null
}

Query: "${query}"`;

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer sk-or-v1-free-key',
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.href,
          'X-Title': '360Ghar Property Search'
        },
        body: JSON.stringify({
          model: 'mistralai/mistral-7b-instruct:free',
          messages: [{ role: 'user', content: parsePrompt }],
          max_tokens: 500,
          temperature: 0.3
        })
      });

      if (!response.ok) {
        throw new Error('API Error: ' + response.status);
      }

      const data = await response.json();
      const content = data.choices[0].message.content.trim();
      
      // Clean JSON response (remove markdown if present)
      let jsonStr = content.replace(/```json\n?|\n?```/g, '').trim();
      return JSON.parse(jsonStr);
    } catch (error) {
      console.error('Parse error:', error);
      return null;
    }
  };

  // Calculate match score and reasons
  const getMatchScore = (property, filters) => {
    let score = 0;
    let reasons = [];

    if (filters.bhk && property.bhkType === filters.bhk) {
      score += 25;
      reasons.push(`Matches ${filters.bhk}`);
    }

    if (filters.location && filters.location.some(loc => property.location.includes(loc))) {
      score += 20;
      reasons.push(`Located in ${property.location.split(',')[0]}`);
    }

    if (filters.maxPrice && property.priceRange[1] <= filters.maxPrice) {
      score += 15;
      reasons.push(`Within budget`);
    }

    if (filters.sunlight === 'excellent' && property.sunlight === 'excellent') {
      score += 15;
      reasons.push('Excellent natural light');
    } else if (filters.sunlight === 'good' && property.sunlight !== 'poor') {
      score += 10;
      reasons.push('Good natural light');
    }

    if (filters.nearSchool && property.nearSchool) {
      score += 10;
      reasons.push('Near schools');
    }

    if (filters.nearMarket && property.nearMarket) {
      score += 10;
      reasons.push('Close to market');
    }

    if (filters.amenities && filters.amenities.length > 0) {
      const matchedAmenities = filters.amenities.filter(a => property.amenities.includes(a));
      if (matchedAmenities.length > 0) {
        score += matchedAmenities.length * 5;
        reasons.push(`Has ${matchedAmenities[0]}`);
      }
    }

    return { score: Math.min(100, score), reasons: reasons.slice(0, 2) };
  };

  // Handle search
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    const filters = await parseQueryWithLLM(searchQuery);
    
    if (filters) {
      const scoredProperties = mockProperties.map(prop => {
        const { score, reasons } = getMatchScore(prop, filters);
        return { ...prop, score, matchReasons: reasons };
      }).sort((a, b) => b.score - a.score).filter(p => p.score > 0);

      setProperties(scoredProperties.slice(0, 6));
    }
    
    setLoading(false);
  };

  // Generate property description with LLM
  const generateDescription = async (property) => {
    setDescLoading(true);
    try {
      const descPrompt = `Write a 2-3 line personalized summary for this property matching the user's query.
User's original query: "${searchQuery}"
Property: ${property.bhk}, ${property.area}, ${property.location}, ${property.price}
Amenities: ${property.amenities.join(', ')}

Summary should feel like the app understands their needs. Be concise and genuine.`;

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer sk-or-v1-free-key',
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.href,
          'X-Title': '360Ghar Property Search'
        },
        body: JSON.stringify({
          model: 'mistralai/mistral-7b-instruct:free',
          messages: [{ role: 'user', content: descPrompt }],
          max_tokens: 150,
          temperature: 0.7
        })
      });

      const data = await response.json();
      setPropertyDescription(data.choices[0].message.content.trim());
    } catch (error) {
      setPropertyDescription('✨ A perfect match for your needs! This property ticks all your boxes.');
    }
    setDescLoading(false);
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.logo}>
          <span style={styles.logoText}>360</span>
          <span style={styles.logoGhar}>Ghar</span>
        </div>
        <p style={styles.subtitle}>India's AI & VR-Powered Real Estate Platform</p>
      </div>

      {/* Search Section */}
      <div style={styles.searchSection}>
        <form onSubmit={handleSearch} style={styles.searchForm}>
          <div style={styles.inputWrapper}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="E.g., 2BHK in Sector 50, under 80 lakhs, good sunlight, near school..."
              style={styles.input}
            />
            <button
              type="button"
              onClick={startVoiceInput}
              style={{
                ...styles.voiceBtn,
                background: isListening ? '#ff4444' : '#00a8cc',
                transform: isListening ? 'scale(1.1)' : 'scale(1)'
              }}
              title="Click to use voice input"
            >
              🎙️ {isListening ? 'Listening...' : 'Voice'}
            </button>
            <button type="submit" style={styles.searchBtn}>
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Results Section */}
      <div style={styles.resultsSection}>
        {loading && (
          <div style={styles.loading}>
            <div style={styles.spinner}></div>
            <p>Parsing your search... 🧠</p>
          </div>
        )}

        {!loading && properties.length > 0 && (
          <div>
            <p style={styles.resultCount}>Found {properties.length} properties that match</p>
            <div style={styles.grid}>
              {properties.map((property) => (
                <div
                  key={property.id}
                  style={styles.card}
                  onClick={() => {
                    setSelectedProperty(property);
                    generateDescription(property);
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,168,204,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                  }}
                >
                  <img src={property.image} alt="Property" style={styles.cardImage} />
                  <div style={styles.cardContent}>
                    <div style={styles.cardHeader}>
                      <h3 style={styles.cardTitle}>{property.bhk}</h3>
                      <span style={styles.price}>{property.price}</span>
                    </div>
                    <p style={styles.location}>{property.location}</p>
                    <p style={styles.area}>{property.area}</p>
                    <div style={styles.badges}>
                      {property.matchReasons.map((reason, idx) => (
                        <span key={idx} style={styles.badge}>
                          ✓ {reason}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!loading && properties.length === 0 && searchQuery && (
          <p style={styles.noResults}>No properties match your search. Try different keywords!</p>
        )}

        {!loading && properties.length === 0 && !searchQuery && (
          <p style={styles.placeholder}>Start typing or use voice search to find your perfect property 🏠</p>
        )}
      </div>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <div style={styles.modalOverlay} onClick={() => setSelectedProperty(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProperty(null)}
              style={styles.closeBtn}
            >
              ✕
            </button>

            <div style={styles.modalContent}>
              <img src={selectedProperty.image} alt="Property" style={styles.modalImage} />

              <div style={styles.modalInfo}>
                <h2 style={styles.modalTitle}>{selectedProperty.bhk}</h2>
                <p style={styles.modalLocation}>{selectedProperty.location}</p>
                <p style={styles.modalPrice}>{selectedProperty.price}</p>
                <p style={styles.modalArea}>{selectedProperty.area}</p>

                <div style={styles.amenitiesSection}>
                  <h4 style={styles.amenitiesTitle}>Amenities</h4>
                  <div style={styles.amenitiesList}>
                    {selectedProperty.amenities.map((amenity, idx) => (
                      <span key={idx} style={styles.amenityTag}>{amenity}</span>
                    ))}
                  </div>
                </div>

                <div style={styles.descriptionSection}>
                  <h4 style={styles.descTitle}>Why This Property?</h4>
                  {descLoading ? (
                    <p style={styles.descLoading}>✨ Generating personalized summary...</p>
                  ) : (
                    <p style={styles.description}>{propertyDescription}</p>
                  )}
                </div>

                <button style={styles.ctaBtn}>
                  📸 View 360° Walkthrough
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles
const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f0f9fb 0%, #e0f2f1 100%)',
    padding: '0',
    fontFamily: '"Segoe UI", -apple-system, sans-serif'
  },
  header: {
    background: 'linear-gradient(135deg, #00838f 0%, #00acc1 100%)',
    color: 'white',
    padding: '40px 20px',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,131,143,0.2)'
  },
  logo: {
    fontSize: '36px',
    fontWeight: '700',
    letterSpacing: '-1px',
    marginBottom: '8px'
  },
  logoText: {
    color: '#ffd60a'
  },
  logoGhar: {
    color: 'white'
  },
  subtitle: {
    fontSize: '14px',
    fontWeight: '500',
    opacity: 0.9,
    margin: '0'
  },
  searchSection: {
    padding: '30px 20px',
    maxWidth: '900px',
    margin: '0 auto'
  },
  searchForm: {
    width: '100%'
  },
  inputWrapper: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    padding: '14px 18px',
    fontSize: '15px',
    border: 'none',
    borderRadius: '8px',
    background: 'white',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'all 0.2s'
  },
  voiceBtn: {
    padding: '12px 18px',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap'
  },
  searchBtn: {
    padding: '12px 28px',
    background: '#00a8cc',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontSize: '14px'
  },
  resultsSection: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px'
  },
  loading: {
    textAlign: 'center',
    padding: '60px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px'
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '4px solid rgba(0,168,204,0.2)',
    borderTop: '4px solid #00a8cc',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  },
  resultCount: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '20px',
    fontWeight: '600'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px'
  },
  card: {
    background: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transform: 'translateY(0)'
  },
  cardImage: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    display: 'block'
  },
  cardContent: {
    padding: '16px'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px'
  },
  cardTitle: {
    margin: '0',
    fontSize: '18px',
    fontWeight: '700',
    color: '#00838f'
  },
  price: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#ff6b35'
  },
  location: {
    margin: '0 0 4px 0',
    fontSize: '13px',
    color: '#666',
    fontWeight: '500'
  },
  area: {
    margin: '0 0 12px 0',
    fontSize: '12px',
    color: '#999'
  },
  badges: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  badge: {
    display: 'inline-block',
    background: '#e0f2f1',
    color: '#00695c',
    padding: '6px 10px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '600'
  },
  noResults: {
    textAlign: 'center',
    padding: '60px 20px',
    color: '#666',
    fontSize: '16px'
  },
  placeholder: {
    textAlign: 'center',
    padding: '80px 20px',
    color: '#999',
    fontSize: '18px'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px'
  },
  modal: {
    background: 'white',
    borderRadius: '16px',
    maxWidth: '600px',
    width: '100%',
    maxHeight: '85vh',
    overflow: 'auto',
    position: 'relative',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
  },
  closeBtn: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    width: '36px',
    height: '36px',
    background: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  modalContent: {
    padding: '0'
  },
  modalImage: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    display: 'block'
  },
  modalInfo: {
    padding: '28px'
  },
  modalTitle: {
    margin: '0 0 8px 0',
    fontSize: '28px',
    fontWeight: '700',
    color: '#00838f'
  },
  modalLocation: {
    margin: '0 0 4px 0',
    fontSize: '14px',
    color: '#666',
    fontWeight: '500'
  },
  modalPrice: {
    margin: '0 0 4px 0',
    fontSize: '20px',
    fontWeight: '700',
    color: '#ff6b35'
  },
  modalArea: {
    margin: '0 0 20px 0',
    fontSize: '13px',
    color: '#999'
  },
  amenitiesSection: {
    marginBottom: '20px'
  },
  amenitiesTitle: {
    margin: '0 0 10px 0',
    fontSize: '14px',
    fontWeight: '700',
    color: '#333'
  },
  amenitiesList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  amenityTag: {
    background: '#e0f2f1',
    color: '#00695c',
    padding: '8px 12px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '600'
  },
  descriptionSection: {
    marginBottom: '24px',
    padding: '16px',
    background: '#f0f9fb',
    borderRadius: '10px'
  },
  descTitle: {
    margin: '0 0 10px 0',
    fontSize: '14px',
    fontWeight: '700',
    color: '#00695c'
  },
  description: {
    margin: '0',
    fontSize: '14px',
    color: '#333',
    lineHeight: '1.6',
    fontStyle: 'italic'
  },
  descLoading: {
    margin: '0',
    fontSize: '14px',
    color: '#00a8cc',
    fontWeight: '600'
  },
  ctaBtn: {
    width: '100%',
    padding: '14px',
    background: 'linear-gradient(135deg, #00a8cc 0%, #00838f 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '700',
    fontSize: '15px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  }
};

// Add animation keyframes
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  input::placeholder {
    color: #ccc;
  }
  input:focus {
    box-shadow: 0 4px 16px rgba(0,168,204,0.15) !important;
  }
`;
document.head.appendChild(styleSheet);

export default Property360SearchApp;
