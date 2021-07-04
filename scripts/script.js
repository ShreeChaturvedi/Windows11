let all = document.getElementsByTagName("*");
let start = document.getElementsByClassName("start")[0];
let search = document.getElementsByClassName("search")[0];
let utilitymenus = document.getElementsByClassName("utility-menu");
let wifi = document.getElementsByClassName("wifi")[0];
let battery = document.getElementsByClassName("battery")[0];
let speaker = document.getElementsByClassName("speaker")[0];
let mic = document.getElementsByClassName("mic")[0];
let actioncenter = document.getElementsByClassName("action-center")[0];
let startmenu = document.getElementsByClassName("start-menu")[0];
let wifimenu = document.getElementsByClassName("wifi-menu")[0];
let batterymenu = document.getElementsByClassName("battery-menu")[0];
let speakermenu = document.getElementsByClassName("speaker-menu")[0];
let micmenu = document.getElementsByClassName("mic-menu")[0];
let actioncentermenu = document.getElementsByClassName("action-center-menu")[0];
let powerslider = document.getElementById("power-slider");
let doc = document.documentElement;
let body = document.body;
let video = document.getElementsByTagName("video")[0];
let taskbar = document.getElementsByClassName("taskbar")[0];
let wificards = document.getElementsByClassName("wifi-card");
let connects = document.getElementsByClassName("connect-button");
let wifitoggle = document.getElementById("wifi-toggle");
let controlcard = document.getElementsByClassName("control-card");
let animatedborder = document.getElementsByClassName("animated-border");
let glowcursor = document.getElementsByClassName("glow-cursor");
let saves = document.getElementsByClassName("save");
let deletes = document.getElementsByClassName("delete");
let notificationcards = document.getElementsByClassName("notification-card");

function closeAll() {
  startmenu.style.setProperty("--position", "-100%");
  wifimenu.style.setProperty("--position", "-100%");
  batterymenu.style.setProperty("--position", "-100%");
  speakermenu.style.setProperty("--position", "-100%");
  micmenu.style.setProperty("--position", "-100%");
  actioncentermenu.style.setProperty("--position", "-100%");
  for (let i = 0; i < utilitymenus.length; i++) {
    utilitymenus[i].style.setProperty("--opacity", "0");
  }
  startmenu.style.setProperty("--opacity", "0");
  video.style.filter = "none";
}

closeAll();

function toggleStartMenu() {
  if (getComputedStyle(startmenu).getPropertyValue("--position") == "-100%") {
    closeAll();
    startmenu.style.setProperty(
      "--position",
      "calc(60px + var(--panel-margin))"
    );
    startmenu.style.setProperty("--opacity", "1");
    video.style.filter = "brightness(0.8)";
  } else {
    closeAll();
  }
}

