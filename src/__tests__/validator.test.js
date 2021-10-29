import Validator from '../validator';

test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
])(('Проверка метода validatephone'), (obj, exp) => {
  expect(Validator.validatephone(obj)).toBe(exp);
});

test(('Error'), () => {
  expect(() => Validator.validatephone('df567890456')).toThrow('This is not phone number!');
});
