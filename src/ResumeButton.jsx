function ResumeButton() {
  return (
    <a 
      href={`${window.location.origin}/resume.pdf`} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      Resume
    </a>
  );
}

export default ResumeButton;
