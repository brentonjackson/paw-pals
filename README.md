# paw-pals

Web app that allows dog owners to set up playdates for their dogs

## Tech:

- React for frontend
  - Socket.io-client for chat
  - Bootstrap, Tailwind, other CSS framework
- Node.js / Express for backend
  - Socket.io for real-time chat
- MySQL for RDBMS

## Views:

- Navbar (across all pages)
  - Hamburger for mobile
  - If logged in, display username
  - Logout Button
    - Redirect to Landing Page
- Landing Page/Sign In/Sign Up Page (only page visible for non signed in users)
  - Landing Page Component
  - Sign Up / Login Buttons
  - Sign In Form
    - If hasProfile, redirect to Swipe page
    - Else, redirect to Create Profile page
  - Sign Up Form
    - First/Last Name, Username, Password
    - Redirect to Create Profile page
- Edit User Account (different from profile actions)
  - Bottom of Profile component
  - User Account Component (display account data)
    - Everything read-only except password
  - Change Password Form
- Create/Edit/Delete Profile
  - Profile Component
  - Create Profile Form
  - Edit Profile Form
  - Delete Profile Button
- View unmatched profiles / Swipe
  - ProfilesList component
    - Animations for profile transitions
    - Iterate through revolving circle of profiles
    - Buttons for traversing profiles
      - Left (prev)
      - Right (next)
      - Like/Match (if profile already liked you)
      - no dislike button
    - Animation for liking/matching profile
- Chat page
  - ChatPage component
  - Matches List component
  - Chat Window component to view messages
  - Chat Bar component to enter chats
- Bottom TabSelection component on mobile, top TabSelection component on desktop
  - Sticky for navigation
  - Views rendered inside tabs
  - Navigate from Profile/Swipe/Chat pages
  - useTransition hook to transition between tabs
  - 3 options, rendered after redirecting from Landing Page