document.onmousemove = (e) => {
  for (let i = 0; i < glowcursor.length; i++) {
    b = glowcursor[i];
    let rect = b.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    let gradient = body.classList.contains("dark")
      ? "rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)"
      : "rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.05) 100%)";
    b.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px , ${gradient}`;
  }

  for (let i = 0; i < animatedborder.length; i++) {
    border = animatedborder[i];
    let rect = border.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    let color = body.classList.contains("dark") ? "#fff" : "#000";
    border.style.borderImage = `radial-gradient(25% 95% at ${x}px ${y}px, ${color}, transparent ) 1 / 2px / 0px stretch `;
  }
};

body.addEventListener("click", () => {
  closeAll();
});

for (let i = 0; i < utilitymenus.length; i++) {
  utilitymenus[i].addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

startmenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

taskbar.addEventListener("click", (e) => {
  e.stopPropagation();
});

wifitoggle.addEventListener("click", (e) => {
  if (wifitoggle.checked) {
    wifimenu.classList.remove("off");
  } else {
    wifimenu.classList.add("off");
  }
  e.stopPropagation();
});

for (let i = 0; i < connects.length; i++) {
  connects[i].addEventListener("click", (e) => {
    if (wificards[i].classList.contains("connected")) {
      wificards[i].classList.remove("connected");
      document
        .getElementsByClassName("wifi-card")
        [i].getElementsByClassName("info")[0]
        .getElementsByClassName("details")[0]
        .getElementsByClassName("status")[0].innerHTML = "Secured";

      document
        .getElementsByClassName("wifi-card")
        [i].getElementsByClassName("additional")[0]
        .getElementsByClassName("connect-button")[0].innerHTML = "Connect";
    } else {
      wificards[i].classList.add("connected");
      document
        .getElementsByClassName("wifi-card")
        [i].getElementsByClassName("info")[0]
        .getElementsByClassName("details")[0]
        .getElementsByClassName("status")[0].innerHTML = "Connected, secured";

      document
        .getElementsByClassName("wifi-card")
        [i].getElementsByClassName("additional")[0]
        .getElementsByClassName("connect-button")[0].innerHTML = "Disconnect";
    }
    e.stopPropagation();
  });
}

for (let i = 0; i < controlcard.length; i++) {
  controlcard[i].addEventListener("click", (e) => {
    if (controlcard[i].classList.contains("on")) {
      controlcard[i].classList.remove("on");
      switch (controlcard[i].classList[1]) {
        case "night-light":
          document.getElementsByClassName(
            "night-light-filter"
          )[0].style.opacity = 0;
          break;
        case "dark-mode":
          document.body.classList.remove("dark");
          break;
      }
    } else {
      controlcard[i].classList.add("on");
      switch (controlcard[i].classList[1]) {
        case "night-light":
          document.getElementsByClassName(
            "night-light-filter"
          )[0].style.opacity = 1;
          break;
        case "dark-mode":
          document.body.classList.add("dark");
          break;
      }
    }
    e.stopPropagation();
  });
}

start.addEventListener("click", (e) => {
  toggleStartMenu();
  e.stopPropagation();
});

search.addEventListener("click", (e) => {
  closeAll();
  startmenu.style.setProperty("--position", "calc(60px + var(--panel-margin))");
  startmenu.style.setProperty("--opacity", "1");
  document.getElementById("search-bar-input").focus({ preventScroll: true });
  video.style.filter = "brightness(0.8)";
  e.stopPropagation();
});

wifi.addEventListener("click", (e) => {
  if (getComputedStyle(wifimenu).getPropertyValue("--position") == "-100%") {
    closeAll();
    wifimenu.style.setProperty(
      "--position",
      "calc(60px + var(--panel-margin))"
    );
    for (let i = 0; i < utilitymenus.length; i++) {
      utilitymenus[i].style.setProperty("--opacity", "1");
    }
    video.style.filter = "brightness(0.8)";
  } else {
    closeAll();
  }
  e.stopPropagation();
});

battery.addEventListener("click", (e) => {
  if (getComputedStyle(batterymenu).getPropertyValue("--position") == "-100%") {
    closeAll();
    batterymenu.style.setProperty(
      "--position",
      "calc(60px + var(--panel-margin))"
    );
    for (let i = 0; i < utilitymenus.length; i++) {
      utilitymenus[i].style.setProperty("--opacity", "1");
    }
    video.style.filter = "brightness(0.8)";
  } else {
    closeAll();
  }
  e.stopPropagation();
});

speaker.addEventListener("click", (e) => {
  if (getComputedStyle(speakermenu).getPropertyValue("--position") == "-100%") {
    closeAll();
    speakermenu.style.setProperty(
      "--position",
      "calc(60px + var(--panel-margin))"
    );
    for (let i = 0; i < utilitymenus.length; i++) {
      utilitymenus[i].style.setProperty("--opacity", "1");
    }
    video.style.filter = "brightness(0.8)";
  } else {
    closeAll();
  }
  e.stopPropagation();
});

mic.addEventListener("click", (e) => {
  if (getComputedStyle(micmenu).getPropertyValue("--position") == "-100%") {
    closeAll();
    micmenu.style.setProperty("--position", "calc(60px + var(--panel-margin))");
    for (let i = 0; i < utilitymenus.length; i++) {
      utilitymenus[i].style.setProperty("--opacity", "1");
    }
    video.style.filter = "brightness(0.8)";
  } else {
    closeAll();
  }
  e.stopPropagation();
});

actioncenter.addEventListener("click", (e) => {
  if (
    getComputedStyle(actioncentermenu).getPropertyValue("--position") == "-100%"
  ) {
    closeAll();
    actioncentermenu.style.setProperty("--position", "var(--panel-margin)");
    for (let i = 0; i < utilitymenus.length; i++) {
      utilitymenus[i].style.setProperty("--opacity", "1");
    }
    video.style.filter = "brightness(0.8)";
  } else {
    closeAll();
  }
  e.stopPropagation();
});

function rangeSlider(value, id1, id2) {
  icon = document.getElementById(id1);
  document.getElementById(id2).innerHTML = value;
  value = parseInt(value);
  if (value == 100) {
    icon.style.backgroundImage =
      "url('../icons/indicators/windows speaker/full volume.png')";
  } else if (value >= 66) {
    icon.style.backgroundImage =
      "url('../icons/indicators/windows speaker/medium volume.png')";
  } else if (value >= 33) {
    icon.style.backgroundImage =
      "url('../icons/indicators/windows speaker/low volume.png')";
  } else if (value > 0) {
    icon.style.backgroundImage =
      "url('../icons/indicators/windows speaker/no volume.png')";
  } else {
    icon.style.backgroundImage =
      "url('../icons/indicators/windows speaker/muted.png')";
  }
}

function brightnessSlider(value) {
  document.getElementsByClassName("brightness-filter")[0].style.opacity =
    String(1 - value / 100);
  size = Math.round(10 + Math.round(value / 10) * 2);
  let icon = document.getElementById("brightness-icon");
  icon.style.width = String(size) + "px";
  icon.style.height = String(size) + "px";
}

function generateNotification() {
  let types = [
    ["facebook", "../icons/notification-apps/facebook.png"],
    ["twitter", "../icons/notification-apps/twitter.png"],
    ["instagram", "../icons/notification-apps/instagram.png"],
    ["linkedin", "../icons/notification-apps/linkedin.png"],
    ["messenger", "../icons/notification-apps/messenger.png"],
    ["youtube", "../icons/notification-apps/youtube.png"],
    ["mail", "../icons/notification-apps/mail.png"],
    ["tiktok", "../icons/notification-apps/tiktok.png"],
  ];
  let choice = Math.floor(Math.random() * types.length);
}

for (let i = 0; i < saves.length; i++) {
  saved = saves[i];
  saved.addEventListener("click", (e) => {
    notificationcards[i].classList.add("saved");
    e.stopPropagation();
  });
}

for (let i = 0; i < deletes.length; i++) {
  deleted = deletes[i];
  deleted.addEventListener("click", (e) => {
    notificationcards[i].classList.add("deleted");
    e.stopPropagation();
  });
}
