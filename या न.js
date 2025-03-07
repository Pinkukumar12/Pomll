// Function to generate the HTML code based on the input values
function generateCode() {
    var appName = document.getElementById('appName').value;
    var appPublisher = document.getElementById('appPublisher').value;
    var appGenre = document.getElementById('appGenre').value;
    var appSize = document.getElementById('appSize').value;
    var appVersion = document.getElementById('appVersion').value;
    var modInfo = document.getElementById('modInfo').value;
    var googlePlayLink = document.getElementById('googlePlayLink').value;
    var megaDownloadLink = document.getElementById('megaDownloadLink').value;
    var appImage = document.getElementById('appImage').value;
    var appDescription = document.getElementById('appDescription').value;

    // Get all screenshot input fields
    var screenshotInputs = document.querySelectorAll('#screenshotContainer input');
    if (screenshotInputs.length < 6) {
        alert("Please add at least 6 screenshots!");
        return;
    }

    var screenshotHTML = "";
    screenshotInputs.forEach(input => {
        let url = input.value.trim();
        if (url) {
            screenshotHTML += `
            <div class="col-auto col-small">
                <a data-fancybox="gallery" href="${url}">
                    <img style="max-height: 300px;" loading="lazy" src="${url}" alt="${appName}">
                </a>
            </div>`;
        }
    });

    var htmlCode = `


 

<table class="table table-striped table-borderless" style="border-collapse: collapse; color: #212529; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15px; margin-bottom: 1rem; outline: none !important; width: 343.636px;"><tbody style="box-sizing: border-box; outline: none !important;"><tr style="background-color: rgba(0, 0, 0, 0.05); box-sizing: border-box; outline: none !important;"><th style="border: 0px; box-sizing: border-box; font-size: 1rem; outline: none !important; padding: 0.625rem; text-align: inherit; vertical-align: top; width: 154.636px;">App Name</th><td style="border: 0px; box-sizing: border-box; outline: none !important; padding: 0.625rem; vertical-align: top; width: 189px;">${appName}</td></tr><tr style="box-sizing: border-box; outline: none !important;"><th style="border: 0px; box-sizing: border-box; font-size: 1rem; outline: none !important; padding: 0.625rem; text-align: inherit; vertical-align: top; width: 154.636px;">&nbsp;Publisher</th><td style="border: 0px; box-sizing: border-box; outline: none !important; padding: 0.625rem; vertical-align: top; width: 189px;"><a href="https://www.bhaukaal-store.net/search?q=${appPublisher}&m=1" rel="tag" style="box-sizing: border-box; color: #7bbf3a; outline: none !important; text-decoration-line: none; transition: 0.3s;">${appPublisher}</a></td></tr><tr style="background-color: rgba(0, 0, 0, 0.05); box-sizing: border-box; outline: none !important;"><th style="border: 0px; box-sizing: border-box; font-size: 1rem; outline: none !important; padding: 0.625rem; text-align: inherit; vertical-align: top; width: 154.636px;">&nbsp;Genre</th><td style="border: 0px; box-sizing: border-box; outline: none !important; padding: 0.625rem; vertical-align: top; width: 189px;"><a href="https://www.bhaukaal-store.net/search?q=${appGenre}&m=1" rel="tag" style="background-color: transparent; box-sizing: border-box; color: #7bbf3a; outline: none !important; text-decoration-line: none; transition: 0.3s;">${appGenre}</a></td></tr><tr style="box-sizing: border-box; outline: none !important;"><th style="border: 0px; box-sizing: border-box; font-size: 1rem; outline: none !important; padding: 0.625rem; text-align: inherit; vertical-align: top; width: 154.636px;">Size</th><td style="border: 0px; box-sizing: border-box; outline: none !important; padding: 0.625rem; vertical-align: top; width: 189px;">${appSize}</td></tr><tr style="background-color: rgba(0, 0, 0, 0.05); box-sizing: border-box; outline: none !important;"><th style="border: 0px; box-sizing: border-box; font-size: 1rem; outline: none !important; padding: 0.625rem; text-align: inherit; vertical-align: top; width: 154.636px;">&nbsp;Latest Version</th><td style="border: 0px; box-sizing: border-box; outline: none !important; padding: 0.625rem; vertical-align: top; width: 189px;">${appVersion}</td></tr><tr style="box-sizing: border-box; outline: none !important;"><th style="border: 0px; box-sizing: border-box; font-size: 1rem; outline: none !important; padding: 0.625rem; text-align: inherit; vertical-align: top; width: 154.636px;">MOD Info</th><td style="border: 0px; box-sizing: border-box; outline: none !important; padding: 0.625rem; vertical-align: top; width: 189px;">VIP Unlocked, AD-Free</td></tr></table>

    <div class="overflow-auto mb-3">
        <div class="row row-small flex-nowrap align-items-end">
            ${screenshotHTML}
        </div>
    </div>
    
        <div class="description-text">
      <p>Click the button below to read more about the app and its features.</p>
    </div>
    
    <!--Click to View Description Section-->
    <details>
      <summary>Click to View Description</summary>
      ${appDescription}
    </details>

   
    <div id="ITE_x98">
        <img alt="How to Download Steps" src="https://i.postimg.cc/ZnPrn7bH/How-To-Download-20250107-180256-0000.png" />
    </div>

    <div class="U_mn45">
        <button id="mNO_qz7" onclick="XZQ_rt12()">Download Now</button>
    </div>

    <div id="wXY_56">10</div>
    <div id="PQR_t78">Waiting...</div>
    <div class="Lmn_982"><div id="Zxc_159"></div></div>

    <div id="Abc_743">
        <button id="VWX_129">
            <a href="${megaDownloadLink}">Download Now</a>
        </button>
    </div>
     <script> let countdown = 10;
let progress = 0;
let interval;
const timerElement = document.getElementById('wXY_56');
const progressBar = document.getElementById('Zxc_159');
const downloadBtn = document.getElementById('mNO_qz7');
const downloadButtons = document.getElementById('Abc_743');
const progressContainer = document.querySelector('.Lmn_982');
const waitingText = document.getElementById('PQR_t78');
const banner = document.getElementById('ITE_x98');

function XZQ_rt12() {
    // Show the banner with image
    banner.style.display = 'block';

    // Hide the initial Download button
    downloadBtn.style.display = 'none';

    // Show the countjdown timer and progress bar
    timerElement.style.display = 'flex';  // अब ही दिखेगा
    progressContainer.style.display = 'block';
    waitingText.style.display = 'flex';  // अब ही दिखेगा

    countdown = 10;
    progress = 0;
    timerElement.innerText = countdown;
    progressBar.style.width = '0%';

    interval = setInterval(function () {
        countdown--;
        progress += 10;

        timerElement.innerText = countdown;
        progressBar.style.width = progress + '%';

        if (countdown <= 0) {
            clearInterval(interval);
            timerElement.style.display = 'none';
            progressContainer.style.display = 'none';
            waitingText.style.display = 'none';
            downloadButtons.style.display = 'block';
        }
    }, 1000);
}
  </script>
    

`;

    // Display the generated HTML code in the output section
    document.getElementById('htmlCode').textContent = htmlCode;
    document.getElementById('generatedCode').style.display = 'block';
}

// Function to copy the generated code to clipboard
function copyToClipboard() {
    var code = document.getElementById('htmlCode').textContent;
    var textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Optionally, you can change the button text to indicate success
    alert("Code copied to clipboard!");
}