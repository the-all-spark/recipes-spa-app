import H1Text from '@/components/H1Text/H1Text';
import notFoundImage from '@/assets/images/recipe_not_found.webp';

const NotFoundPage = () => {
  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img src={notFoundImage} alt="Image for not found page" width="400" height="400" />
      </div>

      <H1Text>404 Not Found</H1Text>
    </>
  );
};

export default NotFoundPage;
