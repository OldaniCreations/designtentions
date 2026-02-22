const MediaPlayer = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <video
          controls
          className="w-full rounded-lg shadow-lg"
          src="/media/AIassist.mov"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default MediaPlayer;
