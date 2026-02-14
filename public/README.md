# How to Add Your Personal Images and Audio

## Step-by-Step Instructions:

### For Special Photo:
1. **Download from Google Drive:**
   - Open your Google Drive link
   - Click on the download button (⬇️)
   - Save the image file

2. **Rename the file:**
   - Rename it to exactly `special-photo.jpg`
   - Make sure the extension is `.jpg` (or `.png` works too)

3. **Copy to public folder:**
   - Copy the file to this `public` folder
   - Path should be: `public/special-photo.jpg`

4. **Restart the application**

### For Song/Audio:
1. **Download from Google Drive:**
   - Open your Google Drive links
   - Click on the download button (⬇️)
   - Save the audio files

2. **Convert to MP3 (if needed):**
   - If files are not MP3, convert them using online converter
   - Recommended: https://cloudconvert.com/

3. **Rename the files:**
   - Rename them to exactly:
     - `song1.mp3` (पहला गाना)
     - `song2.mp3` (दूसरा गाना)
     - `song3.mp3` (तीसरा गाना)
   - You can add 1, 2, or all 3 songs

4. **Copy to public folder:**
   - Copy the files to this `public` folder
   - Paths should be: 
     - `public/song1.mp3`
     - `public/song2.mp3`
     - `public/song3.mp3`

5. **Restart the application**

## Why Google Drive Links Don't Work Directly?
- Google Drive links are for viewing/downloading, not for direct embedding
- You need to download the files and host them locally
- This also ensures privacy - files stay on your computer only

## Privacy & Security:
- Files in the `public` folder are only accessible when the application is running
- They are NOT uploaded to any external server
- Only people who have access to your running application can see/hear them
- When you stop the application, files are not accessible from outside

## File Paths Used in Code:
- Image: `/special-photo.jpg`
- Songs: `/song1.mp3`, `/song2.mp3`, `/song3.mp3`

## After Adding Files:
Restart your development server:
```bash
npm run dev
```

Then refresh your browser to see the changes!

