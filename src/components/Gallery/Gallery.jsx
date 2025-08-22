import React, { useState } from 'react';
import { Layout, Row, Col, Card, Modal, Typography, Button, Space } from 'antd';
import { motion } from 'framer-motion';
import { EyeOutlined, DownloadOutlined, HeartOutlined } from '@ant-design/icons';
import './Gallery.css';

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { Meta } = Card;

const Gallery = () => {
  const [visible, setVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const images = [
    {
      id: 1,
      title: 'Горное озеро',
      description: 'Кристально чистое озеро в окружении величественных гор',
      url: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Горы'
    },
    {
      id: 2,
      title: 'Тропический лес',
      description: 'Буйная зелень тропического леса с множеством видов растений',
      url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Лес'
    },
    {
      id: 3,
      title: 'Океанский закат',
      description: 'Завораживающий закат над бескрайним океаном',
      url: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Океан'
    },
    {
      id: 4,
      title: 'Цветущие поля',
      description: 'Бескрайние поля, усыпанные яркими цветами',
      url: 'https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Поля'
    },
    {
      id: 5,
      title: 'Водопад в джунглях',
      description: 'Мощный водопад, скрытый в глубине тропических джунглей',
      url: 'https://images.pexels.com/photos/552785/pexels-photo-552785.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Водопады'
    },
    {
      id: 6,
      title: 'Арктическое сияние',
      description: 'Северное сияние танцует в ночном небе',
      url: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Небо'
    },
    {
      id: 7,
      title: 'Пустынные дюны',
      description: 'Золотые песчаные дюны под палящим солнцем',
      url: 'https://images.pexels.com/photos/1006965/pexels-photo-1006965.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Пустыня'
    },
    {
      id: 8,
      title: 'Альпийские луга',
      description: 'Зеленые луга с редкими альпийскими цветами',
      url: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Луга'
    },
    {
      id: 9,
      title: 'Коралловый риф',
      description: 'Подводный мир кораллового рифа с яркими рыбами',
      url: 'https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Подводный мир'
    }
  ];

  const openModal = (image) => {
    setCurrentImage(image);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    setCurrentImage(null);
  };

  return (
    <Content className="gallery-content">
      <div className="gallery-header">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title level={1} className="gallery-title">
            Галерея природы
          </Title>
          <Paragraph className="gallery-description">
            Коллекция потрясающих фотографий, показывающих красоту и разнообразие нашей планеты
          </Paragraph>
        </motion.div>
      </div>

      <div className="gallery-grid">
        <Row gutter={[24, 24]}>
          {images.map((image, index) => (
            <Col xs={24} sm={12} lg={8} key={image.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Card
                  hoverable
                  className="gallery-card"
                  cover={
                    <div className="image-container">
                      <img alt={image.title} src={image.url} />
                      <div className="image-overlay">
                        <Space>
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Button 
                              type="primary" 
                              shape="circle" 
                              icon={<EyeOutlined />}
                              className="overlay-button"
                              onClick={() => openModal(image)}
                            />
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Button 
                              type="primary" 
                              shape="circle" 
                              icon={<HeartOutlined />}
                              className="overlay-button"
                            />
                          </motion.div>
                        </Space>
                      </div>
                      <div className="category-tag">
                        {image.category}
                      </div>
                    </div>
                  }
                >
                  <Meta 
                    title={image.title} 
                    description={image.description}
                  />
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>

      <Modal
        open={visible}
        footer={null}
        onCancel={closeModal}
        width="80%"
        className="image-modal"
        centered
      >
        {currentImage && (
          <div className="modal-content">
            <img src={currentImage.url} alt={currentImage.title} className="modal-image" />
            <div className="modal-info">
              <Title level={3}>{currentImage.title}</Title>
              <Paragraph>{currentImage.description}</Paragraph>
              <Space>
                <Button type="primary" icon={<DownloadOutlined />}>
                  Скачать
                </Button>
                <Button icon={<HeartOutlined />}>
                  В избранное
                </Button>
              </Space>
            </div>
          </div>
        )}
      </Modal>
    </Content>
  );
};

export default Gallery;