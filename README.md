
# CulinaryCompass — Product Specification
## CORE FUNCTIONALITY

### 1.  Recipe Management
    
Users can:
-   Create recipes, edit recipes, generate recipes, and delete recipes
-   View recipes as clean, draggable cards

Each recipe includes:
-   Name
-   Ingredients (structured: qty, unit, name)
-   Cooking Steps (ordered)
-   Base portions (can be scaled up or down automatically by the web app)
-   Tags (flexible, user-defined)
-   Protein type
-   Source (manual, URL, AI, or import)

### 2.  Recipe Input Methods
-   Manual Entry: Simple form-based creation with ingredient + cooking step rows.
-   URL Import (AI-assisted): User pastes a URL, AI generates a structured recipe based on it, User reviews and edits before saving
-   Plain Text Import: User pastes raw recipe text, AI parses into structured format of Ingredients and cooking steps. User then confirms/edit before saving

### 3.  Tagging System
    

This is a flexible, non-restrictive system:
 -   Users define their own tags (e.g. pasta, quick, high-protein)
 -   Tags are used for:
 -   Filtering
 -   Search
 -   Organisation
   
### 4.  Protein System (Visual Identity)
This is a fixed system, selected from a drop-down. Each recipe has a single protein type, shown as a color-coded badge:
 -   Chicken → Yellow #f0ca02
 -   Fish → Blue #0264d4
 -   Vegetarian → Green #008a15
 -   Vegan → Light green #4dff67
 -   Pork → Pink #c9009a
 -   Beef → Red-orange #f04d24
 
Purpose:
 -   Instant visual scanning
 -   Strong UI consistency
 -   Replaces need for protein tags
    
### 5.  Recipe Cards
Each recipe is displayed as a card with:
   -   Name
   -  Protein badge (top right)
   -   Tags (non-protein only)
   -   Base portions

Expandable section shows:
-   Ingredients
-   Steps
-   Source

Interactions:
-   Hover lift effect
-   Expand/collapse animation
-   Drag-and-drop enabled

### 6.  Weekly Planner System
Weeks are defined as: “Week commencing: [Monday date]”
Users can:
-   Create weeks
-   Delete weeks (custom confirm modal, not browser alert)
-   View all weeks in a scrollable list

Each week shows:
-   Total recipes
-   Lunch/dinner split
-   Expandable recipe entries

### 7.  Drag & Drop
Users drag recipes into weeks via sidebar.

Behaviour:
-   Smooth drag animation (no lingering states)
-   Drop zone highlights on hover
-   No duplicate recipes allowed per week
-   Visual feedback during drag

On drop:
A modal appears: “How many portions?”
-   Default = base portions 
-   User adjusts with + / –
-   Live preview of scaled ingredients

### 8. Portion Scaling (Per Week Instance)
Scaling is applied:
scaled_qty = base_qty × (selected_portions / base_portions)

Important:
-   Scaling does NOT modify the original recipe
-   Each week stores its own portion values
 
### 9. Week View (“By Week” Tab)
Each week contains:
-   Drop zone (top)
-   Recipe list below

Each recipe entry:
-   Name
-   Portion count
-   Quick actions
-   View (expand)
-   Remove (styled X button)

Expandable view shows:
-   Scaled ingredients
- Cooking Steps

### 10. Shopping List (Per Week)
Auto-generated from all recipes in a week:
-   Combines duplicate ingredients
-   Sums quantities (baring in mind scaling)
-   Displays clean list

### 11. Cost Estimation (ASDA UK)
-   Each ingredient mapped to approximate price
-   Total weekly cost displayed
-   MVP uses static estimates

### 12. Meal Generator System
Meal Idea Generator
-   Generates "new" ideas only (from hidden meal bank in code, but ignores ones already in user's library. Bank is at 100 meals thus far)
-   Optional prompt input which keyword matches

Output:
-   Name
-   Tags
-   Protein
-   Ingredients
-   Steps

User can:
-   Save directly to recipes
-   Generate another

Random Week Generator
-   Generates a full week of meals

Ensures:
-   No duplicates
-   Balanced variety

### 13. Navigation Structure
Tabs:
-  By Week
    -   Main planning interface
    -   Drag + drop workflow

- Recipes
    -   Full library
    -   Search + tag filtering

- Meal Generator
    -   AI tools
    -   Idea + week generation
