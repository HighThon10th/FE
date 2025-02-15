import styled from '@emotion/styled';
import * as DOMPurify from 'isomorphic-dompurify';
import PropTypes from 'prop-types';

const DetailContent = ({ Content }) => {
	return (
		<DetailContent_Container>
			<div
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(Content ? Content : ''),
				}}
			></div>
		</DetailContent_Container>
	);
};

DetailContent.propTypes = {
	Content: PropTypes.node.isRequired,
};

const DetailContent_Container = styled.div`
  width: 100%;
  min-height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 35px;
`;

export default DetailContent;
