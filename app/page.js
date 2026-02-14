'use client'
import { useState } from 'react'
import styles from './page.module.css'

const stages = [

{
  question: "जब आप मेरे बारे में सोचते हो, आपके दिल में सबसे पहले क्या भावना आती है?",
  correct: 1,
  options: [
    { text: "मुस्कान", message: "आपकी मुस्कान ही मेरी दुनिया की रोशनी है 😊" },
    { text: "सुकून", message: "आपको सुकून देना ही मेरी सबसे प्यारी जिम्मेदारी है 🫂" },
    { text: "विश्वास", message: "आपका विश्वास मेरे लिए एक बड़ा उपहार है ✨" },
    { text: "अपनापन", message: "आपका अपनापन मुझे घर जैसा एहसास देता है 🏡" }
  ]
},

{
  question: "हमारे रिश्ते की सबसे बड़ी ताकत क्या है?",
  correct: 3,
  options: [
    { text: "समय", message: "आपके साथ बिताया हर पल मेरे लिए अनमोल है ⏳" },
    { text: "भावनाएँ", message: "हमारी भावनाएँ ही हमारे रिश्ते की आत्मा हैं 💫" },
    { text: "विश्वास", message: "आपका भरोसा मेरे जीवन की नींव है 🤝" },
    { text: "ईश्वर का आशीर्वाद", message: "हाँ… सच में, ईश्वर का आशीर्वाद ही हमें हर मुश्किल से बचाता है ✨" }
  ]
},

{
  question: "अगर जीवन एक यात्रा है, तो आप मुझे क्या मानते हो?",
  correct: 3,
  options: [
    { text: "राहगीर", message: "अगर मैं राहगीर भी हूँ, तो भी आपकी राहों में रहना चाहूँगा 🌿" },
    { text: "साथी", message: "आपका साथी बनना मेरे लिए गर्व की बात है 🤍" },
    { text: "मार्गदर्शक", message: "अगर मैं आपका मार्गदर्शक बन सकूँ, तो मेरा जीवन सफल है ✨" },
    { text: "हमसफर", message: "आपके जीवन का हमसफर बनना ही मेरी सबसे बड़ी चाहत है 🌸" }
  ]
},

{
  question: "मेरे साथ होने पर आपको सबसे ज़्यादा क्या महसूस होता है?",
  correct: 3,
  options: [
    { text: "खुशी", message: "आपकी खुशी ही मेरी सबसे बड़ी जीत है 😊" },
    { text: "हिम्मत", message: "अगर मैं आपको हिम्मत दे सकूँ तो मेरा होना सफल है 💪" },
    { text: "शांति", message: "आपको शांति मिले, यही मेरी हर दुआ है 🕊️" },
    { text: "पूर्णता", message: "अगर मैं आपको पूर्णता का एहसास दिला सकूँ, तो मेरा जीवन सफल है 🫂" }
  ]
},

{
  question: "अगर भगवान आपसे पूछें कि आपको क्या चाहिए, तो आप क्या कहेंगी?",
  correct: 3,
  options: [
    { text: "सुख", message: "आपका सुख ही मेरी सबसे प्यारी इच्छा है 🌷" },
    { text: "शांति", message: "आपकी शांति के लिए मैं हर दिन प्रार्थना करूँगा 🙏" },
    { text: "सफलता", message: "आपकी हर सफलता पर मुझे सबसे ज़्यादा गर्व होगा 🌟" },
    { text: "हमारा साथ", message: "अगर आपकी दुआ में हमारा साथ है, तो मैं दुनिया का सबसे भाग्यशाली इंसान हूँ 🫂" }
  ]
},

{
  question: "हमारे रिश्ते को आप किस रूप में महसूस करते हो?",
  correct: 2,
  options: [
    { text: "भावना", message: "हमारी भावना ही हमें एक-दूसरे से जोड़े रखती है 💞" },
    { text: "प्रार्थना", message: "अगर हमारा रिश्ता प्रार्थना है, तो मैं हर दिन इसे जीना चाहूंगा 🙏" },
    { text: "आशीर्वाद", message: "हमारा रिश्ता सच में एक आशीर्वाद है 🤗" },
    { text: "जीवन का सत्य", message: "आप ही मेरा सबसे सुंदर सत्य हो ✨" }
  ]
},

{
  question: "जब आप भविष्य के बारे में सोचते हो, उसमें मैं कहाँ होता हूँ?",
  correct: 3,
  options: [
    { text: "यादों में", message: "आपके साथ यादों में भी होना एक सुनहरा एहसास है 📖" },
    { text: "सपनों में", message: "आपके सपनों में रहना मेरे लिए सबसे प्यारी जगह है 🌙" },
    { text: "दिल में", message: "आपके दिल में रहना ही मेरी मंज़िल है ❤️" },
    { text: "हमेशा साथ", message: "अब ये साथ जन्मों-जन्मों का है, बस इसे जीना है 💞" }
  ]
},

{
  question: "अगर कभी मुश्किल समय आए, तो आप किस पर सबसे ज़्यादा भरोसा करोगे?",
  correct: 3,
  options: [
    { text: "खुद पर", message: "आपकी ताकत पर मुझे हमेशा विश्वास रहेगा 💪" },
    { text: "समय पर", message: "समय बदलता है, पर मेरा साथ कभी नहीं बदलेगा ⏳" },
    { text: "भगवान पर", message: "भगवान पर भरोसा रखने वाली आप सबसे खूबसूरत आत्मा हो 🙏" },
    { text: "हम पर", message: "हम साथ हों तो हर मुश्किल छोटी लगती है 🤝" }
  ]
},

{
  question: "मेरे लिए आपके दिल में जो जगह है, उसे आप क्या नाम देंगी?",
  correct: 3,
  options: [
    { text: "पसंद", message: "आपकी पसंद होना भी मेरे लिए अब एक अलग बात होगी 😊" },
    { text: "चाहत", message: "आपकी चाहत ही मेरी सबसे बड़ी दौलत है 💗" },
    { text: "प्रेम", message: "आपका प्रेम मेरे जीवन का सबसे पवित्र एहसास है ❤️❤️" },
    { text: "अटूट बंधन", message: "आपके दिल में मेरा अटूट बंधन ही अब मेरी सबसे बड़ी पहचान है 💫" }
  ]
},

{
  question: "अंतिम प्रश्न ❤️ — अगर जन्मों का साथ सच होता है, तो क्या आप हर जन्म में मेरा हाथ थामोगे?",
  correct: 3,
  options: [
    { text: "हाँ", message: "आपका 'हाँ' सुनना ही मेरी दुनिया जीत लेने जैसा है 😊" },
    { text: "ज़रूर", message: "आपका ज़रूर कहना मेरे लिए वचन जैसा है 💞" },
    { text: "हमेशा", message: "आपका हमेशा ही मेरी सबसे प्यारी उम्मीद है 🌙" },
    { text: "हर जन्म", message: "तो फिर वादा रहा… हर जन्म में मैं आपको ढूँढ लूँगा 💖" }
  ]
}
]

