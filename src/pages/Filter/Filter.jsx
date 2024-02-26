import { CheckboxForm, MainButton, Svg } from '@/components/Atoms';
import { Form, Link } from 'react-router-dom';

function Filter() {
  return (
    <div>
      <header className="flex justify-between p-4 ">
        <Link >
          <Svg width="16px" height="16px" id="arrow-left" />
        </Link>
        <span className="text-b-1-medium">카테고리</span>{' '}
        <button>초기화</button>
      </header>
      <main>
        <Form method="get">
          <ul className="mx-4">
            <li>
              <CheckboxForm id="selectAll" name="selectAll">
                전체선택
              </CheckboxForm>
            </li>
            <li>
              <CheckboxForm id="novel" name="novel" className="h-16">
                소설
              </CheckboxForm>
            </li>
            <li></li>
          </ul>
          <MainButton type="submit">선택완료</MainButton>
        </Form>
      </main>
    </div>
  );
}

export default Filter;
