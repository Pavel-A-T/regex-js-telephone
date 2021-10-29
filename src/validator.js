export default class Validator {
  static validatephone(phonenumber) {
    let phone = phonenumber;
    let regex = new RegExp('[a-zA-Z]+');
    if (regex.test(phonenumber)) {
      throw new Error('This is not phone number!');
    }
    phone = phone.replaceAll('(', '').trim();
    phone = phone.replaceAll(')', '');
    phone = phone.replaceAll(' ', '');
    phone = phone.replaceAll('-', '');
    regex = new RegExp('^[\\+]');
    phone = (regex.test(phone)) ? phone : `+${phone}`;
    if (phone.length === 12 && phone.charAt(1) === '8') {
      const arr = phone.split('');
      arr[1] = 7;
      phone = arr.join('');
    }
    return phone;
  }
}