const wrongMessages = [
  "आपकी सोच मेरे दिल को छू जाती है 💖",
  "आपकी भावना मेरे लिए किसी प्रार्थना से कम नहीं 🙏",
  "हर जवाब में आपकी मासूमियत दिखती है 🌸",
  "आपके शब्द मेरे दिल की धड़कन बढ़ा देते हैं 💓",
  "आपका हर अंदाज़ मुझे और करीब ले आता है ✨",
  "आपकी बातों में एक अलग ही सुकून है 🌙",
  "आपके जवाब में भी प्यार की खुशबू है 🌹",
  "शायद यही वजह है कि दिल आपको इतना चाहता है ❤️",
  "आपका जवाब गलत नहीं… बस मेरे दिल से अलग है 💌",
  "आपकी हर बात मेरे लिए खास ही रहती है 💞"
]

export default function Home() {
  const [currentStage, setCurrentStage] = useState(0)
  const [showMessage, setShowMessage] = useState(false)
  const [started, setStarted] = useState(false)
  const [showWrongPopup, setShowWrongPopup] = useState(false)
  const [showPoem, setShowPoem] = useState(false)
  const [message, setMessage] = useState("")
  const [showGratitude, setShowGratitude] = useState(false)
  const [wrongPopupMessage, setWrongPopupMessage] = useState("")
  const [showSong, setShowSong] = useState(false)
  const [showImage, setShowImage] = useState(false)
  const [specialClickCount, setSpecialClickCount] = useState(0)
  const [showWelcome, setShowWelcome] = useState(true)
  const [nameInput, setNameInput] = useState("")
  const [showWrongNamePopup, setShowWrongNamePopup] = useState(false)
  const [failedAttempts, setFailedAttempts] = useState(0)
  const [wrongMessageIndex, setWrongMessageIndex] = useState(0)
  const [showVideo, setShowVideo] = useState(false)

 const handleAnswer = (selectedIndex) => {
  const selected = stages[currentStage].options[selectedIndex]
  const isCorrect = selectedIndex === stages[currentStage].correct

  if (isCorrect) {
    setMessage(`मैंने सोचा था कि आप यही कहोगे… 💖\n${selected.message}`)
    setShowMessage(true)

    setTimeout(() => {
      if (currentStage < stages.length - 1) {
        setCurrentStage(currentStage + 1)
        setShowMessage(false)
      } else {
        // After last stage, show gratitude
        setShowGratitude(true)
        setShowMessage(false)
      }
    }, 3500)
  } else {
    // Sequential romantic + spiritual message for wrong answer
    const sequentialMessage = wrongMessages[wrongMessageIndex % wrongMessages.length]
    setWrongPopupMessage(sequentialMessage)
    setShowWrongPopup(true)
    setWrongMessageIndex(wrongMessageIndex + 1)
  }
} 

  const handleBack = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1)
      setShowMessage(false)
    }
  }

  const handleHome = () => {
    setStarted(false)
    setCurrentStage(0)
    setShowMessage(false)
    setShowPoem(false)
    setShowGratitude(false)
    setShowSong(false)
    setShowImage(false)
    setSpecialClickCount(0)
    setShowWelcome(true)
    setNameInput("")
    setFailedAttempts(0)
    setWrongMessageIndex(0)
    setShowVideo(false)
  }

  const handleNameSubmit = (e) => {
    e.preventDefault()
    const trimmedInput = nameInput.trim().toLowerCase()
    
    // Check if answer is "khargosh" in English or Hindi
    if (trimmedInput === 'khargosh' || trimmedInput === 'खरगोश') {
      setShowWelcome(false)
      setFailedAttempts(0)
    } else {
      setShowWrongNamePopup(true)
      setFailedAttempts(failedAttempts + 1)
      setNameInput("")
    }
  }

  const handleSpecialButton = () => {
    // Sequential order: poem -> image -> song -> video -> ...
    const sequence = specialClickCount % 4
    
    if (sequence === 0) {
        // First click: show poem
        setShowPoem(true)
    } else if (sequence === 1) {
        // Second click: show image
        setShowImage(true)
    } else if (sequence === 2) {
      // Third click: show song
      setShowSong(true)
    } else {
      // Fourth click: show video
      setShowVideo(true)
    }
    
    setSpecialClickCount(specialClickCount + 1)
  }

  const handleBackFromSpecial = () => {
    setShowPoem(false)
    setShowSong(false)
    setShowImage(false)
    setShowVideo(false)
  }

  if (showWelcome) {
    return (
      <div className={styles.container} data-stage="welcome">
        {showWrongNamePopup && (
          <div className={styles.popupOverlay} onClick={() => setShowWrongNamePopup(false)}>
            <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
              <h2 className={styles.popupTitle}>😄 हम्म...</h2>
              <p className={styles.popupMessage}>देवी जी और सोचो!!! 😂</p>
              <button className={styles.popupButton} onClick={() => setShowWrongNamePopup(false)}>
                फिर से कोशिश करो 💕
              </button>
            </div>
          </div>
        )}
        
        <div className={styles.welcomeCard}>
          <h1 className={styles.welcomeTitle}>💖 स्वागत है 💖</h1>
          <p className={styles.welcomeQuestion}>
            आपको मैं प्यार से किस नाम से बुलाता हूँ? 🤔
          </p>
          <form onSubmit={handleNameSubmit} className={styles.nameForm}>
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="यहाँ लिखें..."
              className={styles.nameInput}
              autoFocus
            />
            <button type="submit" className={styles.submitButton}>
              लॉक कर दो
            </button>
          </form>
          {failedAttempts >= 2 && (
            <p className={styles.welcomeHint}>
              💡 Hint: एक प्यारा सा जानवर... 🐰
            </p>
          )}
        </div>
      </div>
    )
  }

  if (showPoem) {
    return (
      <div className={styles.poemContainer} data-stage="poem">
        <div className={styles.poemCard}>
          <h1 className={styles.poemTitle}>आपके लिए ❤️</h1>
         <div className={styles.poem}>
  <p>आपकी मुस्कान में है मेरी दुनिया,</p>
  <p>आपकी बातों में है मेरी खुशी।</p>
  <p>आपके साथ हर पल है खास,</p>
  <p>आपके बिना अधूरी है ये जिंदगी।</p>
  <br/>
  <p>आपकी आँखों में देखता हूँ सपने,</p>
  <p>आपके साथ बनाता हूँ यादें।</p>
  <p>हर दिन आपके साथ है वैलेंटाइन,</p>
  <p>आप मेरी सबसे प्यारी कहानी हो।</p>
  <br/>
  <p>मैं आपसे प्रेम करता हूँ,</p>
  <p>आज भी, कल भी, हमेशा... 💕</p>
</div>

          <div className={styles.navigationButtons}>
            <button className={styles.backButton} onClick={handleBackFromSpecial}>
              ← पीछे जाओ
            </button>
            <button className={styles.homeButton} onClick={handleHome}>
              🏠 होम
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (showSong) {
    return (
      <div className={styles.poemContainer} data-stage="song">
        <div className={styles.poemCard}>
          <h1 className={styles.poemTitle}>🎵 आपके लिए गाने 🎵</h1>
          <div className={styles.songContainer}>
            <p className={styles.songMessage}>
              मैंने आपके लिए यह गाने चुने हैं...<br/>
              सुनो… और महसूस करो मेरे दिल की आवाज़ 💕
            </p>
            
            {/* Song 1 */}
            <div className={styles.songItem}>
              <h3 className={styles.songTitle}>🎤 जानम देख लो, मिट गई दूरियाँ</h3>
              <audio 
                controls 
                className={styles.audioPlayer}
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              >
                <source src="/song1.mp3" type="audio/mpeg" />
                आपका browser audio element को support नहीं करता।
              </audio>
            </div>

            {/* Song 2 */}
            <div className={styles.songItem}>
              <h3 className={styles.songTitle}>💖 छूकर मेरे मन को</h3>
              <audio 
                controls 
                className={styles.audioPlayer}
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              >
                <source src="/song2.mp3" type="audio/mpeg" />
                आपका browser audio element को support नहीं करता।
              </audio>
            </div>

            {/* Song 3 */}
            <div className={styles.songItem}>
              <h3 className={styles.songTitle}>🌹 चाँदी जैसा रंग है तेरा</h3>
              <audio 
                controls 
                className={styles.audioPlayer}
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              >
                <source src="/song3.mp3" type="audio/mpeg" />
                आपका browser audio element को support नहीं करता।
              </audio>
            </div>
            
            <p className={styles.songNote}>
              🎤 मेरी दीपा रानी के लिए… ❤️
            </p>
          </div>
          <div className={styles.navigationButtons}>
            <button className={styles.backButton} onClick={handleBackFromSpecial}>
              ← पीछे जाओ
            </button>
            <button className={styles.homeButton} onClick={handleHome}>
              🏠 होम
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (showImage) {
    return (
      <div className={styles.poemContainer} data-stage="image">
        <div className={styles.poemCard}>
          <h1 className={styles.poemTitle}>📸 एक खूबसूरत लम्हा 📸</h1>
          <div className={styles.imageContainer}>
            <p className={styles.imageMessage}>
              दो अलग तस्वीरों से सजी ये छवि, जैसे किस्मत ने खुद हमें साथ लिख दिया हो।... 💖
            </p>
            <img 
              src="/special-photo.jpg" 
              alt="Special Memory" 
              className={styles.specialImage}
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextElementSibling.style.display = 'block'
              }}
            />
            <div style={{display: 'none', padding: '40px', background: '#f5f5f5', borderRadius: '15px', margin: '20px 0'}}>
              <p style={{fontSize: '1.2em', color: '#666', marginBottom: '15px'}}>
                📸 अपनी special photo यहाँ add करें:
              </p>
              <ol style={{textAlign: 'left', color: '#666', lineHeight: '2'}}>
                <li>अपनी photo को <code>special-photo.jpg</code> नाम से save करें</li>
                <li>इसे <code>public</code> folder में रखें</li>
                <li>Application restart करें</li>
              </ol>
            </div>
            <p className={styles.imageCaption}>
              हर पल आपके साथ... हर याद आपकी... 🌹
            </p>
          </div>
          <div className={styles.navigationButtons}>
            <button className={styles.backButton} onClick={handleBackFromSpecial}>
              ← पीछे जाओ
            </button>
            <button className={styles.homeButton} onClick={handleHome}>
              🏠 होम
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (showVideo) {
    return (
      <div className={styles.poemContainer} data-stage="video">
        <div className={styles.poemCard}>
          <h1 className={styles.poemTitle}>🎬 आपके लिए वीडियो 🎬</h1>
          <div className={styles.videoContainer}>
            <p className={styles.videoMessage}>
              यह वीडियो अपन दोनों के लिए खास 💕
            </p>
            <video 
              controls 
              className={styles.videoPlayer}
              onError={(e) => {
                e.target.style.display = 'none'
                document.getElementById('videoInstructions').style.display = 'block'
              }}
            >
              <source src="/special-video.mp4" type="video/mp4" />
              आपका browser video element को support नहीं करता।
            </video>
            <div id="videoInstructions" style={{display: 'none', padding: '30px', background: '#f5f5f5', borderRadius: '15px', margin: '20px 0'}}>
              <p style={{fontSize: '1.2em', color: '#666', marginBottom: '15px'}}>
                🎬 अपना वीडियो यहाँ add करें:
              </p>
              <ol style={{textAlign: 'left', color: '#666', lineHeight: '2'}}>
                <li>अपना video file download करें</li>
                <li>इसे <code>special-video.mp4</code> नाम से save करें</li>
                <li>इसे <code>public</code> folder में रखें</li>
                <li>Application restart करें</li>
              </ol>
              <p style={{fontSize: '0.9em', color: '#999', marginTop: '15px', fontStyle: 'italic'}}>
                💡 Tip: MP4 format सबसे अच्छा काम करता है
              </p>
            </div>
            <p className={styles.videoNote}>
              🎥 यह वीडियो सिर्फ आपके लिए है... ❤️
            </p>
          </div>
          <div className={styles.navigationButtons}>
            <button className={styles.backButton} onClick={handleBackFromSpecial}>
              ← पीछे जाओ
            </button>
            <button className={styles.homeButton} onClick={handleHome}>
              🏠 होम
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (showGratitude) {
    return (
      <div className={styles.container} data-stage="gratitude">
        <div className={styles.finalCard}>
          <h1 className={styles.finalTitle}>🙏 धन्यवाद 🙏</h1>
          <p className={styles.finalMessage}>
            इन सभी सवालों के जवाब देने के लिए धन्यवाद।<br/><br/>
            हर जवाब ने मुझे याद दिलाया कि हमारा रिश्ता कितना खास है।<br/><br/>
            आपके साथ बिताया हर पल, हर याद, हर मुस्कान<br/>
            मेरे जीवन का सबसे अनमोल खजाना है।<br/><br/>
            आप मेरे साथ हैं, यही मेरी सबसे बड़ी खुशी है।<br/><br/>
            आपके प्यार के लिए, आपके साथ के लिए,<br/>
            और हर दिन को खास बनाने के लिए...<br/><br/>
            दिल से धन्यवाद! 💖
          </p>
          <div className={styles.hearts}>🙏 💕 ✨ 💖 🌟</div>
          <div className={styles.navigationButtons}>
            <button className={styles.backButton} onClick={() => setShowGratitude(false)}>
              ← पीछे जाओ
            </button>
            <button className={styles.homeButton} onClick={handleHome}>
              🏠 होम
            </button>
          </div>
          <button className={styles.specialButton} onClick={handleSpecialButton}>
            आपके लिए खास 💝
          </button>
        </div>
      </div>
    )
  }

  if (!started) {
    return (
      <div className={styles.container} data-stage="start">
        <div className={styles.startCard}>
          <h1 className={styles.title}>💝 हमारी यात्रा 💝</h1>
          <p className={styles.subtitle}>हैप्पी वैलेंटाइन डे, मेरा खरगोश!</p>
          <p className={styles.description}>
            मैंने आज आपके लिए कुछ खास तैयार किया है।<br/>
            हमारे बारे में इन सवालों के जवाब दो और जानो<br/>
            कि आप मेरे लिए कितने खास हो...
          </p>
          <button className={styles.startButton} onClick={() => setStarted(true)}>
            आओ हमारी यात्रा शुरू करें ❤️
          </button>
        </div>
      </div>
    )
  }

  if (currentStage >= stages.length) {
    // This should not happen anymore as we show gratitude instead
    return null
  }

  const stage = stages[currentStage]
  const isLastStage = currentStage === stages.length - 1


  return (
    <div className={styles.container}>
      {showWrongPopup && (
        <div className={styles.popupOverlay} onClick={() => setShowWrongPopup(false)}>
          <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.popupTitle}>💭 हम्म...</h2>
            <p className={styles.popupMessage}>{wrongPopupMessage}</p>
            <p className={styles.popupHint}>पर और सोचना पड़ेगा 😂</p>
            <button className={styles.popupButton} onClick={() => setShowWrongPopup(false)}>
              ठीक है ❤️
            </button>
          </div>
        </div>
      )}
      
      <div className={styles.progress}>
        चरण {currentStage + 1} / {stages.length}
      </div>
      
      <div className={styles.card}>
        {!showMessage ? (
          <>
            <h2 className={styles.question}>{stage.question}</h2>
            <div className={styles.options}>
              {stage.options.map((option, index) => (
                <button
                  key={index}
                  className={styles.option}
                  onClick={() => handleAnswer(index)}
                >
                  {option.text}
                </button>
              ))}
            </div>
            <div className={styles.navigationButtons}>
              {currentStage > 0 && (
                <button className={styles.backButton} onClick={handleBack}>
                  ← पीछे जाओ
                </button>
              )}
              <button className={styles.homeButton} onClick={handleHome}>
                🏠 होम
              </button>
            </div>
          </>
        ) : (
          <div className={styles.messageCard}>
            <h2 className={styles.correctMessage}>
{message.includes("मैंने सोचा था")
  ? "✨ बिल्कुल सही! ✨"
  : "💖 आपकी भावना मेरे लिए खास है 💖"}
</h2>

            <p className={styles.loveMessage}>{message}</p>
            {isLastStage && (
              <div className={styles.navigationButtons}>
                <button className={styles.backButton} onClick={handleBack}>
                  ← पीछे जाओ
                </button>
                <button className={styles.homeButton} onClick={handleHome}>
                  🏠 होम
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
