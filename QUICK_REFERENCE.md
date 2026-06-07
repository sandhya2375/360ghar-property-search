# 360Ghar - Quick Reference Cheat Sheet 📋

Use this while working on the project. Keep it handy!

---

## 🎯 Project Overview (One Glance)

**What**: AI-powered property search assistant  
**Stack**: React + OpenRouter LLM + Web Speech API  
**Duration**: 2-3 days  
**Model**: Mistral 7B Instruct (free)  
**Demo**: Loom video (2-3 min)  

---

## 🚀 Quick Setup

```bash
npx create-react-app 360ghar-property-search
cd 360ghar-property-search
npm install
npm start
```

Then copy `360ghar-app.jsx` → `src/App.js`

---

## 📋 Required Files (Checklist)

- [ ] `src/App.js` (React component)
- [ ] `package.json` (dependencies)
- [ ] `README.md` (documentation + prompt notes)
- [ ] `public/index.html` (basic template)
- [ ] `.gitignore` (exclude node_modules)
- [ ] `LOOM_WALKTHROUGH.md` (video guide)

---

## 🔑 Key Features to Demo

| Feature | How to Show |
|---------|------------|
| **Text Search** | Type query → click search → results appear |
| **Voice Search** | Click 🎙️ → speak → transcription fills input |
| **Property Cards** | Show match badges, hover effects |
| **Detail Modal** | Click property → see amenities + AI summary |
| **Responsiveness** | Resize browser, show grid adapts |

---

## 🧠 LLM Integration (Remember!)

**Parsing Prompt** (Temperature: 0.3)
```
Return ONLY JSON with these fields:
- bhk, location, maxPrice, minPrice, amenities, sunlight, nearSchool, nearMarket
```

**Summary Prompt** (Temperature: 0.7)
```
Write 2-3 lines referencing the user's original query.
Make it feel personalized.
```

**Model**: `mistralai/mistral-7b-instruct:free`

---

## 🎬 Loom Video Structure (2-3 min)

1. **Intro** (15 sec): "This is 360Ghar..."
2. **Text Search** (40 sec): Query → Results → Explain badges
3. **Voice Search** (20 sec): Click mic → Speak → Trigger search
4. **Detail Modal** (40 sec): Click property → Show summary
5. **Bonus** (20 sec): Show polish and animations
6. **Different Query** (20 sec): Show robustness
7. **Close** (15 sec): Complete flow

**Total**: 2:30-3:00

---

## 🎨 UI Polish Checklist

- [ ] Smooth hover effects on cards
- [ ] Modal slides in/out elegantly
- [ ] Loading spinner displays while API calls
- [ ] Colors are consistent (teal, coral, gold)
- [ ] Text is readable (good contrast)
- [ ] Spacing feels intentional
- [ ] No janky animations
- [ ] Voice button gives feedback

---

## 🔗 GitHub Checklist

- [ ] Repo created and public
- [ ] `README.md` with setup + prompt notes
- [ ] `package.json` included
- [ ] `src/App.js` has full component
- [ ] `.gitignore` excludes node_modules
- [ ] No API keys in code (check with grep!)
- [ ] Commit messages are clear
- [ ] README has Loom link

---

## 📝 README Key Sections

```markdown
# 360Ghar Property Search

## Quick Start
```bash
npm install && npm start
```

## Architecture
[Simple flow diagram or description]

## LLM Prompt Design
- Parsing: Temperature 0.3, explicit JSON schema
- Summaries: Temperature 0.7, personalized
- Model: Mistral 7B (free tier)

## Features
- Text search
- Voice input
- Property details
- AI summaries

## Tech Stack
- React 18
- OpenRouter API
- Web Speech API
```

---

## 🧪 Testing Queries

Try these to verify everything works:

1. **Simple**: "2BHK in Sector 50, under 80 lakhs"
2. **Complex**: "3BHK with pool and gym, good light, near school, around 1 crore"
3. **Vague**: "affordable family home with green space"
4. **Voice**: Speak any of the above

Expected: Properties appear with match badges

---

## 🚨 If Something Breaks

| Problem | Fix |
|---------|-----|
| `npm install` fails | Delete `node_modules` & `package-lock.json`, reinstall |
| App won't start | Check for syntax errors in `App.js` |
| Voice doesn't work | Try Chrome (Firefox doesn't support Web Speech API) |
| API calls slow | Normal for free tier; mention in README |
| LLM returns bad JSON | Error handled gracefully with fallback |
| Modal won't open | Check if `selectedProperty` state is set |

