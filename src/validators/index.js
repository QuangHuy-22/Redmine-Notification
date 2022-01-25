import {
  required,
  email,
  digits,
  max,
  min,
  regex,
  size,
  confirmed,
  length,
} from "vee-validate/dist/rules";
import { extend, setInteractionMode } from "vee-validate";
setInteractionMode("eager"); // for understand: https://vee-validate.logaretm.com/v3/guide/interaction-and-ux.html#interaction-modes

import { phone_code_list } from "./phone_code.js";

extend("confirmed", {
  ...confirmed,
  message: "{_field_} xác nhận không giống nhau",
});

extend("length", {
  ...length,
  message: "{_field_} phải nằm trong khoảng {min} đến {max} ký tự",
});
extend("lBetween", {
  params: ["min", "max"],
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },
  message: "{_field_} phải có độ dài từ {min} đến {max} ký tự",
});

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} không được bỏ trống",
});

extend("nsh-required-text", {
  ...required,
  message: "{_field_} bắt buộc nhập",
});

extend("max", {
  ...max,
  message: "{_field_} không quá {length} ký tự",
});

extend("min", {
  ...min,
  message: "{_field_} may not be lower than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email không hợp lệ",
});

extend("size", {
  ...size,
  message: "",
});

extend("NAME_1", {
  message: "{_field_} không được kí tự đặc biệt",
  validate: (value) => {
    let regex = new RegExp(
      "^[0-9a-zA-Z_áàảãạăắặằẳẵâấầẩẫậÁÀẢÃẠĂẮẶẰẲẴÂẤẦẨẪẬđĐéèẻẽẹêếềểễệÉÈẺẼẸÊẾỀỂỄỆíìỉĩịÍÌỈĨỊóòỏõọôốồổỗộơớờởỡợÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢúùủũụưứừửữựÚÙỦŨỤƯỨỪỬỮỰýỳỷỹỵÝỲỶỸỴ ]{1,255}$"
    );
    return regex.test(value);
  },
});

extend("NAME_2", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^[0-9a-zA-Z ]{1,255}$");
    return regex.test(value);
  },
});

extend("ID_NO", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^\\d{9}(?:\\d{3})?$");
    return regex.test(value);
  },
});

extend("PASSPORT_NO", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^[A-Z0-9]{1,10}$");
    return regex.test(value);
  },
});

extend("PHONE_NO", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^(0|00)(" + phone_code_list + ")\\d{6,11}$");
    return regex.test(value);
  },
});

extend("PHONE_NO_1", {
  message: "",
  validate: (value) => {
    let regex = new RegExp(
      "^(\\+|00)(" + phone_code_list + ")( \\d\\d\\d){3}$"
    );
    return regex.test(value);
  },
});

extend("PHONE_NO_2", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^0(\\d{3})( \\d{3}){2}$");
    return regex.test(value);
  },
});

extend("PHONE_NO_3", {
  message: "{_field_} không hợp lệ",
  validate: (value) => {
    let regex = new RegExp("^(\\d){1,15}$");
    return regex.test(value);
  },
});

extend("TEL_NO_1", {
  message: "",
  validate: (value) => {
    let regex = new RegExp(
      "^(\\+|0)(" + phone_code_list + ")( \\d\\d)( \\d\\d\\d){2}$"
    );
    return regex.test(value);
  },
});

extend("TEL_NO_2", {
  message: "",
  validate: (value) => {
    let regex = /^(\d{4} )([0-9]{4})([0-9]{2})?$/;
    // let regex = new RegExp("^(\\d{4}\\s)(\\d){1,11}$");
    return regex.test(value);
  },
});

