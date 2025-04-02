
function applyThemeToAll() {
  const theme = document.getElementById("themeSelect").value;
  localStorage.setItem("theme", theme);
  const root = document.documentElement;
  if (theme === "sky") {
    root.style.setProperty('--main-bg', '#d0f0ff');
    root.style.setProperty('--card-color', '#ffffff');
  } else {
    root.style.setProperty('--main-bg', '#ffe4f0');
    root.style.setProperty('--card-color', '#ffffff');
  }
}

function toggleSettings() {
  const panel = document.getElementById("settingsPanel");
  panel.style.display = panel.style.display === "none" ? "block" : "none";
}

function playClick() {
  document.getElementById("clickSound").play();
}

function goToLanding() {
  location.href = "https://gptonline.ai/ko/";
}

function changeStudent() {
  const student = document.getElementById("studentSelect").value;
  localStorage.setItem("selectedStudent", student);
  const root = document.documentElement;
  if (student === "jihyun") {
    alert("👩‍🎓 지현님, 환영합니다! 오늘은 단어 암기 집중 모드입니다.");
    root.style.setProperty('--main-bg', '#f0f9ff');
  } else if (student === "minsu") {
    alert("🧑‍🎓 민수님, 오늘은 문장 학습 추천!");
    root.style.setProperty('--main-bg', '#fff0f0');
  } else if (student === "yuna") {
    alert("👧 유나님, 오늘의 단어퀴즈가 준비되어 있어요.");
    root.style.setProperty('--main-bg', '#fffde7');
  } else {
    root.style.setProperty('--main-bg', '#ffe4f0');
  }
}

window.onload = () => {
  const savedStudent = localStorage.getItem("selectedStudent") || "default";
  document.getElementById("studentSelect").value = savedStudent;
  changeStudent();

  const saved = localStorage.getItem("theme") || "pink";
  document.getElementById("themeSelect").value = saved;
  applyThemeToAll();

  const dark = localStorage.getItem("darkMode");
  const toggleButton = document.getElementById("darkModeToggle");
  if (dark === "on") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "☀️ 다크모드 끄기";
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark ? "on" : "off");
    toggleButton.textContent = isDark ? "☀️ 다크모드 끄기" : "🌙 다크모드 켜기";
  });
};
