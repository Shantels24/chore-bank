# Chore Bank setup guide (iPhone)

About 20–30 minutes, once. Everything can be done in Safari on your iPhone. Both services are free: **Firebase** holds your family's chores, photos and money, and **GitHub** hosts the app itself.

---

## Step 1: Put the app files on GitHub (free hosting)

1. In Safari, go to **github.com** and create a free account.
2. Tap **+** (top right) → **New repository**.
   - Name: `chore-bank`
   - Choose **Public** (GitHub's free hosting needs this; your family's data is NOT stored here, only the app's code).
   - Tap **Create repository**.
3. On the new page, tap **uploading an existing file**.
4. Tap **choose your files**, go to the unzipped `chore-bank` folder in the Files app, select **all the files**, and tap **Open**. Then tap **Commit changes**.
5. Go to **Settings** → **Pages**. Under **Branch**, pick **main** and **/ (root)**, then tap **Save**.
6. After a minute or two, the Pages screen shows your app's address, like `https://yourname.github.io/chore-bank/`. Write it down.

## Step 2: Create your family database on Firebase

1. Go to **console.firebase.google.com** and sign in with your Google account.
2. Tap **Create a project**, name it `Chore Bank`, and turn Google Analytics **off**. Tap **Create project**.
3. **Turn on sign-in:** in the left menu, tap **Build → Authentication → Get started**. Under **Sign-in method**, tap **Anonymous**, switch it **on**, and tap **Save**.
4. Still in Authentication, open **Settings → Authorized domains → Add domain** and add `yourname.github.io` (your address from Step 1, with no `https://` and no `/chore-bank`).
5. **Create the database:** tap **Build → Firestore Database → Create database**. Pick a location near you (for example `us-central`), choose **Start in production mode**, and tap **Create**.
6. **Lock it down:** in Firestore, open the **Rules** tab. Delete what's there, paste everything from the file **firestore.rules**, and tap **Publish**.

## Step 3: Connect the app to your database

1. In Firebase, tap the **gear icon → Project settings**. Under **Your apps**, tap the **web icon `</>`**, name it `Chore Bank`, and tap **Register app** (skip Firebase Hosting).
2. You'll see a block of code with `apiKey`, `authDomain`, `projectId` and so on. Keep that screen open.
3. In another tab, open your GitHub repository, tap **config.js**, then tap the **pencil icon** to edit.
4. Replace each `PASTE_HERE` with the matching value from Firebase, keeping the quote marks.
5. Tap **Commit changes**. Wait a minute for GitHub to update the app.

## Step 4: Install it on each iPhone

1. Open your app address in **Safari** (it must be Safari).
2. Tap the **Share** button → **Add to Home Screen** → **Add**.
3. Open **Chore Bank** from the home screen.
   - **Your phone:** tap **Add me**, enter your name, and choose a 4–8 digit **grown-up PIN**. Only grown-ups with the PIN can approve jobs or change the schedule.
   - **Each kid's phone:** tap **Who's here?** and pick their name.

Ma'kayla, Jahari, Kazlyn and all six jobs from your cleaning chart load automatically the first time.

---

## Good to know

- **Keep the app address private.** Anyone with the address can open your family's chart.
- **Photos:** kids add at least one photo before a job goes to you. They can take a new one or pick from their library.
- **Free limits:** Firebase's free plan covers a family easily. To stay well inside it, tap **Family → Delete photos older than 60 days** every couple of months. Job history and money totals stay.
- **Changing jobs, pay or days:** sign in as a grown-up and use **Family → Edit**.
- **Updating the app later:** upload the new files to the same GitHub repository. Phones pick up the new version the next time the app opens with internet.
- **If the app says it can't connect:** check that Anonymous sign-in is on (Step 2.3) and that the rules were published (Step 2.6).
