import { Routes as MyRoutes, Route } from 'react-router-dom';
import { Todos, AddTodo, Contact } from '../pages';
import { ROUTE } from '../enums/routes';

export function Routes() {
  return (
    <MyRoutes>
      <Route path={ROUTE.HOME} element={<Todos />} />
      <Route path={ROUTE.TODO_ADD} element={<AddTodo />} />
      <Route path="/contact" element={<Contact />} />
      <Route path={ROUTE.NOT_FOUND} element={<div>404</div>} />
    </MyRoutes>
  );
}
