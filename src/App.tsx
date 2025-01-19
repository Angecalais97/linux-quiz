import FileManagementQuiz from './components/FileManagementQuiz'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <FileManagementQuiz />
    </div>
  )
}

export default App
const questions: Question[] = [
  // Existing questions...
  {
    question: "You need to find all files modified in the last 7 days in the /var/log directory. What command would you use?",
    options: [
      "find /var/log -mtime -7",
      "ls -l /var/log",
      "grep '7 days' /var/log",
      "stat /var/log"
    ],
    correctAnswer: "find /var/log -mtime -7",
    explanation: "The find command with -mtime -7 finds files modified in the last 7 days."
  },
  {
    question: "Your server is running out of disk space. How would you identify the largest files in the /home directory?",
    options: [
      "du -ah /home | sort -rh | head -n 10",
      "ls -l /home",
      "df -h /home",
      "find /home -type f -size +1G"
    ],
    correctAnswer: "du -ah /home | sort -rh | head -n 10",
    explanation: "The du command shows disk usage, and sorting it helps identify the largest files."
  },
  {
    question: "You need to schedule a backup script to run every day at 2 AM. How would you do this?",
    options: [
      "Add a cron job: 0 2 * * * /path/to/backup.sh",
      "Run the script manually every day",
      "Use the at command: at 2am -f /path/to/backup.sh",
      "Use systemd timers"
    ],
    correctAnswer: "Add a cron job: 0 2 * * * /path/to/backup.sh",
    explanation: "Cron jobs are used to schedule recurring tasks at specific times."
  }
];
{
  question: "You accidentally deleted an important file. How can you attempt to recover it?",
  options: [
    "Use a file recovery tool like extundelete",
    "Restart the system to undo the deletion",
    "Check the recycle bin",
    "Recreate the file manually"
  ],
  correctAnswer: "Use a file recovery tool like extundelete",
  explanation: "Linux does not have a recycle bin for command-line deletions. Tools like extundelete can help recover deleted files."
},
{
  question: "Your server is under a DDoS attack. How would you block suspicious IP addresses?",
  options: [
    "Use iptables to block IPs: iptables -A INPUT -s <IP> -j DROP",
    "Restart the server",
    "Disable the network interface",
    "Use a firewall GUI tool"
  ],
  correctAnswer: "Use iptables to block IPs: iptables -A INPUT -s <IP> -j DROP",
  explanation: "iptables is a powerful tool for managing network traffic and blocking malicious IPs."
}
<div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
  <div
    className="bg-blue-600 h-2.5 rounded-full"
    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
  ></div>
</div>
const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

useEffect(() => {
  if (!finished && timeLeft > 0) {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  } else if (timeLeft === 0) {
    setFinished(true);
  }
}, [timeLeft, finished]);

// Display the timer
<p className="text-gray-500">Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}</p>

