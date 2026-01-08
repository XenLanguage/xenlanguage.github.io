/** @type {Array<{title: string, content: string}>} */
const linux_cmd_tabs = [
    { title: "cURL", content: "curl -f https://raw.githubusercontent.com/jakerieger/Xen/refs/heads/gh-pages/install.sh | sh" },
    { title: "wget", content: "wget -O- https://raw.githubusercontent.com/jakerieger/Xen/refs/heads/gh-pages/install.sh | sh" },
];

/** @type string[] */
const cmd_tab_titles = [];
/** @type HTMLPreElement **/
let cmd_content;


/** @param {HTMLDivElement} selected */
function update_cmd_selected(selected) {
    selected.className = "tab-title selected";
    cmd_tab_titles.forEach(title => {
        if (title.id != selected.id) {
            title.className = "tab-title";
        }
    });

    if (cmd_content != null && cmd_content != undefined) {
        const tab = linux_cmd_tabs.find(({ title }) => title === selected.id);
        cmd_content.innerText = tab.content;
    }
}

function init_cmd_tabs() {
            /** @type HTTMLDivElement **/
    const tabbox = document.getElementById('linux-install-command-tabbox');
    /** @type HTTMLDivElement **/
    const tabbox_tabs = tabbox.querySelector('.tab-box-tabs');
    /** @type HTTMLDivElement **/
    const tabbox_content_container = tabbox.querySelector('.tab-box-content');

    cmd_content = document.createElement("pre");
    tabbox_content_container.appendChild(cmd_content);

    let first_tab;

    linux_cmd_tabs.forEach(tab => {
        /** @type HTMLDivElement */
        const title_el = document.createElement("div");

        title_el.id = tab.title;
        if (tab.title === linux_cmd_tabs[0].title) {
            title_el.className = "tab-title selected";
            first_tab = title_el;
        } else {
            title_el.className = "tab-title";
        }
        title_el.innerText = tab.title;
        title_el.onclick = () => { update_cmd_selected(title_el); };
        tabbox_tabs.appendChild(title_el);
        cmd_tab_titles.push(title_el);
    });

    update_cmd_selected(first_tab);
}

function initialize() {
    init_cmd_tabs();
}

// Execute on window load
window.onload = initialize;