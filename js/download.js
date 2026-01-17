let selected_platform_id = 'platform-linux';
let platform_content;
const platform_tabs = [];

const linux_content = `
<a href="https://github.com/jakerieger/Xen/releases/download/v0.5.5/Xen-0.5.5-linux-x64.tar.gz" class="download-button"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>archive</title><path d="M3,3H21V7H3V3M4,8H20V21H4V8M9.5,11A0.5,0.5 0 0,0 9,11.5V13H15V11.5A0.5,0.5 0 0,0 14.5,11H9.5Z" /></svg></span> Tarball</a>
<a href="https://github.com/jakerieger/Xen/releases/download/v0.5.5/Xen-0.5.5-linux-x64.deb" class="download-button"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>debian</title><path d="M18.5,10.57L18.3,10.94C18.56,10.16 18.41,9.31 18.45,8.57L18.38,8.55C18.31,6.7 16.71,4.73 15.29,4.07C14.06,3.5 12.17,3.4 11.3,3.83C11.42,3.72 11.9,3.68 11.75,3.6C10.38,3.73 10.69,4.07 9.64,4.34C9.35,4.62 10.5,4.12 9.87,4.5C9.31,4.63 9.05,4.38 8.22,5.24C8.29,5.36 8.75,4.89 8.37,5.36C7.58,5.27 5.89,7.16 5.53,7.78L5.72,7.82C5.41,8.59 5,9.08 4.95,9.54C4.87,10.68 4.5,12.75 5.03,13.39L4.97,13.92L5.2,14.37L5.08,14.38C5.66,16.21 5.7,14.42 6.47,16.32C6.36,16.28 6.24,16.24 6.08,16C6.06,16.19 6.32,16.69 6.62,17.08L6.5,17.22C6.66,17.53 6.82,17.6 6.93,17.71C6.3,17.36 7.5,18.84 7.63,19.03L7.73,18.86C7.71,19.1 7.9,19.42 8.26,19.87L8.56,19.86C8.69,20.1 9.14,20.54 9.41,20.56L9.23,20.8C9.92,21 9.56,21.09 10.41,21.39L10.24,21.09C10.67,21.46 10.8,21.79 11.41,22.07C12.26,22.37 12.37,22.25 13.23,22.5C12.5,22.5 11.64,22.5 11.06,22.28C7.1,21.21 3.5,16.56 3.74,11.78C3.68,10.81 3.84,9.6 3.68,9.36C3.9,8.62 4.16,7.72 4.69,6.65C4.65,6.58 4.78,6.86 5.05,6.41C5.21,6.05 5.34,5.66 5.55,5.31L5.65,5.28C5.76,4.67 7.08,3.73 7.5,3.26V3.44C8.36,2.63 9.9,2.09 10.76,1.71C10.53,1.96 11.27,1.68 11.8,1.65L11.31,1.93C11.94,1.77 11.91,2 12.56,1.9C12.33,1.93 12.06,2 12.1,2.06C12.82,2.14 12.94,1.84 13.61,2.06L13.56,1.86C14.5,2.2 14.69,2.14 15.7,2.68C16.06,2.69 16.1,2.46 16.63,2.68C16.73,2.84 16.61,2.87 17.27,3.27C17.34,3.24 17.14,3.05 17,2.9C18.3,3.61 19.75,5.12 20.18,6.74C19.77,6 20.14,7.13 20,7.07C20.18,7.56 20.33,8.07 20.43,8.6C20.31,8.17 20.04,7.12 19.57,6.45C19.54,6.88 18.97,6.15 19.28,7.11C19.5,7.45 19.33,6.76 19.62,7.36C19.62,7.65 19.73,7.94 19.8,8.31C19.7,8.29 19.58,7.9 19.5,8C19.6,8.5 19.77,8.72 19.83,8.76C19.8,8.84 19.71,8.68 19.71,9C19.75,9.74 19.92,9.43 20,9.46C19.91,9.83 19.59,10.25 19.75,10.88L19.55,10.32C19.5,10.85 19.66,10.95 19.42,11.6C19.6,11 19.58,10.5 19.41,10.75C19.5,11.57 18.76,12.2 18.83,12.73L18.62,12.44C18.05,13.27 18.61,12.89 18.22,13.5C18.36,13.27 18.15,13.42 18.33,13.14C18.21,13.15 17.78,13.67 17.39,13.97C15.85,15.2 14,15.37 12.24,14.7H12.23C12.24,14.66 12.23,14.61 12.11,14.53C10.6,13.38 9.71,12.4 10,10.12C10.25,9.95 10.31,9 10.84,8.67C11.16,7.96 12.12,7.31 13.15,7.29C14.2,7.23 15.09,7.85 15.54,8.43C14.72,7.68 13.4,7.45 12.26,8C11.11,8.53 10.42,9.8 10.5,11.07C10.56,11 10.6,11.05 10.62,10.89C10.59,13.36 13.28,15.17 15.22,14.26L15.25,14.31C16.03,14.09 15.93,13.92 16.44,13.56C16.4,13.65 16.1,13.86 16.28,13.86C16.53,13.8 17.31,13.07 17.7,12.73C17.87,12.35 17.6,12.5 17.85,12.04L18.15,11.89C18.32,11.41 18.5,11.14 18.5,10.57" /></svg></span>Package (deb)</a>
<a href="https://github.com/jakerieger/Xen/releases/download/v0.5.5/Xen-0.5.5-linux-x64.rpm" class="download-button"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>hat-fedora</title><path d="M19.11,11.92C19.13,11.71 19.14,11.5 19.14,11.29C19.14,7.86 17.71,4.14 16.28,4.14C14.85,4.14 13.42,5.57 12,5.57C10.57,5.57 9.14,4.14 7.71,4.14C6.28,4.14 4.86,7.79 4.86,11.29C4.86,11.5 4.86,11.71 4.88,11.92C7.22,12.45 9.6,12.72 12,12.71C14.45,12.71 16.83,12.44 19.11,11.92M3.45,18.18C9,19.85 14.96,19.86 20.54,18.18C20.96,18.04 21.33,17.77 21.59,17.41C21.85,17.05 22,16.61 22,16.17C22,15.72 21.86,15.29 21.61,14.92C21.35,14.56 21,14.29 20.56,14.14C17.86,15 15,15.45 12,15.45C9,15.45 6.13,15 3.43,14.14C3,14.29 2.65,14.57 2.39,14.93C2.14,15.29 2,15.72 2,16.17C2,17.11 2.61,17.9 3.45,18.18V18.18Z" /></svg></span> Package (rpm)</a>
`;

