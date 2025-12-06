# 📝 To-Do List with Audio API

A simple, interactive to-do list application that demonstrates the Web Audio API with sound feedback for user actions.

## ✨ Features

- ✅ Add tasks with a text input
- ☑️ Check/uncheck tasks with checkbox
- 🗑️ Delete tasks
- 🔊 Different sounds for different actions using Audio API
- 💾 Persistent storage with localStorage
- 📱 Responsive design

## 🎵 Audio API Demo

This project showcases the **Audio API** with different purposes:

- **Multiple Audio() instances** - Separate audio objects for different actions
- **Volume control** - Different volumes (30%-70%) for each sound
- **Playback rate manipulation** - Speed/pitch changes (0.8x - 1.5x)
- **Dynamic audio properties** - Real-time volume and rate adjustments

### Sound Effects

| Action | Volume | Playback Rate | Effect |
|--------|--------|---------------|--------|
| ✓ Check task | 70% | 1.0x | Normal ding |
| ☐ Uncheck task | 30% | 1.5x | Quick chirp |
| ➕ Add task | 60% | 1.2x | Bright tone |
| ✕ Delete task | 50% | 0.8x | Deep tone |

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Python or Node.js for running a local server

### Installation

1. Clone this repository:
```bash
git clone https://github.com/YOUR_USERNAME/todo-audio-app.git
cd todo-audio-app
```

2. Make sure you have the audio file:
   - The project uses `ding.mp3.mp3` for sound effects
   - Place your audio file in the same directory as the HTML file

### Running the App

#### Option 1: Direct File Open
Simply open `todo.html` in your web browser by double-clicking it.

#### Option 2: Local Server (Recommended)

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000/todo.html
```

**Using Node.js:**
```bash
npx http-server -p 8000

# Then open: http://localhost:8000/todo.html
```

**Using VS Code:**
- Install "Live Server" extension
- Right-click `todo.html` and select "Open with Live Server"

## 📁 Project Structure

```
project/
├── todo.html          # Main HTML file
├── todo.css           # Styles
├── todo.js            # JavaScript with Audio API logic
├── ding.mp3.mp3       # Sound effect file
└── README.md          # This file
```

## 🎓 What Students Learn

- DOM manipulation (creating and modifying elements)
- Event handling (click, submit, change events)
- localStorage API for data persistence
- **Audio API** - Creating audio instances, controlling volume, playback rate
- CSS styling and responsive design
- Modern JavaScript (ES6+ syntax)

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Web Audio API
- localStorage API

## 📝 Usage

1. **Add a task**: Type in the input field and click "Add" or press Enter
2. **Mark as done**: Click the checkbox - plays a completion sound
3. **Uncheck a task**: Uncheck the box - plays a quick chirp
4. **Delete a task**: Click the ✕ button - plays a deep tone
5. **Tasks persist**: Reload the page - your tasks are saved!

## 🔍 Audio API Code Example

```javascript
// Create multiple Audio instances
const dingSound = new Audio("ding.mp3.mp3");

// Configure audio properties
dingSound.volume = 0.7;         // 70% volume
dingSound.playbackRate = 1.0;   // Normal speed

// Play with dynamic settings
function playSound(audioObj, options = {}) {
  audioObj.currentTime = 0;
  if (options.volume) audioObj.volume = options.volume;
  if (options.rate) audioObj.playbackRate = options.rate;
  audioObj.play();
}
```

## 🌟 Future Enhancements

- Edit task functionality
- Task categories/tags
- Dark mode toggle
- Task priority levels
- Due dates and reminders
- Different sound files for variety

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Created as a learning project to demonstrate Web Audio API usage.

## 🤝 Contributing

Feel free to fork this project and submit pull requests!

---

**Note**: Make sure your browser allows audio playback. Some browsers require user interaction before playing sounds.
