const DepartData = {
  orthopaedics: {
    title: "Orthopaedics",
    description:
      "Our orthopedic department offers cutting-edge treatment for musculoskeletal conditions, from sports injuries to joint replacements. We combine advanced surgical techniques with personalized rehabilitation programs to restore your mobility and quality of life.",
    highlights: {
      "Minimally Invasive Surgery":
        "Advanced arthroscopic and endoscopic procedures that reduce recovery time and surgical trauma.",
      "Joint Replacement Excellence":
        "Specialized in knee, hip, and shoulder replacements using latest prosthetic technology.",
      "Sports Medicine Focus":
        "Comprehensive care for athletes with rapid recovery protocols and performance optimization.",
    },
    doctors: [
      {
        name: "Dr. Deepak Jhaidia",
        designation: "MBBS, MS (Ortho)",
        experience: "Endoscopic Spine & Joint Replacement Surgeon",
        image:
          "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/wgvbhPnJy4.webp",
      },
    ],
    testimonials: [
      {
        name: "Vikash Sharma",
        feedback:
          "After my ACL reconstruction, I was back to playing cricket within 4 months. The surgical precision and aftercare were outstanding.",
      },
      {
        name: "Sunita Agarwal",
        feedback:
          "My hip replacement surgery was painless and the recovery was much faster than I expected. Walking without pain after 2 years feels like a miracle.",
      },
    ],
    faqs: [
      {
        question: "What makes endoscopic spine surgery better than traditional methods?",
        answer:
          "Endoscopic spine surgery uses tiny incisions and advanced visualization, resulting in less muscle damage, reduced blood loss, and faster recovery compared to open surgery.",
      },
      {
        question: "How do I know if I need joint replacement surgery?",
        answer:
          "Joint replacement is considered when conservative treatments fail and you experience severe pain, limited mobility, or significant joint deformity that affects daily activities.",
      },
      {
        question: "What is the lifespan of artificial joints?",
        answer:
          "Modern joint implants typically last 15-25 years or more, depending on the patient's activity level, age, and implant type.",
      },
      {
        question: "Can young athletes return to sports after orthopedic surgery?",
        answer:
          "With proper rehabilitation and clearance from our sports medicine team, most young athletes can return to their sport, often with improved performance.",
      },
      {
        question: "What rehabilitation services do you provide post-surgery?",
        answer:
          "We offer comprehensive physiotherapy, occupational therapy, and customized exercise programs to ensure optimal recovery and function.",
      },
    ],
  },
  radiology: {
    title: "Radiology",
    description:
      "Our radiology department features the latest in medical imaging technology, providing accurate diagnoses through advanced CT, MRI, ultrasound, and digital X-ray services. We ensure quick turnaround times with precise reporting.",
    highlights: {
      "High-Resolution Imaging":
        "Latest generation MRI and CT scanners providing crystal-clear images for accurate diagnosis.",
      "AI-Assisted Diagnosis":
        "Advanced software integration for enhanced accuracy in detecting abnormalities and conditions.",
      "Same-Day Results":
        "Rapid reporting system with most results available within hours of imaging completion.",
    },
    doctors: [
      {
        name: "Dr. Sunil Saini",
        designation: "MD (Radiodiagnosis)",
        experience: "Radiologist",
        image:
          "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/wgvbhPnJy4.webp",
      },
    ],
    testimonials: [
      {
        name: "Manoj Gupta",
        feedback:
          "The MRI experience was comfortable and the detailed report helped my doctor plan the perfect treatment strategy for my condition.",
      },
      {
        name: "Rashmi Kapoor",
        feedback:
          "Quick appointment scheduling and results within 2 hours. The radiologist explained every finding clearly during consultation.",
      },
    ],
    faqs: [
      {
        question: "How accurate are your imaging results?",
        answer:
          "Our advanced equipment combined with experienced radiologists provides over 99% diagnostic accuracy for most conditions.",
      },
      {
        question: "Do you offer emergency imaging services?",
        answer:
          "Yes, we provide 24/7 emergency imaging services including CT scans, X-rays, and ultrasounds for urgent medical situations.",
      },
      {
        question: "Can I get a second opinion on my imaging results?",
        answer:
          "Absolutely. We encourage patients to seek second opinions and can provide detailed imaging reports and films for external consultation.",
      },
      {
        question: "What should I expect during an MRI scan?",
        answer:
          "MRI scans are painless but can be noisy. You'll lie still on a table that slides into the machine. Most scans take 20-45 minutes.",
      },
      {
        question: "Are there any risks associated with medical imaging?",
        answer:
          "Most imaging procedures are very safe. We follow strict protocols to minimize any potential risks and ensure patient safety.",
      },
    ],
  },
  pediatrics: {
    title: "Pediatrics",
    description:
      "Dedicated to providing comprehensive healthcare for children from newborns to adolescents. Our child-friendly environment and specialized pediatric expertise ensure your little ones receive the best care during their developmental years.",
    highlights: {
      "Child-Centric Care":
        "Specially trained staff and colorful, welcoming facilities designed to reduce anxiety in young patients.",
      "Comprehensive Vaccination":
        "Complete immunization programs following national and international guidelines for optimal protection.",
      "Growth Monitoring":
        "Advanced developmental assessments and growth tracking to ensure healthy childhood development.",
    },
    doctors: [],
    testimonials: [
      {
        name: "Kavita Jain",
        feedback:
          "My 5-year-old actually looks forward to doctor visits now! The pediatric team made vaccinations stress-free for both of us.",
      },
      {
        name: "Ravi Patel",
        feedback:
          "The developmental guidance we received helped us understand our child's milestones better. The care is truly comprehensive.",
      },
    ],
    faqs: [
      {
        question: "At what age should my child start regular check-ups?",
        answer:
          "Regular pediatric check-ups should begin within the first week of birth, with frequent visits in the first year and annual check-ups thereafter.",
      },
      {
        question: "How do you handle anxious or fearful children?",
        answer:
          "Our staff uses child-friendly communication, distraction techniques, and a comfortable environment to help children feel at ease during visits.",
      },
      {
        question: "What childhood emergencies should I be aware of?",
        answer:
          "High fever, difficulty breathing, severe allergic reactions, and injuries require immediate attention. We provide 24/7 emergency pediatric care.",
      },
      {
        question: "How can I prepare my child for their first visit?",
        answer:
          "Read them books about doctor visits, bring comfort items, and explain that the doctor helps keep them healthy and strong.",
      },
      {
        question: "Do you provide nutritional counseling for children?",
        answer:
          "Yes, we offer comprehensive nutritional guidance for healthy growth, managing childhood obesity, and addressing feeding difficulties.",
      },
    ],
  },
  obstetrics: {
    title: "Obstetrics",
    description:
      "Supporting mothers through every stage of pregnancy with comprehensive prenatal care, safe delivery options, and postnatal support. Our experienced team ensures both mother and baby receive the highest quality care throughout the journey.",
    highlights: {
      "High-Risk Pregnancy Care":
        "Specialized monitoring and management for complicated pregnancies with advanced fetal medicine services.",
      "Natural Birth Support":
        "Promoting natural delivery with pain management options and birthing suite facilities.",
      "Lactation Consulting":
        "Expert breastfeeding support and guidance for new mothers to ensure successful nursing.",
    },
    doctors: [
      {
        name: "Dr. Dharma Saini",
        designation: "MBBS, MS (OBS & Gynae)",
        experience: "Women & Maternity Specialist",
        image:
          "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/wgvbhPnJy4.webp",
      },
    ],
    testimonials: [
      {
        name: "Neha Agarwal",
        feedback:
          "Dr. Dharma Saini guided me through my high-risk pregnancy with such care and expertise. Both my twins are healthy and thriving now.",
      },
      {
        name: "Pooja Verma",
        feedback:
          "The natural birth experience was beautiful, and the lactation support helped me establish breastfeeding successfully from day one.",
      },
    ],
    faqs: [
      {
        question: "What prenatal tests are essential during pregnancy?",
        answer:
          "Essential tests include blood work, ultrasounds, glucose tolerance test, and genetic screening. We'll customize based on your specific needs and risk factors.",
      },
      {
        question: "When should I create a birth plan?",
        answer:
          "We recommend discussing your birth plan around 32-36 weeks of pregnancy, allowing time for adjustments based on your pregnancy progress.",
      },
      {
        question: "What are the warning signs during pregnancy that need immediate attention?",
        answer:
          "Severe abdominal pain, heavy bleeding, persistent headaches, vision changes, or decreased fetal movement require immediate medical evaluation.",
      },
      {
        question: "How soon after delivery can I go home?",
        answer:
          "For normal deliveries, discharge is typically 24-48 hours. C-section patients usually stay 2-3 days, depending on recovery progress.",
      },
      {
        question: "What support do you provide for postpartum depression?",
        answer:
          "We offer comprehensive mental health screening, counseling services, and connection to support groups for maternal mental wellness.",
      },
    ],
  },
  gynecology: {
    title: "Gynecology",
    description:
      "Comprehensive women's healthcare addressing reproductive health, hormonal concerns, and gynecological conditions. We provide confidential, compassionate care for women at every life stage, from adolescence through menopause.",
    highlights: {
      "Minimally Invasive Procedures":
        "Advanced laparoscopic surgeries for faster recovery and reduced scarring in treating gynecological conditions.",
      "Hormonal Health Management":
        "Comprehensive hormone therapy and management for PCOS, menopause, and reproductive health optimization.",
      "Cancer Screening Programs":
        "Regular cervical and breast cancer screening with early detection protocols and prevention strategies.",
    },
    doctors: [
      {
        name: "Dr. Dharma Saini",
        designation: "MBBS, MS (OBS & Gynae)",
        experience: "Women & Maternity Specialist",
        image:
          "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/wgvbhPnJy4.webp",
      },
    ],
    testimonials: [
      {
        name: "Shalini Kumari",
        feedback:
          "The PCOS management plan completely changed my life. My symptoms are controlled and I feel healthier than I have in years.",
      },
      {
        name: "Rekha Singh",
        feedback:
          "The laparoscopic fibroid removal was so much easier than I expected. Back to normal activities within a week with minimal discomfort.",
      },
    ],
    faqs: [
      {
        question: "How often should I have gynecological screenings?",
        answer:
          "Annual exams are recommended, with Pap smears every 3 years for ages 21-65, and mammograms starting at age 40 or as recommended based on risk factors.",
      },
      {
        question: "What are the treatment options for PCOS?",
        answer:
          "PCOS treatment includes lifestyle modifications, hormonal therapy, fertility treatments if needed, and management of associated symptoms like insulin resistance.",
      },
      {
        question: "When should I be concerned about irregular periods?",
        answer:
          "Consult if you experience very heavy bleeding, periods lasting longer than 7 days, cycles shorter than 21 days or longer than 35 days, or sudden changes in pattern.",
      },
      {
        question: "What are the benefits of laparoscopic surgery?",
        answer:
          "Laparoscopic procedures offer smaller incisions, less pain, shorter hospital stays, faster recovery, and reduced risk of infection compared to open surgery.",
      },
      {
        question: "How can I manage menopausal symptoms?",
        answer:
          "We offer various options including hormone replacement therapy, lifestyle modifications, and alternative treatments tailored to your specific symptoms and health profile.",
      },
    ],
  },
  generalmedicine: {
    title: "General Medicine",
    description:
      "Your first line of healthcare providing comprehensive medical services for adults. We focus on preventive care, chronic disease management, and acute illness treatment with a holistic approach to your overall wellbeing.",
    highlights: {
      "Preventive Health Programs":
        "Comprehensive health screenings and wellness programs designed to prevent disease and maintain optimal health.",
      "Chronic Disease Management":
        "Specialized care plans for diabetes, hypertension, heart disease, and other long-term conditions.",
      "Telemedicine Services":
        "Virtual consultations and remote monitoring capabilities for convenient healthcare access.",
    },
    doctors: [
      {
        name: "Dr. Imran Ahmad Khan",
        designation: "MBBS, MD (General Medicine)",
        experience: "General Physician",
        image:
          "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/wgvbhPnJy4.webp",
      },
    ],
    testimonials: [
      {
        name: "Suresh Kumar",
        feedback:
          "Dr. Khan's comprehensive approach helped me understand my health better. The preventive care plan has kept me healthy for over 3 years now.",
      },
      {
        name: "Anjali Sharma",
        feedback:
          "The chronic disease management program helped me control my blood pressure effectively. Regular monitoring gives me peace of mind.",
      },
    ],
    faqs: [
      {
        question: "What does a comprehensive health check-up include?",
        answer:
          "Complete physical exam, blood tests, ECG, chest X-ray, and specialized screenings based on age and risk factors to assess overall health status.",
      },
      {
        question: "How often should healthy adults see a doctor?",
        answer:
          "Annual check-ups are recommended for adults, with more frequent visits for those over 50 or with chronic conditions requiring ongoing management.",
      },
      {
        question: "What lifestyle factors do you address in preventive care?",
        answer:
          "We focus on nutrition, exercise, stress management, sleep quality, smoking cessation, and alcohol moderation as key pillars of health maintenance.",
      },
      {
        question: "Can you help coordinate care with specialists?",
        answer:
          "Yes, we serve as your primary care coordinator, managing referrals to specialists and ensuring all aspects of your care are well-integrated.",
      },
      {
        question: "Do you provide executive health packages?",
        answer:
          "We offer comprehensive executive health packages with advanced screenings, priority scheduling, and detailed health reports for busy professionals.",
      },
    ],
  },
  diabetology: {
    title: "Diabetology",
    description:
      "Specialized diabetes care focusing on blood sugar management, complication prevention, and lifestyle optimization. Our comprehensive approach helps patients live full, healthy lives while effectively managing their diabetes.",
    highlights: {
      "Advanced Glucose Monitoring":
        "Continuous glucose monitoring systems and latest HbA1c testing for precise diabetes management.",
      "Diabetic Complication Prevention":
        "Comprehensive screening for eye, kidney, nerve, and cardiovascular complications with early intervention.",
      "Nutritional Counseling":
        "Personalized meal planning and dietary education to optimize blood sugar control and overall health.",
    },
    doctors: [
      {
        name: "Dr. Imran Ahmad Khan",
        designation: "MBBS, MD (General Medicine)",
        experience: "General Physician",
        image:
          "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/wgvbhPnJy4.webp",
      },
    ],
    testimonials: [
      {
        name: "Ramesh Patel",
        feedback:
          "My HbA1c dropped from 9.2 to 6.8 in just 6 months with the comprehensive diabetes management program. I feel energetic again.",
      },
      {
        name: "Meera Joshi",
        feedback:
          "The nutritional counseling transformed my relationship with food. Managing diabetes doesn't feel restrictive anymore - it feels empowering.",
      },
    ],
    faqs: [
      {
        question: "What is the target HbA1c level for diabetics?",
        answer:
          "Generally, an HbA1c below 7% is recommended for most adults with diabetes, though individual targets may vary based on age and health conditions.",
      },
      {
        question: "How often should diabetics monitor their blood sugar?",
        answer:
          "Monitoring frequency depends on treatment type and control level. Type 1 diabetics may check 4+ times daily, while well-controlled Type 2 may check less frequently.",
      },
      {
        question: "What are the warning signs of diabetic complications?",
        answer:
          "Watch for vision changes, numbness in hands/feet, slow-healing wounds, frequent infections, or persistent fatigue - all require immediate medical attention.",
      },
      {
        question: "Can diabetes be reversed or cured?",
        answer:
          "Type 2 diabetes can sometimes be put into remission through significant lifestyle changes, but it requires ongoing management. Type 1 diabetes currently requires lifelong treatment.",
      },
      {
        question: "What role does exercise play in diabetes management?",
        answer:
          "Regular exercise improves insulin sensitivity, helps control blood sugar, aids weight management, and reduces cardiovascular risk - it's essential for diabetes care.",
      },
    ],
  },
  generalsurgery: {
    title: "General Surgery",
    description:
      "Expert surgical care for a wide range of conditions using both traditional and minimally invasive techniques. Our experienced surgical team prioritizes patient safety, optimal outcomes, and rapid recovery.",
    highlights: {
      "Laparoscopic Expertise":
        "Advanced minimally invasive surgical techniques reducing recovery time and post-operative complications.",
      "Day Surgery Services":
        "Same-day surgical procedures allowing patients to recover in the comfort of their homes.",
      "Emergency Surgery Readiness":
        "24/7 surgical team availability for urgent procedures with state-of-the-art operating facilities.",
    },
    doctors: [
      {
        name: "Dr. Vitul Vaikar",
        designation: "MBBS, DNB (General Surgery)",
        experience: "General & Laparoscopic Surgeon",
        image:
          "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/wgvbhPnJy4.webp",
      },
    ],
    testimonials: [
      {
        name: "Kiran Mehra",
        feedback:
          "My gallbladder surgery was performed laparoscopically and I was back to work in just one week. The tiny scars are barely visible now.",
      },
      {
        name: "Deepak Agarwal",
        feedback:
          "Dr. Vaikar's expertise in hernia repair using mesh technique gave me confidence. No complications and excellent results after 2 years.",
      },
    ],
    faqs: [
      {
        question: "What conditions require general surgery?",
        answer:
          "We treat hernias, gallbladder disease, appendicitis, bowel conditions, thyroid disorders, and various abdominal conditions requiring surgical intervention.",
      },
      {
        question: "How do I prepare for surgery?",
        answer:
          "Pre-operative preparation includes medical clearance, fasting instructions, medication adjustments, and detailed discussion of the procedure and recovery expectations.",
      },
      {
        question: "What are the advantages of laparoscopic surgery?",
        answer:
          "Laparoscopic surgery offers smaller incisions, less pain, shorter hospital stays, faster recovery, reduced infection risk, and better cosmetic results.",
      },
      {
        question: "How long is the typical recovery period?",
        answer:
          "Recovery varies by procedure - laparoscopic procedures typically require 1-2 weeks, while open surgeries may need 4-6 weeks for full recovery.",
      },
      {
        question: "What should I expect during post-operative care?",
        answer:
          "Post-operative care includes pain management, wound care instructions, activity restrictions, follow-up appointments, and monitoring for complications.",
      },
    ],
  },
  urology: {
    title: "Urology",
    description:
      "Comprehensive urological care for kidney, bladder, and reproductive system disorders. We offer advanced diagnostic capabilities and both surgical and non-surgical treatment options for optimal patient outcomes.",
    highlights: {
      "Laser Stone Treatment":
        "Advanced laser lithotripsy for kidney stones with minimal invasive approach and faster recovery times.",
      "Robotic Surgery":
        "State-of-the-art robotic-assisted procedures for prostate and kidney surgeries with enhanced precision.",
      "Male Fertility Services":
        "Comprehensive evaluation and treatment of male reproductive health and fertility issues.",
    },
    doctors: [
      {
        name: "Dr. Mukesh Kumar",
        designation: "MBBS, MS, M.Ch (Urology)",
        experience: "Kidney & Urinary Specialist",
        image:
          "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/wgvbhPnJy4.webp",
      },
    ],
    testimonials: [
      {
        name: "Ajay Malhotra",
        feedback:
          "The laser treatment for my kidney stones was amazing - no cuts, minimal pain, and I passed the fragments within days. Technology at its best!",
      },
      {
        name: "Sanjay Gupta",
        feedback:
          "Dr. Mukesh Kumar's approach to my prostate condition was thorough and reassuring. The robotic surgery results exceeded my expectations.",
      },
    ],
    faqs: [
      {
        question: "What are the latest treatments for kidney stones?",
        answer:
          "We offer laser lithotripsy, shock wave lithotripsy, and percutaneous procedures depending on stone size and location, with most being minimally invasive.",
      },
      {
        question: "How is prostate enlargement treated?",
        answer:
          "Treatment options range from medications to minimally invasive procedures like laser therapy, and surgical options including robotic-assisted surgery when needed.",
      },
      {
        question: "What should I do if I have blood in my urine?",
        answer:
          "Blood in urine requires immediate evaluation to rule out infections, stones, or more serious conditions. Contact us for urgent consultation and diagnostic workup.",
      },
      {
        question: "Are urological conditions hereditary?",
        answer:
          "Some conditions like kidney stones and certain cancers can have genetic components. We provide family risk assessment and screening recommendations.",
      },
      {
        question: "How can I maintain good urological health?",
        answer:
          "Stay hydrated, maintain healthy weight, practice good hygiene, avoid smoking, limit alcohol, and have regular check-ups especially after age 50.",
      },
    ],
  },
  dental: {
    title: "Dental",
    description:
      "Complete oral healthcare services using modern dental technology and techniques. From routine cleanings to complex restorative procedures, we ensure your smile stays healthy and beautiful throughout your life.",
    highlights: {
      "Digital Dentistry":
        "Advanced digital X-rays, intraoral cameras, and CAD/CAM technology for precise diagnosis and treatment.",
      "Cosmetic Excellence":
        "Professional teeth whitening, veneers, and smile makeover services for enhanced dental aesthetics.",
      "Pain-Free Procedures":
        "Modern anesthesia techniques and sedation options ensuring comfortable dental experiences.",
    },
    doctors: [
      {
        name: "Dr. Amit Singh",
        designation: "BDS (Dental Surgeon)",
        experience: "Oral & Dental Care",
        image:
          "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/wgvbhPnJy4.webp",
      },
    ],
    testimonials: [
      {
        name: "Priyanka Shah",
        feedback:
          "My smile transformation with veneers was incredible! Dr. Singh's attention to detail and artistic approach gave me the confidence I always wanted.",
      },
      {
        name: "Rohit Jain",
        feedback:
          "The root canal treatment was completely painless - I was dreading it for months! The digital technology made everything so much more comfortable.",
      },
    ],
    faqs: [
      {
        question: "How often should I visit the dentist for check-ups?",
        answer:
          "We recommend visits every 6 months for cleanings and check-ups, though some patients with gum disease or other conditions may need more frequent visits.",
      },
      {
        question: "What are the signs I need immediate dental attention?",
        answer:
          "Severe tooth pain, swelling, bleeding gums, loose teeth, or dental trauma require immediate attention to prevent complications.",
      },
      {
        question: "Are dental X-rays safe?",
        answer:
          "Modern digital X-rays use significantly less radiation than traditional films and are considered very safe with appropriate protective measures.",
      },
      {
        question: "What cosmetic dental options do you offer?",
        answer:
          "We provide teeth whitening, veneers, dental bonding, crowns, and complete smile makeovers tailored to your aesthetic goals and budget.",
      },
      {
        question: "How can I prevent dental problems?",
        answer:
          "Good oral hygiene with regular brushing and flossing, limiting sugary foods, not smoking, and regular dental visits are key to preventing problems.",
      },
    ],
  },
  physiotherapy: {
    title: "Physiotherapy",
    description:
      "Expert rehabilitation services helping patients recover from injuries, manage chronic conditions, and optimize physical function. Our evidence-based approach ensures effective treatment and lasting results.",
    highlights: {
      "Sports Rehabilitation":
        "Specialized programs for athletes focusing on injury recovery and performance enhancement with return-to-sport protocols.",
      "Manual Therapy Excellence":
        "Hands-on treatment techniques including joint mobilization, soft tissue work, and specialized movement therapy.",
      "Modern Equipment":
        "Advanced therapeutic modalities including electrotherapy, ultrasound, and computerized exercise equipment.",
    },
    doctors: [
      {
        name: "Dr. Sameer Khan",
        designation: "Physiotherapist (MPT)",
        experience: "Physiotherapy Specialist",
        image:
          "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/wgvbhPnJy4.webp",
      },
    ],
    testimonials: [
      {
        name: "Arjun Thakur",
        feedback:
          "After my shoulder surgery, Dr. Khan's rehabilitation program got me back to playing tennis at a competitive level. The progress was remarkable.",
      },
      {
        name: "Sudha Reddy",
        feedback:
          "The chronic back pain that bothered me for years is finally manageable. The exercise program and manual therapy made all the difference.",
      },
    ],
    faqs: [
      {
        question: "When should I start physiotherapy after injury or surgery?",
        answer:
          "Early intervention is usually best - often within 24-48 hours post-injury or as soon as cleared by your surgeon for post-operative cases.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "Treatment duration varies based on condition severity, individual response, and goals. Most conditions improve within 6-12 sessions with home exercise compliance.",
      },
      {
        question: "What should I wear to physiotherapy sessions?",
        answer:
          "Wear comfortable, loose-fitting clothes that allow easy movement and access to the treatment area. Athletic wear is usually ideal.",
      },
      {
        question: "Will physiotherapy be painful?",
        answer:
          "Some discomfort during treatment is normal, but we work within your tolerance levels. Pain should not significantly increase during or after treatment.",
      },
      {
        question: "Can physiotherapy help with chronic conditions?",
        answer:
          "Yes, we effectively treat chronic conditions like arthritis, fibromyalgia, and chronic pain through specialized exercise programs and manual therapy techniques.",
      },
    ],
  },
};

export default DepartData;