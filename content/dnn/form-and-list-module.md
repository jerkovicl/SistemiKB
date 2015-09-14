/*
Title: Form and List Module
Sort: 1
*/

Form and List (formerly called User Defined Table) is a rich module for creating/managing custom tables with input validation, various field types, etc.  
In other words it allows the user to define a table (a group of columns or fields) that has the capability to store and display records.

### Adding the Module:
- Roll cursor over Module to show drop-down menu
- Select **Form and List**
- Title Module
- Select Pane (suggest Right Wide Pane)
- Add Module

### Form and List Configuration:

- Click **Configuration**
- The following Schema Definition will display:  
![Configuration](%image_url%/FL2.png)

Four system columns are automatically created for every List and Form instance:
> Created by, Created at, Changed by and Changed at.

All four columns are **required** by Form and List for tracking records.  
These columns **can be renamed** but they **cannot be deleted**.  
By default, these columns do not display to users unless **Display on List** is enabled.

Listed just below the columns, the Privacy setting is enabled by default.  
If you would like to keep the data stored in the Form and List instance from appearing to users searching with DNN portal search function, keep this setting enabled.  
When Form and List is used in form mode to collect info from users that is not intended for display to any other users, enabling Privacy keeps the data secure.

### Adding New Columns:

- Choose Data Type
- Set whether it is **Required**, **Display on List**, **Restricted Form Field**, and **Searchable**, by enabling or disabling the property checkbox.
- Click **Save Configuration and Return** once all columns are defined
- Now on table simply click **Add New Record**  
![Column setup](%image_url%/FL3.png)

Additional info can be found [here](http://techhubkb.ops.org/kb/a162/form-and-list-module.aspx).
