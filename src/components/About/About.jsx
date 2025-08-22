import React from 'react';
import { Layout, Row, Col, Card, Typography, Timeline, Progress, Statistic, Space } from 'antd';
import { motion } from 'framer-motion';
import { 
  BranchesOutlined, 
  GlobalOutlined, 
  TeamOutlined, 
  HeartOutlined,
  EnvironmentOutlined,
  RocketOutlined,
  TrophyOutlined 
} from '@ant-design/icons';
import './About.css';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const About = () => {
  const stats = [
    { title: 'Видов животных', value: 8700000, suffix: '+', prefix: '', icon: <BranchesOutlined /> },
    { title: 'Лесов вырублено', value: 30, suffix: '%', prefix: '', icon: <EnvironmentOutlined /> },
    { title: 'CO2 в атмосфере', value: 421, suffix: ' ppm', prefix: '', icon: <GlobalOutlined /> },
    { title: 'Защищенных территорий', value: 15, suffix: '%', prefix: '', icon: <TrophyOutlined /> }
  ];

  const timeline = [
    {
      color: '#4CAF50',
      children: (
        <div>
          <Title level={4}>4.6 млрд лет назад</Title>
          <Paragraph>Формирование планеты Земля и начало эволюции жизни</Paragraph>
        </div>
      )
    },
    {
      color: '#8BC34A',
      children: (
        <div>
          <Title level={4}>3.5 млрд лет назад</Title>
          <Paragraph>Появление первых микроорганизмов и начало фотосинтеза</Paragraph>
        </div>
      )
    },
    {
      color: '#FFC107',
      children: (
        <div>
          <Title level={4}>500 млн лет назад</Title>
          <Paragraph>Кембрийский взрыв - появление сложных многоклеточных организмов</Paragraph>
        </div>
      )
    },
    {
      color: '#FF9800',
      children: (
        <div>
          <Title level={4}>400 млн лет назад</Title>
          <Paragraph>Растения и животные начинают осваивать сушу</Paragraph>
        </div>
      )
    },
    {
      color: '#F44336',
      children: (
        <div>
          <Title level={4}>Современность</Title>
          <Paragraph>Эра человека и необходимость защиты природы</Paragraph>
        </div>
      )
    }
  ];

  const threats = [
    { name: 'Изменение климата', percent: 85, status: 'exception' },
    { name: 'Загрязнение океанов', percent: 78, status: 'exception' },
    { name: 'Вырубка лесов', percent: 65, status: 'active' },
    { name: 'Исчезновение видов', percent: 72, status: 'exception' }
  ];

  return (
    <Content className="about-content">
      {/* Hero Section */}
      <motion.div 
        className="about-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-overlay">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Title level={1} className="about-title">
                О природе нашей планеты
              </Title>
              <Paragraph className="about-description">
                Земля - это единственный известный нам дом, где существует жизнь. 
                Каждый вид, каждая экосистема играют важную роль в поддержании 
                баланса нашей удивительной планеты.
              </Paragraph>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Statistics Section */}
      <div className="stats-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Title level={2} className="section-title">
              Природа в цифрах
            </Title>
          </motion.div>
          
          <Row gutter={[24, 24]}>
            {stats.map((stat, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="stat-card">
                    <div className="stat-icon">
                      {stat.icon}
                    </div>
                    <Statistic
                      title={stat.title}
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      valueStyle={{ 
                        color: '#4CAF50', 
                        fontSize: '2rem', 
                        fontWeight: 'bold' 
                      }}
                    />
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="timeline-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Title level={2} className="section-title">
              История жизни на Земле
            </Title>
          </motion.div>
          
          <Row gutter={[48, 24]} align="middle">
            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Timeline mode="left" items={timeline} className="evolution-timeline" />
              </motion.div>
            </Col>
            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Evolution of life"
                  className="timeline-image"
                />
              </motion.div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Threats Section */}
      <div className="threats-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Title level={2} className="section-title threats-title">
              Угрозы для природы
            </Title>
            <Paragraph className="threats-description">
              Современные вызовы, с которыми сталкивается наша планета
            </Paragraph>
          </motion.div>
          
          <Row gutter={[24, 24]}>
            {threats.map((threat, index) => (
              <Col xs={24} md={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="threat-card">
                    <Title level={4}>{threat.name}</Title>
                    <Progress 
                      percent={threat.percent} 
                      status={threat.status}
                      strokeWidth={12}
                      className="threat-progress"
                    />
                    <Paragraph className="threat-text">
                      Уровень угрозы: {threat.percent}%
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
            Вместе мы можем изменить мир
          </Title>
          <Paragraph className="cta-description">
            Каждое действие важно. Начните с малого, но начните сегодня.
          </Paragraph>
          <Space size="large">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card className="action-card">
                <HeartOutlined className="action-icon" />
                <Title level={4}>Сохраняйте</Title>
                <Paragraph>Берегите природные ресурсы</Paragraph>
              </Card>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card className="action-card">
                <TeamOutlined className="action-icon" />
                <Title level={4}>Участвуйте</Title>
                <Paragraph>Присоединяйтесь к экологическим проектам</Paragraph>
              </Card>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card className="action-card">
                <RocketOutlined className="action-icon" />
                <Title level={4}>Действуйте</Title>
                <Paragraph>Внедряйте экологичные технологии</Paragraph>
              </Card>
            </motion.div>
          </Space>
        </div>
      </motion.div>
    </Content>
  );
};

export default About;