extend("ADDRESS_1", {
  message: "",
  validate: (value) => {
    let regex = new RegExp(
      "^[0-9a-zA-Z_áàảãạăắặằẳẵâấầẩẫậÁÀẢÃẠĂẮẶẰẲẴÂẤẦẨẪẬđĐéèẻẽẹêếềểễệÉÈẺẼẸÊẾỀỂỄỆíìỉĩịÍÌỈĨỊóòỏõọôốồổỗộơớờởỡợÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢúùủũụưứừửữựÚÙỦŨỤƯỨỪỬỮỰýỳỷỹỵÝỲỶỸỴ ]+(\\d\\/\\d*[a-zA-Z]?)*(,[0-9a-zA-Z_áàảãạăắặằẳẵâấầẩẫậÁÀẢÃẠĂẮẶẰẲẴÂẤẦẨẪẬđĐéèẻẽẹêếềểễệÉÈẺẼẸÊẾỀỂỄỆíìỉĩịÍÌỈĨỊóòỏõọôốồổỗộơớờởỡợÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢúùủũụưứừửữựÚÙỦŨỤƯỨỪỬỮỰýỳỷỹỵÝỲỶỸỴ ]+)*$"
    );
    return regex.test(value);
  },
});

extend("ADDRESS_2", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^[0-9?A-Z0-9? ]+$");
    return regex.test(value);
  },
});

extend("EMAIL", {
  message: "Email không hợp lệ",
  validate: (value) => {
    let regex = new RegExp(
      "^[A-Za-z0-9+_.-]+@([A-Za-z0-9])+\\.([A-Za-z0-9].+)$"
    );
    return regex.test(value);
  },
});
extend("EMAIL1", {
  message: "email không hợp lệ",
  validate: (value) => {
    let regex = new RegExp(
      "^[0-9a-zA-Z_.-]*@((([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"
    );
    return regex.test(value);
  },
});
extend("FAX", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("[^+? *[1-9]+]?[0-9 ]+");
    return regex.test(value);
  },
});

extend("WEBSITE", {
  message: "",
  validate: (value) => {
    let regex = new RegExp(
      "^(http(s)?://.)?(www.)?[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}$"
    );
    return regex.test(value);
  },
});

extend("USERNAME", {
  message: "{_field_} chỉ được chứa các kí tự a-z,A-Z và 0-9",
  validate: (value) => {
    let regex = new RegExp("^[a-zA-Z0-9_.-]{2,50}$");
    return regex.test(value);
  },
});

extend("PASSWORD_1", {
  message: "{_field_} không đúng định dạng",
  validate: (value) => {
    let regex = new RegExp("^[!@#$%^&*a-zA-Z0-9_.-]{6,50}$");
    return regex.test(value);
  },
});

extend("PASSWORD_2", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^(?=.*\\d)(?=.*[a-zA-Z]).{8,20}$");
    return regex.test(value);
  },
});

extend("PASSWORD_3", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$");
    return regex.test(value);
  },
});
extend("PASSWORD_4", {
  message: "",
  validate: (value) => {
    let regex = new RegExp(
      "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=]).{8,20}$"
    );
    return regex.test(value);
  },
});
extend("YEAR", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^\\d{4}$");
    return regex.test(value);
  },
});

extend("YEAR_MONTH", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^\\d{4}-0[1-9]|1[0-2]$");
    return regex.test(value);
  },
});

extend("YEAR_MONTH_DAY_1", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^\\d{4}-0[1-9]|1[0-2]-(0[1-9]|[12]\\d|3[01])$");
    return regex.test(value);
  },
});

extend("YEAR_MONTH_DAY_2", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^\\d{4}0[1-9]|1[0-2](0[1-9]|[12]\\d|3[01])$");
    return regex.test(value);
  },
});
extend("DATE_TIME_1", {
  message: "",
  validate: (value) => {
    let regex = new RegExp(
      "^(\\d{4})-([0]{0,1}[1-9]|1[012])-([1-9]|([012][0-9])|(3[01]))T(20|21|22|23|[0-1]?\\d):[0-5]?\\d:[0-5]?\\d([+-]\\d{2}:\\d{2}|Z)$"
    );
    return regex.test(value);
  },
});
extend("DATE_TIME_2", {
  message: "",
  validate: (value) => {
    let regex = new RegExp(
      "^([1-9]|([012][0-9])|(3[01]))\\/([0]{0,1}[1-9]|1[012])\\/\\d\\d\\d\\d (20|21|22|23|[0-1]?\\d):[0-5]?\\d:[0-5]?\\d$"
    );
    return regex.test(value);
  },
});

