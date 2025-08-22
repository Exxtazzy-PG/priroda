import React from 'react';
import { Layout, Row, Col, Typography, Space, Divider } from 'antd';
import { HeartOutlined, GlobalOutlined, MailOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import './Footer.css';

const { Footer: AntFooter } = Layout;
const { Title, Paragraph, Text } = Typography;

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <AntFooter className="nature-footer">
        <div className="footer-content">
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Title level={3} className="footer-title">
                  🌿 Природа
                </Title>
                <Paragraph className="footer-description">
                  Посвящено красоте и сохранению нашей планеты. 
                  Каждое изображение рассказывает историю о важности 
                  защиты окружающей среды.
                </Paragraph>
              </motion.div>
            </Col>
            
            <Col xs={24} md={8}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Title level={4} className="footer-section-title">
                  Наша миссия
                </Title>
                <Space direction="vertical" size="middle">
                  <div className="footer-item">
                    <HeartOutlined className="footer-icon" />
                    <Text className="footer-text">Любовь к природе</Text>
                  </div>
                  <div className="footer-item">
                    <GlobalOutlined className="footer-icon" />
                    <Text className="footer-text">Защита планеты</Text>
                  </div>
                  <div className="footer-item">
                    <MailOutlined className="footer-icon" />
                    <Text className="footer-text">Экологическое образование</Text>
                  </div>
                </Space>
              </motion.div>
            </Col>
            
            <Col xs={24} md={8}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Title level={4} className="footer-section-title">
                  Присоединяйтесь
                </Title>
                <Paragraph className="footer-text">
                  Станьте частью движения за сохранение природы. 
                  Каждый шаг важен для будущего нашей планеты.
                </Paragraph>
                <motion.div 
                  className="nature-quote"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Text italic className="quote-text">
                    "В природе нет ничего бесполезного" <br />
                    — Мишель де Монтень
                  </Text>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
          
          <Divider className="footer-divider" />
          
          <motion.div 
            className="footer-bottom"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Text className="copyright-text">
              © 2025 Сайт Природы. Создано с любовью к нашей планете 🌍
            </Text>
          </motion.div>
        </div>
      </AntFooter>
    </motion.div>
  );
};

export default Footer;