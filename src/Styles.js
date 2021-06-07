import styled from 'styled-components';

export const Container = styled.div`
	width: 1170px;
	margin: 0 auto;
	padding: 0 15px;
`;
Container.displayName = 'Container';
export const FormElement = styled.form`
	width: 50%;
	border: 1px solid #555;
	border-radius: 5px;
	padding: 15px;
	margin-bottom: 15px;
`;
FormElement.displayName = 'FormElement';

export const FormGroup = styled.div`
	display: flex;
	margin-top: 10px;
`;
FormGroup.displayName = 'FormGroup';

export const Label = styled.label`
	flex-basis: 20%;
`;
Label.displayName = 'Label';
