const [dayInp, monthInp, yearInp] = ["day", "month", "year"].map(id => document.getElementById(id));
const [dayOtp, monthOtp, yearOtp] = ["DD", "MM", "YY"].map(id => document.getElementById(id));
const form = document.querySelector("form");

const date = new Date();
let [day, month, year] = [date.getDate(), date.getMonth() + 1, date.getFullYear()];
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  let isValid = true;
  document.querySelectorAll("input").forEach(i => {
    const parent = i.parentElement;
    if (!i.value || (i === monthInp && i.value > 12) || (i === dayInp && i.value > 31)) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = !i.value ? "this field is required." : "must be a valid value.";
      isValid = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
    }
  });
  return isValid;
}

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (dayInp.value > day) { day += months[month - 1]; month--; }
    if (monthInp.value > month) { month += 12; year--; }

    const [d, m, y] = [day - dayInp.value, month - monthInp.value, year - yearInp.value];
    [dayOtp.innerHTML, monthOtp.innerHTML, yearOtp.innerHTML] = [d, m, y];
  }
}

form.addEventListener("submit", handleSubmit);
