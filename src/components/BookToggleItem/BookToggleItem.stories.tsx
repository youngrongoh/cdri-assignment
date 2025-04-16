import type { Meta, StoryObj } from '@storybook/react';
import BookToggleItem from '.';
import { MemoryRouter } from 'react-router';

const meta: Meta<typeof BookToggleItem> = {
  title: 'Components/BookToggleItem',
  component: BookToggleItem,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof BookToggleItem>;

const data = JSON.parse(
  '{"documents":[{"authors":["김기수"],"contents":"이 책은 코딩 초보자가 문법을 빠르고 재밌게 배울 수 있도록 실무에서 주로 사용하는 내용을 쏙쏙 골라 다양한 예제와 함께 다룹니다. 개발 환경 설정부터 HTML, CSS, 자바스크립트 기초까지 한 권에 담았고, 마지막에는 실무에서 유용하게 활용할 수 있는 나만의 포트폴리오 페이지를 만들어 배운 내용을 완성합니다. 단순한 코딩 및 결과 확인식 설명에서 벗어나 원리를 이해하며 학습할 수 있어서 외우지 않아도 자연스럽게 이해되며, 베타 학습단과 함께 내용","datetime":"2022-04-25T00:00:00.000+09:00","isbn":"1165219468 9791165219468","price":27000,"publisher":"길벗","sale_price":24300,"status":"정상판매","thumbnail":"https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F6052846%3Ftimestamp%3D20250109150415","title":"코딩 자율학습 HTML + CSS + 자바스크립트","translators":[],"url":"https://search.daum.net/search?w=bookpage&bookId=6052846&q=%EC%BD%94%EB%94%A9+%EC%9E%90%EC%9C%A8%ED%95%99%EC%8A%B5+HTML+%2B+CSS+%2B+%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8"}],"meta":{"is_end":false,"pageable_count":1000,"total_count":1279}}',
).documents[0];

export const Default: Story = {
  args: {
    ...data,
    salePrice: data.sale_price,
  },
};