---

## 📱 Responsive Design

React grid handles it automatically:
```css
gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))'
```

This means:
- **Desktop** (1200px+): 4 columns
- **Tablet** (768px+): 2-3 columns
- **Mobile** (320px+): 1 column

Test by resizing browser window.

---

## 🎯 What Evaluators Look For

✅ **Will impress:**
- Smooth, polished UI
- Clear LLM prompt explanation
- Complete feature flows
- Confident Loom explanation
- Clean code with readable logic

❌ **Will hurt:**
- Broken setup instructions
- No explanation of prompts
- Janky interactions
- Mumbling in video
- API keys in code

---

## 💻 Git Commands (Quick Ref)

```bash
# Initialize repo
git init
git add .
git commit -m "Initial: 360Ghar property search"

# Push to GitHub
git remote add origin https://github.com/USERNAME/repo.git
git branch -M main
git push -u origin main

# Later updates
git add .
git commit -m "Feature: Added voice input"
git push
```

---

## 📊 Deliverables Checklist

**GitHub Repo** ✓
- [ ] Public or shared access
- [ ] Clean structure
- [ ] README with all sections
- [ ] No node_modules committed
- [ ] No API keys exposed

**Loom Video** ✓
- [ ] 2:30-3:00 duration
- [ ] Clear audio
- [ ] All features shown
- [ ] Confident speaking
- [ ] Link in README

**Prompt Design Notes** ✓
- [ ] 5-10 lines in README
- [ ] Explains parsing approach
- [ ] Explains summary approach
- [ ] Justifies model choice
- [ ] Mentions what didn't work

---

## 🎁 Bonus Feature Ideas (You Have Voice!)

✅ **Your choice: Voice Input**
- Click 🎙️ button
- Speak naturally
- Transcription fills input
- Auto-triggers search
- Shows value: hands-free property browsing

Other ideas (not chosen):
- Side-by-side comparison mode
- Similar properties suggestion rail
- Shareable search links
- Follow-up questions from AI

---

## ⏱️ Timeline Quick Guide

**Day 1** (5 hours)
- Setup React app
- Integrate code
- Test all features
- Prepare GitHub

**Day 2** (4 hours)
- Push to GitHub
- Verify setup instructions
- Polish code & docs
- Final testing

**Day 3** (2-3 hours)
- Record Loom video
- Upload and share
- Final submission

---

## 🗣️ Loom Talking Points

**Say this in your video:**

1. **Intro**: "I built an AI property search using React and OpenRouter"

2. **Search Flow**: "Natural language gets parsed by LLM into structured filters"

3. **Match Badges**: "These show why the property matches your query, not just filtered results"

4. **Summary**: "This is generated by LLM in real-time, personalized to your original query"

5. **Voice**: "Web Speech API for hands-free browsing"

6. **Code**: "Clean React component, no bloated dependencies"

7. **Closing**: "Complete, polished prototype ready to ship"

---

## 🔐 Security Checklist

Before submitting:
```bash
# Check for API keys
grep -r "sk-" src/
grep -r "api_key" src/
grep -r "password" src/

# Both should return nothing!
```

---

## 📞 File Reference

| Need | File |
|------|------|
| Main code | `360ghar-app.jsx` |
| Docs | `README.md` |
| Setup | `package.json` |
| Video script | `LOOM_WALKTHROUGH.md` |
| Repo guide | `GITHUB_SUBMISSION_GUIDE.md` |
| Action plan | `ACTION_PLAN.md` |
| This sheet | `QUICK_REFERENCE.md` |

---

## 🎯 Success = This Checklist

- [ ] App runs without errors
- [ ] Text search works
- [ ] Voice search works
- [ ] Property details show AI summary
- [ ] GitHub repo is clean and public
- [ ] README explains LLM choices
- [ ] Loom video is clear and confident
- [ ] No API keys in code
- [ ] Setup instructions verified

✅ All checked? **Submit!**

---

## 🚀 You're Ready!

Everything is set up. Just execute.

1. Create React app
2. Copy code to `src/App.js`
3. Test thoroughly
4. Push to GitHub
5. Record Loom
6. Submit

**Go build!** 💪
