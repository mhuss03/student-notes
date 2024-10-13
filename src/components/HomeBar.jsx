export default function HomeBar() {
  return (
    <div className="bg-primary border-secondary sticky bottom-0 flex h-[8vh] w-full justify-around border-t-2 py-4">
      <div className="home-icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="home-icon"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
        >
          <path
            d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"
            stroke="white"
            fill="white"
          ></path>
        </svg>
      </div>
      <div className="home-icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="home-icon"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
        >
          <path
            d="M 37 48 C 36.824219 48 36.652344 47.953125 36.496094 47.863281 L 25 41.15625 L 13.503906 47.863281 C 13.195313 48.042969 12.8125 48.046875 12.503906 47.867188 C 12.191406 47.6875 12 47.359375 12 47 L 12 3 C 12 2.449219 12.449219 2 13 2 L 37 2 C 37.554688 2 38 2.449219 38 3 L 38 47 C 38 47.359375 37.808594 47.6875 37.496094 47.867188 C 37.34375 47.957031 37.171875 48 37 48 Z"
            stroke="white"
            fill="white"
          ></path>
        </svg>
      </div>
      <div className="home-icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="home-icon"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
          fill="white"
        >
          <circle cx="25" cy="15" r="7" />
          <path d="M 25 26 C 17 26 10 30 10 38 L 40 38 C 40 30 33 26 25 26 Z" />
        </svg>
      </div>
    </div>
  );
}
