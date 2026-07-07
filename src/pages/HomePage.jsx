<div className="world-map">

  <svg
    viewBox="0 0 1200 600"
    className="world-svg"
    preserveAspectRatio="none"
  >

    <path
      d="M120 260 C280 120 470 120 620 250 S980 360 1120 180"
      className="route route1"
    />

    <path
      d="M150 420 C420 280 690 280 980 390"
      className="route route2"
    />

    <circle
      cx="120"
      cy="260"
      r="6"
      className="map-point"
    />

    <circle
      cx="620"
      cy="250"
      r="6"
      className="map-point"
    />

    <circle
      cx="1120"
      cy="180"
      r="6"
      className="map-point"
    />

    <motion.circle
      cx="120"
      cy="260"
      r="4"
      fill="#00D4FF"
      animate={{
        cx: [120,620,1120],
        cy: [260,250,180]
      }}
      transition={{
        duration:6,
        repeat:Infinity,
        ease:"linear"
      }}
    />

  </svg>

</div>