extend("TIME_1", {
  message: "",
  validate: (value) => {
    let regex = new RegExp(
      "^T(20|21|22|23|[0-1]\\d):[0-5]\\d:[0-5]\\d\\.\\d\\d\\d$"
    );
    return regex.test(value);
  },
});

extend("TIME_2", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^T(20|21|22|23|[0-1]\\d):[0-5]\\d:[0-5]\\d$");
    return regex.test(value);
  },
});

extend("TIME_3", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^T(20|21|22|23|[0-1]\\d):[0-5]\\d$");
    return regex.test(value);
  },
});

extend("TIME_4", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^T(20|21|22|23|[0-1]\\d)$");
    return regex.test(value);
  },
});

extend("TIME_5", {
  message: "",
  validate: (value) => {
    let regex = new RegExp(
      "^(20|21|22|23|[0-1]\\d):[0-5]\\d:[0-5]\\d\\.\\d\\d\\d$"
    );
    return regex.test(value);
  },
});

extend("TIME_6", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^(20|21|22|23|[0-1]\\d):[0-5]\\d:[0-5]\\d$");
    return regex.test(value);
  },
});

extend("TIME_7", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^(20|21|22|23|[0-1]\\d):[0-5]\\d$");
    return regex.test(value);
  },
});

extend("TIME_8", {
  message: "",
  validate: (value) => {
    let regex = new RegExp(
      "^T(20|21|22|23|[0-1]\\d)[0-5]\\d[0-5]\\d\\.\\d\\d\\d$"
    );
    return regex.test(value);
  },
});

extend("TIME_9", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^T(20|21|22|23|[0-1]\\d)[0-5]\\d[0-5]\\d$");
    return regex.test(value);
  },
});

extend("TIME_10", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^T(20|21|22|23|[0-1]\\d)[0-5]\\d$");
    return regex.test(value);
  },
});

extend("UTC_TIME_1", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("(?:Z|[+-](?:2[0-3]|[01][0-9]):[0-5][0-9])$");
    return regex.test(value);
  },
});

extend("UTC_TIME_2", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^(?:Z|[+-](?:2[0-3]|[01][0-9])[0-5][0-9])$");
    return regex.test(value);
  },
});

extend("UTC_TIME_3", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^(?:Z|[+-](?:2[0-3]|[01][0-9]))$");
    return regex.test(value);
  },
});

extend("DURATION_1", {
  message: "",
  validate: (value) => {
    let regex = new RegExp(
      "^P(?=\\d+[YMWD])(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(T(?=\\d+[HMS])(\\d+H)?(\\d+M)?(\\d+S)?)?$"
    );
    return regex.test(value);
  },
});

extend("TIME_INTERVAL_1", {
  message: "",
  validate: (value) => {
    let regex = new RegExp(
      "^(\\d{4})?(-?)([0]{0,1}[1-9]|1[012])(-?)([1-9]|([012][0-9])|(3[01]))?(T?)(20|21|22|23|[0-1]?\\d)?(:?)[0-5]?\\d(:?)[0-5]?\\d([+-]\\d{2}(:?)\\d{2}?|Z?)\\/(\\d{4})?(-?)([0]{0,1}[1-9]|1[012])(-?)([1-9]|([012][0-9])|(3[01]))?(T?)(20|21|22|23|[0-1]?\\d)?(:?)[0-5]?\\d(:?)[0-5]?\\d([+-]\\d{2}(:?)\\d{2}?|Z?)$"
    );
    return regex.test(value);
  },
});

extend("TIME_INTERVAL_2", {
  message: "",
  validate: (value) => {
    let regex = new RegExp(
      "^(\\d{4})-([0]{0,1}[1-9]|1[012])-([1-9]|([012][0-9])|(3[01]))T(20|21|22|23|[0-1]?\\d):[0-5]?\\d:[0-5]?\\d([+-]\\d{2}:\\d{2}|Z)\\/P(?=\\d+[YMWD])(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(T(?=\\d+[HMS])(\\d+H)?(\\d+M)?(\\d+S)?)?$"
    );
    return regex.test(value);
  },
});