const windows_content = `
<a href="https://github.com/jakerieger/Xen/releases/download/v0.5.5/Xen-0.5.5-windows-x64.zip" class="download-button"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>zip-box</title><path d="M14,17H12V15H10V13H12V15H14M14,9H12V11H14V13H12V11H10V9H12V7H10V5H12V7H14M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" /></svg></span> Archive (zip)</a>
<a href="https://github.com/jakerieger/Xen/releases/download/v0.5.5/Xen-0.5.5-windows-x64.exe" class="download-button"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>application-cog</title><path d="M21.7 18.6V17.6L22.8 16.8C22.9 16.7 23 16.6 22.9 16.5L21.9 14.8C21.9 14.7 21.7 14.7 21.6 14.7L20.4 15.2C20.1 15 19.8 14.8 19.5 14.7L19.3 13.4C19.3 13.3 19.2 13.2 19.1 13.2H17.1C16.9 13.2 16.8 13.3 16.8 13.4L16.6 14.7C16.3 14.9 16.1 15 15.8 15.2L14.6 14.7C14.5 14.7 14.4 14.7 14.3 14.8L13.3 16.5C13.3 16.6 13.3 16.7 13.4 16.8L14.5 17.6V18.6L13.4 19.4C13.3 19.5 13.2 19.6 13.3 19.7L14.3 21.4C14.4 21.5 14.5 21.5 14.6 21.5L15.8 21C16 21.2 16.3 21.4 16.6 21.5L16.8 22.8C16.9 22.9 17 23 17.1 23H19.1C19.2 23 19.3 22.9 19.3 22.8L19.5 21.5C19.8 21.3 20 21.2 20.3 21L21.5 21.4C21.6 21.4 21.7 21.4 21.8 21.3L22.8 19.6C22.9 19.5 22.9 19.4 22.8 19.4L21.7 18.6M18 19.5C17.2 19.5 16.5 18.8 16.5 18S17.2 16.5 18 16.5 19.5 17.2 19.5 18 18.8 19.5 18 19.5M11 18C11 14.1 14.1 11 18 11C20 11 21.7 11.8 23 13.1V4C23 2.9 22.1 2 21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H12.3C11.5 20.9 11 19.5 11 18M3 4H21V7H3V4Z" /></svg></span> Installer (exe)</a>
`;

const macos_content = `
<a href="https://github.com/jakerieger/Xen/releases/download/v0.5.5/Xen-0.5.5-macos-x64.tar.gz" class="download-button"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>archive</title><path d="M3,3H21V7H3V3M4,8H20V21H4V8M9.5,11A0.5,0.5 0 0,0 9,11.5V13H15V11.5A0.5,0.5 0 0,0 14.5,11H9.5Z" /></svg></span> Tarball (x64)</a>
<a href="https://github.com/jakerieger/Xen/releases/download/v0.5.5/Xen-0.5.5-macos-arm64.tar.gz" class="download-button"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>archive</title><path d="M3,3H21V7H3V3M4,8H20V21H4V8M9.5,11A0.5,0.5 0 0,0 9,11.5V13H15V11.5A0.5,0.5 0 0,0 14.5,11H9.5Z" /></svg></span> Tarball (arm64)</a>
`;

function get_platform_content() {
    if (selected_platform_id === 'platform-linux') return linux_content;
    else if (selected_platform_id === 'platform-windows') return windows_content;
    else if (selected_platform_id === 'platform-macos') return macos_content;
}

function update_platform_selected() {
    platform_tabs.forEach(tab => {
        if (tab.id === selected_platform_id) {
            tab.className = "platform-select-tab selected";
        } else {
            tab.className = "platform-select-tab";
        }
    });

    platform_content.innerHTML = get_platform_content();
}

function init_platform_tabs() {
    platform_content = document.querySelector('.platform-select-content');
    const linux_tab = document.querySelector('#platform-linux');
    const windows_tab = document.querySelector('#platform-windows');
    const macos_tab = document.querySelector('#platform-macos');
    platform_tabs.push(linux_tab);
    platform_tabs.push(windows_tab);
    platform_tabs.push(macos_tab);

    platform_tabs.forEach(tab => {
        tab.onclick = () => { selected_platform_id = tab.id; update_platform_selected(); };
    });

    update_platform_selected();
}

function initialize() {
    init_platform_tabs();
}

// Execute on window load
window.onload = initialize;