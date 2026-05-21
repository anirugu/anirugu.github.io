---
title: "SaaS Interface in HTML6 for Uploading Files"
date: 2013-11-04T12:00:00-04:00
categories:
  - blog
tags:
  - .NET
  - HTML
  - Windows
---
*[This post is a concept study exploring an imaginary feature integration.]*

Since Windows XP, the operating system has featured a "Send to" option in the right-click context menu (which is still present in Windows 7 and Windows 8). This allows you to select a file, right-click, and quickly send it to various destinations like a flash drive, a Desktop shortcut, or installed apps (like Skype). This shows how third-party applications can register with the operating system to simplify file transfers.

<a href="https://gwb.blob.core.windows.net/anirugu/Windows-Live-Writer/Sass-interface-in-html6_7255/Untitled1_2.png"><img src="/2013_11_04_sass_interface_in_html6_Image1.png" alt="Send To Context Menu" title="Send To" /></a>

Today, many people rely on cloud storage and online tools to store files. However, modern HTML5 drag-and-drop file uploaders require you to have the website open and navigate to the specific upload page first.

This drag-and-drop approach works fine if you are already on the site, but it is less convenient when you want to upload files without keeping the browser tab open.

In this post, I want to propose a concept for a built-in browser/OS integration: the **SaaS File Upload API**. If a website supports this API, visiting the site will prompt the browser to register an OS-level integration, allowing you to upload files directly from your system explorer.

### How It Works

This feature would be activated based on two rules:

1. **User Consent:** The feature is disabled by default for each website until explicitly allowed by the user.
2. **Site Rules:** The API respects site-specific rules, such as file size limits and allowed file extensions (e.g., a resume site might restrict uploads to `.doc` or `.pdf` formats).

### How the Browser Detects SaaS Upload Support

The website would declare its SaaS upload endpoint using a metadata tag in the HTML source:

```html
<meta name="sass-upload-api" path="/upload.json"/>
```

The referenced `upload.json` file defines the rules and routes for the service:

```json
{
  "cookie_name": "ck_file",
  "maximum_allowed_perday": 24,
  "allowed_file_extensions": "*.png,*.jpg,*.jpeg,*.gif",
  "method": [
    {
      "get": "file/get",
      "routing": "/file/get/{fileName}"
    },
    {
      "post": "file/post",
      "routing": "/file/post/{fileName}"
    },
    {
      "delete": "file/delete",
      "routing": "/file/delete/{fileName}"
    },
    {
      "put": "file/put",
      "routing": "/file/put/{fileName}"
    },
    {
      "all": "file/all",
      "routing": "/file/all/{fileName}"
    }
  ]
}
```

* **Authentication:** The defined `cookie_name` would be shared with the OS-level helper service so that files are securely uploaded to your authenticated account without exposing your other browser cookies.
* **Routes:** The endpoints handle GET, POST, DELETE, and PUT actions, allowing you to view your remote directories as a virtual folder structure locally.

Once the API is active for a site like **example.com**, the operating system's file explorer would include a "Send to example.com" option in the right-click menu. Selecting this option would open a lightweight dialog showing the destination folders and upload progress without needing to open the full web browser.

For performance and reliability, large files could be transferred over FTP or specialized background protocols.

### Why This is Useful

1. **Inline File Selection:** When writing a post on a site like Stack Overflow, instead of searching your hard drive through a file picker, you could immediately select from files you recently pushed to your site's temporary storage.
2. **Simplified Cloud Backups:** You could back up files to your favorite cloud service straight from your desktop, eliminating the need to drag files into browser windows.

<img src="/2013_11_04_sass_interface_in_html6_Image3.png" alt="Smile" /> This concept remains in the experimental phase. I will update this post as the specifications evolve.