extend("TIME_INTERVAL_3", {
  message: "",
  validate: (value) => {
    let regex = new RegExp(
      "^P(?=\\d+[YMWD])(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(T(?=\\d+[HMS])(\\d+H)?(\\d+M)?(\\d+S)?)?\\/(\\d{4})-([0]{0,1}[1-9]|1[012])-([1-9]|([012][0-9])|(3[01]))T(20|21|22|23|[0-1]?\\d):[0-5]?\\d:[0-5]?\\d([+-]\\d{2}:\\d{2}|Z)$"
    );
    return regex.test(value);
  },
});

extend("AMOUNT_1", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^[1-9]\\d+$");
    return regex.test(value);
  },
});

extend("AMOUNT_2", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^(?:\\d{1,3}(?:,\\d{3})*|\\d+)(?:.\\d+)?$");
    return regex.test(value);
  },
});

extend("AMOUNT_3", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^[+-]?(?:\\d{1,3}(?:,\\d{3})*|\\d+)?$");
    return regex.test(value);
  },
});

extend("AMOUNT_4", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^(?:\\d{1,3}(?:.\\d{3})*|\\d+)(?:,\\d+)?$");
    return regex.test(value);
  },
});

extend("AMOUNT_5", {
  message: "",
  validate: (value) => {
    let regex = new RegExp(
      "^(0|[1-9][0-9]{0,2}(?:(.[0-9]{3})*|[0-9]*))(,[0-9]+){0,1}$"
    );
    if (value[0] == "(" && value[value.length - 1] == ")") {
      let number = value.slice(1, value.length - 1);
      return regex.test(number);
    } else {
      return regex.test(value);
    }
  },
});
extend("IMAGE_UPLOAD", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^.*.(gif|jpe?g|bmp|png|jpg)$");
    if (value[0].size <= 10048576) {
      return regex.test(value[0].name);
    } else {
      return false;
    }
  },
});

extend("BANK_ACC_NO", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^[0-9A-Za-z?]{9,14}$");
    return regex.test(value);
  },
});

extend("ATM_CARD_NO", {
  message: "",
  validate: (value) => {
    let regex = new RegExp(
      "^([0-9]{4})(\\s)?([0-9]{4})(\\s)?([0-9]{4}(\\s)?)([0-9]{4})(\\s)?([0-9]{3})?$"
    );
    return regex.test(value);
  },
});

extend("DEBIT_CARD_NO", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^(\\d{12,19})$");
    return regex.test(value);
  },
});

extend("CARD_VERIFICATION_CODE", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^(\\d{3})$");
    return regex.test(value);
  },
});

extend("TAX_CODE", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^([0-9]{10})(-[0-9]{3})?$");
    return regex.test(value);
  },
});

extend("BUSSINESS_CODE", {
  message: "",
  validate: (value) => {
    // let regex = new RegExp("^(?=\\d{10}|\\d{14}(-\\d{0,3}){0,2}$)[\\d-]{1,14}$");
    let regex = new RegExp("^(\\d*[a-zA-Z]{1}\\d*)$");
    return regex.test(value);
  },
});

extend("EMPLOYEE_CODE", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^[a-zA-Z0-9]{1,15}$");
    return regex.test(value);
  },
});

extend("PARTNER_CODE", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^[a-zA-Z0-9]{1,15}$");
    return regex.test(value);
  },
});

extend("OTP", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^\\d{6}$");
    return regex.test(value);
  },
});
extend("WEB_TEXT", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^<(“[^”]*”|'[^’]*’|[^'”>])*>");
    return regex.test(value);
  },
});
extend("TAX", {
  message: "",
  validate: (value) => {
    let regex = new RegExp("^\\d{3}%$");
    return regex.test(value);
  },
});
extend("DISCOUNT", {
  message: "",
  validate: (value) => {
    let regex_1 = new RegExp("^\\d{3}$");
    let regex_2 = new RegExp("^(?:\\d{1,3}(?:.\\d{3})*|\\d+)(?:,\\d+)?$");
    if (value[value.length - 1] == "%") {
      return regex_1.test(value.slice(0, value.length - 1));
    } else {
      return regex_2.test(value);
    }
  },
});

extend("CHECK_HTML", {
  message: "{_field_} không hợp lệ",
  validate: (value) => {
    let regex = new RegExp("^([^<>]+)$");
    return regex.test(value);
  },
});
