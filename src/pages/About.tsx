import React from 'react';
import { 
  Target, 
  Users, 
  Award, 
  Lightbulb,
  ArrowRight,
  Calendar,
  MapPin,
  Mail,
  Linkedin,
  Github
} from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Medical Officer',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'MD, PhD in Medical AI with 15+ years in healthcare innovation.',
      social: { linkedin: '#', github: '#' }
    },
    {
      name: 'Alex Rodriguez',
      role: 'Lead AI Engineer',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'PhD in Machine Learning, former Google AI researcher.',
      social: { linkedin: '#', github: '#' }
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Clinical Research Director',
      image: 'https://images.pexels.com/photos/5327653/pexels-photo-5327653.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'MBBS, MS in Public Health, specialist in global health systems.',
      social: { linkedin: '#', github: '#' }
    },
    {
      name: 'Michael Thompson',
      role: 'Head of Engineering',
      image: 'https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack engineer with expertise in scalable healthcare systems.',
      social: { linkedin: '#', github: '#' }
    }
  ];

  const timeline = [
    {
      year: '2023',
      title: 'Project Inception',
      description: 'Apollo project launched with the vision of democratizing healthcare AI globally.'
    },
    {
      year: '2023 Q2',
      title: 'Research Phase',
      description: 'Extensive research on multilingual medical datasets and cultural healthcare practices.'
    },
    {
      year: '2023 Q3',
      title: 'Prototype Development',
      description: 'First working prototype with basic multilingual medical conversation capabilities.'
    },
    {
      year: '2023 Q4',
      title: 'Clinical Validation',
      description: 'Partnerships with healthcare institutions for clinical testing and validation.'
    },
    {
      year: '2024 Q1',
      title: 'Public Beta',
      description: 'Limited public beta launch with 6 languages and core medical features.'
    },
    {
      year: '2024 Q2',
      title: 'Global Launch',
      description: 'Full public release serving 6B+ people across six languages.'
    }
  ];

  const achievements = [
    {
      icon: Target,
      title: '95% Accuracy',
      description: 'Medical response accuracy validated by healthcare professionals'
    },
    {
      icon: Users,
      title: '1M+ Users',
      description: 'Healthcare professionals and patients served globally'
    },
    {
      icon: Award,
      title: 'FDA Recognition',
      description: 'Recognized for innovation in AI-powered healthcare solutions'
    },
    {
      icon: Lightbulb,
      title: '50+ Patents',
      description: 'Cutting-edge innovations in multilingual medical AI'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About{' '}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Apollo
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Democratizing healthcare AI to serve 6 billion people across languages and cultures, 
            making quality medical assistance accessible to everyone, everywhere.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Healthcare should be accessible to everyone, regardless of language, location, or economic status. 
              Apollo was born from the realization that while medical knowledge exists globally, language barriers 
              and healthcare disparities prevent millions from accessing quality medical guidance.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We're building AI that understands not just medical science, but the cultural nuances and 
              linguistic complexities that make healthcare truly personal and effective.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-white">Global Accessibility</h3>
                  <p className="text-gray-300">Making healthcare AI available in 6 major languages</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-white">Cultural Sensitivity</h3>
                  <p className="text-gray-300">Respecting diverse healthcare practices and beliefs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-white">Evidence-Based Care</h3>
                  <p className="text-gray-300">Grounded in medical research and clinical guidelines</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-violet-600/20 to-blue-600/20 rounded-2xl border border-violet-500/30 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-br from-violet-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-12 h-12 text-white" />
                </div>
                <p className="text-gray-300 text-lg font-medium">Serving 6B+ People Globally</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-violet-500/50 transition-colors"
              >
                <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Journey
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-violet-400 font-bold">{item.year}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-white font-semibold">{item.title}</span>
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-violet-500/50 transition-colors text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-violet-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="p-2 bg-slate-700 rounded-lg text-gray-400 hover:text-white hover:bg-violet-600 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.github}
                    className="p-2 bg-slate-700 rounded-lg text-gray-400 hover:text-white hover:bg-violet-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-violet-600/20 to-blue-600/20 rounded-3xl p-12 border border-violet-500/30 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Transforming Healthcare
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of our mission to make quality healthcare accessible to everyone. 
            Whether you're a healthcare professional, researcher, or someone who believes in our vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-violet-500/25">
              <span>Get Involved</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;