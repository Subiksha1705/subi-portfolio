import React from 'react';
import { FaCertificate, FaMicrosoft } from 'react-icons/fa';
import { SiOracle, SiLinkedin, SiInfosys, SiNvidia } from 'react-icons/si';

export const certificationsData = [
  {
    id: 1,
    title: 'DevOps foundations: The core principles and practices',
    issuer: 'Microsoft',
    date: 'June 21, 2025',
    validUntil: 'Lifetime',
    description: 'Learning path completion in DevOps foundations covering core principles and practices with all module assessments passed.',
    skills: ['DevOps', 'CI/CD', 'Infrastructure', 'Automation', 'Monitoring'],
    icon: <FaMicrosoft />,
    color: '#00BCF2',
    verifyUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/SubikshaPR-6432/PLNDWKM4?sharingId=69F5C02F89BBF7F3',
    imageFile: 'DEVOPS.png'
  },
  {
    id: 2,
    title: 'Oracle APEX Cloud Developer Certified Professional',
    issuer: 'Oracle',
    date: 'May 15, 2025',
    validUntil: 'Lifetime',
    description: 'Oracle Certified Professional Certificate of Recognition for Oracle APEX Cloud Developer Certified Professional.',
    skills: ['Oracle APEX', 'PL/SQL', 'Database Design', 'Cloud Development', 'Low-Code'],
    icon: <SiOracle />,
    color: '#F80000',
    imageFile: 'ORACLE APEX CLOUD.png'
  },
  {
    id: 3,
    title: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA',
    date: 'April 10, 2025',
    validUntil: 'Lifetime',
    description: 'Specialization completion certificate for Deep Learning courses covering neural networks, CNNs, RNNs, and practical applications.',
    skills: ['Deep Learning', 'Neural Networks', 'CNN', 'RNN', 'TensorFlow', 'Keras'],
    icon: <SiNvidia />,
    color: '#76B900',
    imageFile: 'DEEP LEARNING.png'
  },
  {
    id: 4,
    title: 'Infosys Certified Bootstrap Developer',
    issuer: 'Infosys',
    date: 'March 25, 2025',
    validUntil: 'Lifetime',
    description: 'Certificate of completion for Bootstrap framework training covering responsive design, components, and modern web development practices.',
    skills: ['Bootstrap', 'Responsive Design', 'CSS Framework', 'Frontend', 'Web Development'],
    icon: <SiInfosys />,
    color: '#007ACC',
    imageFile: 'ISB BOOTSTRAP.png'
  },
  {
    id: 5,
    title: 'Infosys Certified Business Analyst',
    issuer: 'Infosys',
    date: 'February 18, 2025',
    validUntil: 'Lifetime',
    description: 'Certificate of completion for Business Analysis training covering requirements gathering, process modeling, and stakeholder management.',
    skills: ['Business Analysis', 'Requirements Engineering', 'Process Modeling', 'Agile', 'Stakeholder Management'],
    icon: <SiInfosys />,
    color: '#007ACC',
    imageFile: 'ISB BUSSINESS.png'
  },
  {
    id: 6,
    title: 'Agile Scrum in Practice',
    issuer: 'Infosys',
    date: 'August 18, 2024',
    validUntil: 'Lifetime',
    description: 'Course Completion Certificate for successfully completing Agile Scrum in Practice.',
    skills: ['Agile', 'Scrum', 'Project Management', 'Sprint Planning', 'Team Collaboration'],
    icon: <SiInfosys />,
    color: '#007ACC',
    imageFile: 'ISB AGILE.png'
  },
  {
    id: 7,
    title: 'Web Development Fundamentals',
    issuer: 'IBM',
    date: 'June 20, 2025',
    validUntil: 'Lifetime',
    description: 'This badge was issued to SUBIKSHA P R for Web Development Fundamentals by IBM SkillsBuild.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'Frontend'],
    icon: <FaCertificate />,
    color: '#1F70C1',
    verifyUrl: 'https://lnkd.in/dTFHE9ZZ',
    imageFile: 'WEB DEV IBM.png'
  },
  {
    id: 8,
    title: 'Introduction to Large Language Models',
    issuer: 'LinkedIn',
    date: 'June 18, 2025',
    validUntil: 'Lifetime',
    description: 'Certificate of completion for Introduction to Large Language Models course.',
    skills: ['LLM', 'NLP', 'AI', 'Machine Learning', 'Language Models'],
    icon: <SiLinkedin />,
    color: '#0077B5',
    verifyUrl: 'https://www.linkedin.com/learning/certificates/b4d2cadb8a4ff4c3c9239dc2b9c6ddb4888eb92aca52353bfe5b224fda1c07cc',
    imageFile: 'LLM.png'
  }
];
