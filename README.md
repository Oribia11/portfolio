# Personal Website Structure

## File Organization

### Main Files
- `main_page.html` - Main portfolio page (now much cleaner!)
- `profile_pic.png` - Profile picture

### Projects Folder (`/projects/`)
This folder contains all project-related files to keep the main HTML clean and organized:

- `project1-modal.html` - Smart Irrigation System modal content
- `project2-modal.html` - Custom Macro Keyboard modal content  
- `project3-modal.html` - BLE Environmental Monitor modal content
- `project4-modal.html` - Retro Game Console modal content
- `modal-loader.js` - JavaScript that dynamically loads all project modals

## How It Works

1. **Dynamic Loading**: The `modal-loader.js` script automatically loads all project modal HTML files when the page loads
2. **Modular Design**: Each project modal is in its own file, making it easy to edit individual projects
3. **Clean Main File**: The main HTML file is now much shorter and easier to maintain
4. **Event Handling**: All modal functionality (open, close, escape key, outside click) is handled by the loader

## Benefits

- ✅ **Easier Maintenance**: Edit individual project details without scrolling through massive file
- ✅ **Better Organization**: Logical separation of content
- ✅ **Cleaner Code**: Main HTML file is no longer 1000+ lines
- ✅ **Modular Updates**: Add/remove projects by adding/removing files in projects folder
- ✅ **Same Functionality**: All modal features work exactly the same as before

## Adding New Projects

1. Create a new `projectX-modal.html` file in the `/projects/` folder
2. Add the project card to the main HTML file
3. Update the `modal-loader.js` file to include the new project file
4. The modal will automatically load and work with existing event handlers

## File Structure
```
Website code/
├── main_page.html
├── profile_pic.png
└── projects/
    ├── project1-modal.html
    ├── project2-modal.html
    ├── project3-modal.html
    ├── project4-modal.html
    └── modal-loader.js
```
