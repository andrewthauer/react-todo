import styled from 'styled-components';

//
// Headings
//

export const Headline = styled.h1.attrs({
  className: 'f2 f-headline lh-solid mid-gray avenir',
})``;

export const SubHeadline = styled.h1.attrs({
  className: 'f2 f-subheadline lh-title mid-gray small-caps tracked-mega avenir',
})``;

export const Title = styled.h1.attrs({
  className: 'f3 f-title lh-copy avenir',
})``;

//
// Content
//

export const Paragraph = styled.p.attrs({
  className: '',
})``;

//
// Lists
//

export const List = styled.ul.attrs({
  className: 'list pl0 ml0 ba b--light-silver br2',
})``;

export const ListItem = styled.li.attrs({
  className: 'ph3 pv3 bb b--light-silver',
})``;

//
// Buttons
//

export const Link = styled.a.attrs({
  className: 'f5 link',
})``;

export const Button = styled.button.attrs({
  className: 'f5 link br1 ph3 pv2 mb2 dib white bg-dark-green',
})``;

//
// Forms
//

export const Label = styled.label.attrs({
  className: '',
})``;

export const TextBox = styled.input.attrs({
  type: 'text',
  className: 'pa2',
})``;

export const CheckBox = styled.input.attrs({
  type: 'checkbox',
  className: '',
})`
  height: 30px;
  width: 30px;
  vertical-align: middle;
`;

//
// Tables
//

export const Table = styled.table.attrs({
  className: 'table'
})``;

export const TableHeader = styled.thead.attrs({
  className: ''
})``;

export const TableFooter = styled.tfoot.attrs({
  className: ''
})``;

export const TableRow = styled.tr.attrs({
  className: ''
})``;

export const TableCell = styled.tr.attrs({
  className: ''
})``;
