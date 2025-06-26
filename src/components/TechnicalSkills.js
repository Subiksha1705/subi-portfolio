import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaJsSquare, FaHtml5, FaCss3Alt, 
  FaGitAlt, FaDocker, FaAws, FaDatabase, FaJava 
} from 'react-icons/fa';
import { 
  SiMongodb, SiPostgresql, SiTensorflow, SiKubernetes, 
  SiExpress, SiMysql, SiFlask, SiStreamlit, SiBootstrap,
  SiReact, SiOracle, SiJenkins, SiHuggingface, SiScikitlearn,
  SiFigma, SiWordpress, SiPostman, SiVscodium, SiJupyter
} from 'react-icons/si';

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 80, icon: <FaPython />, color: '#3776AB' },
        { name: 'JavaScript', level:75, icon: <FaJsSquare />, color: '#F7DF1E' },
        { name: 'Java', level: 85, icon: <FaJava />, color: '#007396' },
        { name: 'C', level: 80, icon: <FaDatabase />, color: '#A8B9CC' },
        { name: 'SQL', level: 85, icon: <FaDatabase />, color: '#336791' },
        { name: 'HTML', level: 97, icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS', level: 96, icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'C#', level: 75, icon: <FaDatabase />, color: '#239120' }
      ]
    },
    {
      title: 'Frameworks & Technologies',
      skills: [
        { name: 'React', level: 90, icon: <FaReact />, color: '#61DAFB' },
        { name: 'Node.js', level: 88, icon: <FaNodeJs />, color: '#339933' },
        { name: 'React Native', level: 85, icon: <SiReact />, color: '#61DAFB' },
        { name: 'Streamlit', level: 80, icon: <SiStreamlit />, color: '#FF4B4B' },
        { name: 'Bootstrap', level: 85, icon: <SiBootstrap />, color: '#7952B3' },
        { name: 'Express', level: 80, icon: <SiExpress />, color: '#239120' }
      ]
    },
    {
      title: 'Databases & Tools',
      skills: [
        { name: 'MongoDB', level: 88, icon: <SiMongodb />, color: '#47A248' },
        { name: 'MySQL', level: 85, icon: <SiMysql />, color: '#4479A1' },
        { name: 'Oracle SQL', level: 80, icon: <SiOracle />, color: '#F80000' },
        { name: 'Git', level: 90, icon: <FaGitAlt />, color: '#FF4B4B' },
        { name: 'GitHub', level: 88, icon: <FaGitAlt />, color: '#239120' },
        { name: 'Docker', level: 85, icon: <FaDocker />, color: '#2496ED' },
        { name: 'Jenkins', level: 75, icon: <SiJenkins />, color: '#D24939' }
      ]
    },
    {
      title: 'AI/ML & Cloud',
      skills: [
        { name: 'Hugging Face', level: 85, icon: <SiHuggingface />, color: '#FFD21E' },
        { name: 'TensorFlow', level: 80, icon: <SiTensorflow />, color: '#FF6F00' },
        { name: 'Scikit-learn', level: 82, icon: <SiScikitlearn />, color: '#F7931E' },
        { name: 'Kubernetes', level: 75, icon: <SiKubernetes />, color: '#326CE5' },
        { name: 'Docker', level: 85, icon: <FaDocker />, color: '#2496ED' }
      ]
    },
    {
      title: 'Design & Other Tools',
      skills: [
        { name: 'Figma', level: 78, icon: <SiFigma />, color: '#F24E1E' },
        { name: 'WordPress', level: 75, icon: <SiWordpress />, color: '#21759B' },
        { name: 'VS Code', level: 90, icon: <SiVscodium />, color: '#007ACC' },
        { name: 'Jupyter', level: 82, icon: <SiJupyter />, color: '#F37626' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            My technical expertise across various technologies and frameworks
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              variants={categoryVariants}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.5 
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-info">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div className="skill-details">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                          duration: 1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
