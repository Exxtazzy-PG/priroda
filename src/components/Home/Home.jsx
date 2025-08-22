import React from 'react';
import { Layout, Row, Col, Card, Button, Typography, Space } from 'antd';
import { motion } from 'framer-motion';
import { ArrowRightOutlined, EyeOutlined, HeartOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Home.css';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Home = () => {
  const features = [
    {
      icon: <EyeOutlined />,
      title: 'Удивительные виды',
      description: 'Откройте для себя самые красивые уголки нашей планеты',
      image: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: <HeartOutlined />,
      title: 'Любовь к природе',
      description: 'Познайте глубокую связь с окружающим миром',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: <EnvironmentOutlined />,
      title: 'Экологическая осознанность',
      description: 'Узнайте, как защитить нашу планету для будущих поколений',
      image: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <Content className="home-content">
      {/* Hero Section */}
      <motion.div 
        className="hero-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Title level={1} className="hero-title">
                Красота природы
              </Title>
              <Paragraph className="hero-description">
                Погрузитесь в удивительный мир природы, где каждый момент полон волшебства и гармонии. 
                Исследуйте невероятные ландшафты и откройте для себя чудеса нашей планеты.
              </Paragraph>
              <Space size="large">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    type="primary" 
                    size="large" 
                    icon={<ArrowRightOutlined />}
                    className="hero-button"
                  >
                    <Link to="/gallery">Исследовать галерею</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="large" 
                    className="hero-button-secondary"
                  >
                    <Link to="/about">Узнать больше</Link>
                  </Button>
                </motion.div>
              </Space>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="features-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Title level={2} className="section-title">
              Откройте мир природы
            </Title>
          </motion.div>
          
          <Row gutter={[24, 24]}>
            {features.map((feature, index) => (
              <Col xs={24} md={8} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    hoverable
                    cover={
                      <div className="feature-image-container">
                        <img alt={feature.title} src={feature.image} />
                        <div className="feature-icon">
                          {feature.icon}
                        </div>
                      </div>
                    }
                    className="feature-card"
                  >
                    <Title level={4}>{feature.title}</Title>
                    <Paragraph className="feature-description">
                      {feature.description}
                    </Paragraph>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div 
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <Title level={2} className="cta-title">
            Готовы исследовать?
          </Title>
          <Paragraph className="cta-description">
            Начните свое путешествие в мир природы прямо сейчас
          </Paragraph>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              type="primary" 
              size="large"
              className="cta-button"
            >
              <Link to="/gallery">Посмотреть галерею</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </Content>
  );
};

export default Home;